// services/recipes/ModifyComponent.usecase.ts
import { PrismaClient } from "@prisma/client";
import { AddComponentDTO } from "./AddComponent.usecase";

const prisma = new PrismaClient();

export class ModifyComponentUseCase {
    async execute(parentId: number, childId: number, data: AddComponentDTO) {
        try {
            const detalleActual = await prisma.detalle_formulacion.findFirst({
                where: { id_receta_padre: parentId, id_componente_hijo: childId }
            });

            if (!detalleActual) throw new Error("Insumo no encontrado en la receta.");

            // 1. Sincronizar si aporta a la base
            await prisma.ingrediente_base.updateMany({
                where: { id_componente: childId },
                data: { aporta_a_base_panadera: data.aportaABase }
            });

            // 2. GUARDAR EL VALOR PURO Y LA UNIDAD PURA (Sea gramos o % sin alterar)
            const detalleActualizado = await prisma.detalle_formulacion.update({
                where: { id_detalle: detalleActual.id_detalle },
                data: {
                    cantidad_usada: data.quantity, 
                    unidad_medida_usada: data.unit // "grams" o "percentage"
                }
            });

            return { message: "Insumo modificado con éxito", detalle: detalleActualizado };
        } catch (error) {
            throw error;
        }
    }
}