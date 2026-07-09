import { PrismaClient } from "@prisma/client";
import { createRecipe } from "@/domain/recipeLogic";

const prisma = new PrismaClient();

export interface CreateRecipeDTO {
	nombre: string;
	pesoUnidad: number;
	unidadesTanda: number;
	creadorId: string; // Recibimos el ID desde la sesión como string
	tipo: "RECETA" | "SUBRECETA";
}

export class CreateRecipeUseCase {
	async execute(data: CreateRecipeDTO) {
		try {
			// ==========================================
			// 1. REGLAS DE NEGOCIO (Lógica de Dominio)
			// ==========================================
			const recetaValidada = createRecipe(
				0, 
				data.nombre, 
				data.pesoUnidad, 
				data.unidadesTanda, 
				data.creadorId
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

			// Convertimos el creadorId a entero para satisfacer la llave foránea
			const idUsuarioCreador = parseInt(data.creadorId, 10);
			const creadorValido = isNaN(idUsuarioCreador) ? null : idUsuarioCreador;

			// ==========================================
			// 3. GUARDADO ARQUITECTÓNICO ATÓMICO
			// ==========================================
			// Dejamos que la base de datos maneje el ID autoincremental de forma nativa
			const nuevaReceta = await prisma.catalogo_componente.create({
				data: {
					nombre: recetaValidada.name,
					tipo_componente: data.tipo,
					unidad_medida: "UNIDAD", 
					receta_subreceta: {
						create: {
							unidades_tanda: recetaValidada.batchUnits,
							ppu_objetivo: recetaValidada.unitWeight,
							creado_por: creadorValido // Mapeo de la relación con usuario.id_usuario
						}
					}
				},
				include: { 
					receta_subreceta: true 
				}
			});

			return nuevaReceta;
		} catch (error) {
			throw error;
		}
	}
}
