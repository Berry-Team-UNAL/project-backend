// services/recipes/RemoveComponent.usecase.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class RemoveComponentUseCase {
    async execute(parentId: number, childId: number) {
        try {
            // Buscamos el detalle exacto para asegurarnos de que existe
            const detalle = await prisma.detalle_formulacion.findFirst({
                where: {
                    id_receta_padre: parentId,
                    id_componente_hijo: childId
                }
            });

            if (!detalle) {
                throw new Error("El insumo no se encuentra en esta receta.");
            }

            // Eliminamos usando el id_detalle (Primary Key)
            await prisma.detalle_formulacion.delete({
                where: { id_detalle: detalle.id_detalle }
            });

            return { message: "Insumo eliminado con éxito de la ficha técnica." };
        } catch (error) {
            throw error;
        }
    }
}