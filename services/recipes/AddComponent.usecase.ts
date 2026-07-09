import { PrismaClient } from "@prisma/client";
import { addComponent, Recipe, ComponentInRecipe } from "@/domain/recipeLogic";
import { RecipeRelation } from "@/domain/subrecipeLogic";

const prisma = new PrismaClient();

// Lo que el frontend nos va a enviar
export interface AddComponentDTO {
    childComponentId: number; 
    quantity: number;
    unit: "percentage" | "grams"; 
}

export class AddComponentUseCase {
    async execute(parentId: number, data: AddComponentDTO) {
        try {
            // 1. TRAER LA RECETA PADRE Y SUS COMPONENTES ACTUALES
            const parentDb = await prisma.catalogo_componente.findUnique({
                where: { id_componente: parentId },
                include: {
                    receta_subreceta: {
                        include: {
                            detalle_formulacion: true 
                        }
                    }
                }
            });

            if (!parentDb || !parentDb.receta_subreceta) {
                throw new Error(`La receta padre con ID ${parentId} no existe.`);
            }

            // 2. MAPEAR TODAS LAS RELACIONES PARA EVITAR BUCLES INFINITOS
            const allDetails = await prisma.detalle_formulacion.findMany();
            const allExistingRelationships: RecipeRelation[] = allDetails.map(d => ({
                parentId: d.id_receta_padre, // <-- CORREGIDO: id_receta_padre
                childId: d.id_componente_hijo
            }));

            // 3. ADAPTAR LOS DATOS DE BASE DE DATOS AL FORMATO DE TU LÓGICA DE DOMINIO
            const recipeToChange: Recipe = {
                recipeId: parentDb.id_componente,
                name: parentDb.nombre,
                unitWeight: 0, 
                batchUnits: parentDb.receta_subreceta.unidades_tanda || 1,
                creatorId: "",
                createdAt: new Date(),
                updatedAt: new Date(),
                totalFatPercentage: 0,
                totalHydrationPercentage: 0,
                costPerUnit: 0,
                
                components: parentDb.receta_subreceta.detalle_formulacion.map(d => ({
                    componentId: d.id_componente_hijo,
                    quantity: Number(d.cantidad_usada), // <-- CORREGIDO: cantidad_usada
                    unit: d.unidad_medida_usada as "percentage" | "grams"
                }))
            };

            const newComponent: ComponentInRecipe = {
                componentId: data.childComponentId,
                quantity: data.quantity,
                unit: data.unit
            };

            // ==========================================
            // 4. EJECUTAR LA MAGIA DE TU EQUIPO
            // ==========================================
            addComponent(recipeToChange, newComponent, allExistingRelationships);

            // ==========================================
            // 5. SI TODO SALIÓ BIEN, GUARDAMOS EN BASE DE DATOS
            // ==========================================
            const newDetail = await prisma.detalle_formulacion.create({
                data: {
                    id_receta_padre: parentId, // <-- CORREGIDO: id_receta_padre
                    id_componente_hijo: data.childComponentId,
                    cantidad_usada: data.quantity, // <-- CORREGIDO: cantidad_usada
                    unidad_medida_usada: data.unit
                }
            });

            return { message: "Componente agregado con éxito", detalle: newDetail };
            
        } catch (error) {
            throw error; 
        }
    }
}