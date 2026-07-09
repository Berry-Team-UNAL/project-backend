/* eslint-disable camelcase */
import { PrismaClient } from "@prisma/client";
import { computeIngredientRealCost } from "@/domain/ingredientLogic"; // <-- Importamos tu lógica

const prisma = new PrismaClient();

export interface CreateIngredientDTO {
	nombre: string;
	tipo_componente: string;
	unidad_medida: string;
	aporta_a_base_panadera?: boolean;
	costo_por_gramo: number;
	porcentaje_merma: number;
	porcentaje_humedad: number;
	porcentaje_grasa: number;
}

export class RegisterIngredientUseCase {
<<<<<<< HEAD
    
	// The async function that executes the action
	async execute(data: RegisterIngredientCommand) {
        
		// --- DOMAIN LOGIC GOES HERE (if any) ---
		// For example, if you had a function to calculate real cost based on merma:
		// const realCost = calculateRealCost(data.costo_por_unidad, data.porcentaje_merma);

		// --- INFRASTRUCTURE LOGIC GOES HERE ---
		// We open a try/catch block to handle database errors safely
		try {
			// AWAIT the database transaction
			const newIngredient = await prisma.catalogo_componente.create({
				data: {
					nombre: data.nombre,
					tipo_componente: "INGREDIENTE", // Hardcoded discriminator
					unidad_medida: data.unidad_medida,
                    
					// 1st Nested Insert: Create the ingrediente_base record
					ingrediente_base: {
						create: {
							aporta_a_base_panadera: data.aporta_a_base_panadera,
                            
							// 2nd Nested Insert: Create the financial/chemical data
							articulo_proveedor: {
								create: {
									id_proveedor: 1, // The dummy provider for MVP!
									costo_por_unidad: data.costo_por_unidad, // Or realCost
									porcentaje_agua: data.porcentaje_agua,
									porcentaje_grasa: data.porcentaje_grasa,
									porcentaje_merma_limpieza: data.porcentaje_merma
								}
							}
						}
					}
				},
				// Tell Prisma to return the fully joined object so we can see it
				include: {
					ingrediente_base: {
						include: { articulo_proveedor: true }
					}
				}
			});

			return newIngredient; // Return success to the frontend
            
		} catch (error) {
			console.error("Database error while registering ingredient:", error);
			throw new Error("Could not register the ingredient in the database.");
		}
	}
}
=======
	async execute(data: CreateIngredientDTO) {
		try {
			// ==========================================
			// 1. REGLAS DE NEGOCIO (Lógica Matemática)
			// ==========================================
			// Usamos la función de tu equipo. Si la merma es 100% o el costo es negativo, 
			// esto lanzará el error automáticamente hacia el frontend.
			computeIngredientRealCost({
				costPerGram: data.costo_por_gramo,
				lossPercentage: data.porcentaje_merma
			});

			if (data.porcentaje_humedad < 0 || data.porcentaje_humedad > 100) {
				throw new Error("La humedad debe estar entre 0 y 100%");
			}
			if (data.porcentaje_grasa < 0 || data.porcentaje_grasa > 100) {
				throw new Error("La grasa debe estar entre 0 y 100%");
			}

			// ==========================================
			// 2. REGLA DE NEGOCIO (Evitar Duplicados)
			// ==========================================
			const existe = await prisma.catalogo_componente.findFirst({
				where: { nombre: data.nombre }
			});
			
			if (existe) {
				throw new Error(`El ingrediente '${data.nombre}' ya existe en el catálogo.`);
			}

			// ==========================================
			// 3. GUARDADO ARQUITECTÓNICO (Corregido)
			// ==========================================
			const newIngredient = await prisma.catalogo_componente.create({
				data: {
					nombre: data.nombre,
					tipo_componente: data.tipo_componente,
					unidad_medida: data.unidad_medida,
					
					ingrediente_base: {
						create: { 

							
							// ¡EL ARTÍCULO VA AQUÍ ADENTRO!
							articulo_proveedor: {
								create: {
									costo_por_unidad: data.costo_por_gramo,
									porcentaje_agua: data.porcentaje_humedad,
									porcentaje_grasa: data.porcentaje_grasa,
									porcentaje_merma_limpieza: data.porcentaje_merma,
									es_predeterminado: true,
									proveedor: {
										connectOrCreate: {
											where: { id_proveedor: 1 },
											create: {
												nombre_proveedor: "Proveedor Interno (General)",
												activo: true
											}
										}
									}
								}
							}
						}
					}
				}
			});

			return newIngredient;
		} catch (error) {
			// Relanzamos el error para que el frontend lo pueda mostrar en un Alert
			throw error;
		}
	}
}
>>>>>>> origin/main
