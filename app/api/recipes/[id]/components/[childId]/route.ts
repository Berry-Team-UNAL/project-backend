import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ==========================================
// DELETE: QUITAR UN INGREDIENTE DE LA RECETA
// ==========================================
export async function DELETE(
    request: Request, 
    context: { params: Promise<{ id: string, childId: string }> }
) {
    try {
        const params = await context.params;
        const parentId = parseInt(params.id);       // ID de la Receta
        const childId = parseInt(params.childId);   // ID del Ingrediente a quitar

        if (isNaN(parentId) || isNaN(childId)) throw new Error("IDs inválidos");

        // Borramos la relación en la tabla detalle_formulacion
        await prisma.detalle_formulacion.deleteMany({
            where: {
                id_receta_padre: parentId,
                id_componente_hijo: childId
            }
        });

        return NextResponse.json({ message: "Componente retirado de la receta" }, { status: 200 });
    } catch (error: any) {
        console.error("🔥 ERROR AL QUITAR INGREDIENTE:", error);
        return NextResponse.json({ error: "Error al quitar componente" }, { status: 400 });
    }
}