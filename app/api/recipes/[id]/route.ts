import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const params = await context.params;
        const id = parseInt(params.id);
        if (isNaN(id)) throw new Error("ID inválido");

        const recipeDb = await prisma.catalogo_componente.findUnique({
            where: { id_componente: id },
            include: {
                receta_subreceta: {
                    include: {
                        detalle_formulacion: {
                            include: { catalogo_componente: true }
                        }
                    }
                }
            }
        });

        if (!recipeDb) throw new Error("Receta no encontrada");

        const detalles = recipeDb.receta_subreceta?.detalle_formulacion.map(d => ({
            id_detalle: d.id_detalle,
            id_componente_hijo: d.id_componente_hijo,
            nombre: d.catalogo_componente.nombre,
            tipo: d.catalogo_componente.tipo_componente,
            cantidad: Number(d.cantidad_usada),
            unidad: d.unidad_medida_usada
        })) || [];

        const formattedRecipe = {
            id_componente: recipeDb.id_componente,
            nombre: recipeDb.nombre,
            tipo_componente: recipeDb.tipo_componente,
            unidades_tanda: recipeDb.receta_subreceta?.unidades_tanda || 1,
            ppu_objetivo: Number(recipeDb.receta_subreceta?.ppu_objetivo || 0),
            ingredientes: detalles
        };

        return NextResponse.json(formattedRecipe, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error?.message || "Error al cargar la receta" }, { status: 400 });
    }
}

// ==========================================
// PUT: ACTUALIZAR EL CASCARÓN DE LA RECETA
// ==========================================
export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const params = await context.params;
        const id = parseInt(params.id);
        if (isNaN(id)) throw new Error("ID inválido");

        const body = await request.json();

        // Actualizamos las dos tablas conectadas al mismo tiempo
        await prisma.catalogo_componente.update({
            where: { id_componente: id },
            data: {
                nombre: body.nombre,
                tipo_componente: body.tipo,
                receta_subreceta: {
                    update: {
                        unidades_tanda: body.unidades_tanda,
                        ppu_objetivo: body.peso_unidad
                    }
                }
            }
        });

        return NextResponse.json({ message: "Receta actualizada" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error?.message || "Error al actualizar" }, { status: 400 });
    }
}

// ==========================================
// DELETE: ELIMINAR (DESACTIVAR) UNA RECETA
// ==========================================
export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const params = await context.params;
        const id = parseInt(params.id);
        if (isNaN(id)) throw new Error("ID inválido");

        // Soft Delete: No la borramos de verdad para no romper el historial de costos, solo la ocultamos
        await prisma.catalogo_componente.update({
            where: { id_componente: id },
            data: { activo: false }
        });

        return NextResponse.json({ message: "Receta eliminada" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error?.message || "Error al eliminar" }, { status: 400 });
    }
}