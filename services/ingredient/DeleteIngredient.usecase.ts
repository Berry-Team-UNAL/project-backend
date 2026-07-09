 
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DeleteIngredientUseCase {
	async execute(id: number) {
		try {
			const existing = await prisma.catalogo_componente.findUnique({
				where: { id_componente: id }
			});

			if (!existing) {
				throw new Error(`No se encontró el ingrediente con ID ${id}`);
			}

			// Hacemos el "Soft Delete" (Desactivar) que tu equipo diseñó
			const deletedIngredient = await prisma.catalogo_componente.update({
				where: { id_componente: id },
				data: { activo: false }
			});

			return { 
				message: `Ingrediente con ID ${id} desactivado correctamente`,
				ingrediente: deletedIngredient
			};
		} catch (error) {
			throw error; // Lanzamos el error limpio para capturarlo en la ruta
		}
	}
}
