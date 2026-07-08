/* eslint-disable camelcase */
import { prisma } from "@/domain/prisma";
export interface CreateIngredientDTO {
	nombre: string;
	tipo_componente: string;
	unidad_medida: string;
	aporta_a_base_panadera?: boolean;
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
					tipoComponente: "INGREDIENTE", // Hardcoded discriminator
					unidadMedida: data.unidad_medida,
                    
					// 1st Nested Insert: Create the ingrediente_base record
					ingredienteBase: {
						create: {
							aportaABasePanadera: data.aporta_a_base_panadera,
                            
							// 2nd Nested Insert: Create the financial/chemical data
							articuloProveedor: {
								create: {
									idProveedor: 1, // The dummy provider for MVP!
									costoPorUnidad: data.costo_por_unidad, // Or realCost
									porcentajeAgua: data.porcentaje_agua,
									porcentajeGrasa: data.porcentaje_grasa,
									porcentajeMermaLimpieza: data.porcentaje_merma
								}
							}
						}
					}
				},
				// Tell Prisma to return the fully joined object so we can see it
				include: {
					ingredienteBase: {
						include: { articuloProveedor: true }
					}
				}
			});

			return newIngredient; // Return success to the frontend
            
		} catch (error) {
			console.error("Database error while registering ingredient:", error);
			throw new Error("Could not register the ingredient in the database.");
=======
	async execute(data: CreateIngredientDTO) {
		try {
			const newIngredient = await prisma.catalogo_componente.create({
				data: {
					nombre: data.nombre,
					tipo_componente: data.tipo_componente,
					unidad_medida: data.unidad_medida,

					ingrediente_base: {
						create: {
							aporta_a_base_panadera: data.aporta_a_base_panadera ?? false,
						}
					}
				},

				include: {
					ingrediente_base: true
				}
			});

			return newIngredient;
		} catch (error) {
			throw new Error("Error al registrar el ingrediente", { cause: error });
>>>>>>> samGue-Backend
		}
	}
}
