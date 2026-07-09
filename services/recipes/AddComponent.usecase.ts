import { PrismaClient } from "@prisma/client";
import { addComponent, Recipe, ComponentInRecipe } from "@/domain/recipeLogic";
import { RecipeRelation } from "@/domain/subrecipeLogic";

const prisma = new PrismaClient();

// Lo que el frontend nos va a enviar
export interface AddComponentDTO {
    childComponentId: number; 
    quantity: number;
    unit: "percentage" | "grams";
    aportaABase: boolean; // <-- Campo que indica si es harina/base panadera
}

export class AddComponentUseCase {
    async execute(parentId: number, data: AddComponentDTO) {
        try {
            // 1. TRAER LA RECETA PADRE Y SUS COMPONENTES ACTUALES CON SUS DATOS DE BASE PANADERA
            const parentDb = await prisma.catalogo_componente.findUnique({
                where: { id_componente: parentId },
                include: {
                    receta_subreceta: {
                        include: {
                            // Hacemos un include profundo para llegar a 'aporta_a_base_panadera'
                            detalle_formulacion: {
                                include: {
                                    catalogo_componente: {
                                        include: {
                                            ingrediente_base: true
                                        }
                                    }
                                }
                            } 
                        }
                    }
                }
            });

            if (!parentDb || !parentDb.receta_subreceta) {
                throw new Error(`La receta padre con ID ${parentId} no existe.`);
            }

            // 2. CALCULAR EL PESO TOTAL DE LOS INGREDIENTES QUE YA SON BASE (HARINAS)
            const ingredientesExistentes = parentDb.receta_subreceta.detalle_formulacion;
            const componentesBase = ingredientesExistentes.filter(
                item => item.catalogo_componente?.ingrediente_base?.aporta_a_base_panadera === true
            );
            
            // Sumamos el gramaje total de la base actual
            const pesoBaseTotal = componentesBase.reduce((sum, item) => sum + Number(item.cantidad_usada), 0);

            // 3. INTERCEPTAR SI EL USUARIO DIGITÓ UN PORCENTAJE PANADERO
            let cantidadFinalEnGramos = data.quantity;

            if (data.unit === "percentage") {
                if (pesoBaseTotal === 0) {
                    throw new Error(
                        "No se puede añadir un insumo por % Panadero si la receta no tiene al menos un ingrediente BASE (Harina) registrado en gramos primero."
                    );
                }
                // Regla de tres: gramos = (porcentaje * pesoBaseTotal) / 100
                cantidadFinalEnGramos = (data.quantity * pesoBaseTotal) / 100;
            }

            // 4. ACTUALIZAR SI ESTE NUEVO INGREDIENTE APORTARÁ A LA BASE PANADERA
            // Usamos updateMany por seguridad si el componente llega a ser una subreceta (no rompería el flujo)
            await prisma.ingrediente_base.updateMany({
                where: { id_componente: data.childComponentId },
                data: { aporta_a_base_panadera: data.aportaABase }
            });

            // 5. MAPEAR TODAS LAS RELACIONES PARA EVITAR BUCLES INFINITOS
            const allDetails = await prisma.detalle_formulacion.findMany();
            const allExistingRelationships: RecipeRelation[] = allDetails.map(d => ({
                parentId: d.id_receta_padre,
                childId: d.id_componente_hijo
            }));

            // 6. ADAPTAR LOS DATOS DE BASE DE DATOS AL FORMATO DE TU LÓGICA DE DOMINIO
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
                
                components: ingredientesExistentes.map(d => ({
                    componentId: d.id_componente_hijo,
                    quantity: Number(d.cantidad_usada), 
                    unit: d.unidad_medida_usada as "percentage" | "grams"
                }))
            };

            // Enviamos el componente ya convertido a gramos a la función de validación de tu equipo
            const newComponent: ComponentInRecipe = {
                componentId: data.childComponentId,
                quantity: cantidadFinalEnGramos,
                unit: "grams" 
            };

            // 7. EJECUTAR LA MAGIA DE VALIDACIÓN DE TU EQUIPO
            addComponent(recipeToChange, newComponent, allExistingRelationships);

            // 8. SI TODO SALIÓ BIEN, GUARDAMOS EN BASE DE DATOS SIEMPRE EN GRAMOS
            const newDetail = await prisma.detalle_formulacion.create({
                data: {
                    id_receta_padre: parentId,
                    id_componente_hijo: data.childComponentId,
                    cantidad_usada: data.quantity, // Guardamos el peso real calculado
                    unidad_medida_usada: data.unit         // Forzamos gramos para mantener la consistencia matemática
                }
            });

            return { message: "Componente agregado con éxito", detalle: newDetail };
            
        } catch (error) {
            throw error; 
        }
    }
}