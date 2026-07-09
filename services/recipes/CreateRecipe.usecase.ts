import { PrismaClient } from "@prisma/client";
import { createRecipe } from "@/domain/recipeLogic";

const prisma = new PrismaClient();

export interface CreateRecipeDTO {
    nombre: string;
    peso_unidad: number;
    unidades_tanda: number;
    creador_id: string; // Puede ser el ID o Nombre del usuario que la crea
    tipo: "RECETA" | "SUBRECETA";
}

export class CreateRecipeUseCase {
	async execute(data: CreateRecipeDTO) {
		try {
			// ==========================================
			// 1. REGLAS DE NEGOCIO (Lógica de Dominio)
			// ==========================================
			// Usamos la función de tu equipo. Si el nombre está vacío o el peso es inválido,
			// esto lanzará un error automáticamente. (Pasamos 0 como ID temporal).
			const recetaValidada = createRecipe(
				0, 
				data.nombre, 
				data.peso_unidad, 
				data.unidades_tanda, 
				data.creador_id
			);

			// ==========================================
			// 2. REGLA DE DUPLICADOS
			// ==========================================
			const existe = await prisma.catalogo_componente.findFirst({
				where: { nombre: recetaValidada.name }
			});
			if (existe) {
				throw new Error(`Ya existe una receta o componente llamado '${recetaValidada.name}'.`);
			}

			// ==========================================
			// 3. GUARDADO ARQUITECTÓNICO
			// ==========================================
			const nuevaReceta = await prisma.catalogo_componente.create({
				data: {
					nombre: recetaValidada.name,
					tipo_componente: data.tipo,
					unidad_medida: "UNIDAD", 
                    
					receta_subreceta: {
						create: {
							unidades_tanda: recetaValidada.batchUnits,
							// AQUÍ GUARDAMOS EL PESO POR UNIDAD:
							ppu_objetivo: recetaValidada.unitWeight 
						}
					}
				},
				include: { receta_subreceta: true }
			});

			return nuevaReceta;
		} catch (error) {
			throw error;
		}
	}
}
