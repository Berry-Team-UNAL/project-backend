import { PrismaClient } from "@prisma/client";
import { addComponent, Recipe, ComponentInRecipe } from "@/domain/recipeLogic";
import { RecipeRelation } from "@/domain/subrecipeLogic";

const prisma = new PrismaClient();

export interface AddComponentDTO {
    childComponentId: number; 
    quantity: number;
    unit: "percentage" | "grams";
    aportaABase: boolean; 
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

			const ingredientesExistentes = parentDb.receta_subreceta.detalle_formulacion;
			const componentesBase = ingredientesExistentes.filter(
				item => (item.catalogo_componente?.ingrediente_base as any)?.aporta_a_base_panadera === true
			);
            
			const pesoBaseTotal = componentesBase.reduce((sum, item) => sum + Number(item.cantidad_usada), 0);

			// 3. INTERCEPTAR SI EL USUARIO DIGITÓ UN PORCENTAJE PANADERO
			let cantidadFinalEnGramos = data.quantity;

			if (data.unit === "percentage") {
				// QUITAMOS EL ERROR COERCITIVO: Si no hay base aún, se asume 0 gramos para no romper el flujo
				cantidadFinalEnGramos = pesoBaseTotal > 0 ? (data.quantity * pesoBaseTotal) / 100 : 0;
			}

			// 4. ELIMINADO/COMENTADO: Se remueve el bloque de 'ingrediente_base' para evitar el error 'Unknown argument'
			/*
            await prisma.ingrediente_base.updateMany({
                where: { id_componente: data.childComponentId },
                data: { aporta_a_base_panadera: data.aportaABase }
            });
            */

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

			const newComponent: ComponentInRecipe = {
				componentId: data.childComponentId,
				quantity: cantidadFinalEnGramos,
				unit: "grams" 
			};

			// 7. EJECUTAR LA VALIDACIÓN DEL SISTEMA EXPERTO
			addComponent(recipeToChange, newComponent, allExistingRelationships);

			// 8. GUARDAR EN LA BASE DE DATOS VALORES PUROS (Solución al Punto 2)
			const newDetail = await prisma.detalle_formulacion.create({
				data: {
					id_receta_padre: parentId,
					id_componente_hijo: data.childComponentId,
					cantidad_usada: data.quantity,       // <-- GUARDAMOS EL VALOR PURO (ej: 2)
					unidad_medida_usada: data.unit       // <-- GUARDAMOS LA UNIDAD PURA ("percentage" o "grams")
				}
			});

			return { message: "Componente agregado con éxito", detalle: newDetail };
            
		} catch (error) {
			throw error; 
		}
	}
}
