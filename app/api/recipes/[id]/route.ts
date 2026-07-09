import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { procesarPorcentajesBase } from "@/domain/data/sacaleLogic"; // Ajusta la ruta si es necesario (ej. "@/domain/data/scaleLogic")
const prisma = new PrismaClient();

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
	try {
		const params = await context.params;
		const id = parseInt(params.id);
		if (isNaN(id)) {throw new Error("ID inválido");}

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

		if (!recipeDb) {throw new Error("Receta no encontrada");}

		const detallesRaw = recipeDb.receta_subreceta?.detalle_formulacion || [];
        
		let ingredientesCalculados: any[] = [];
		let pesoTotalOriginal = 0;

		// Si la receta tiene ingredientes, pasamos por la matemática de tu compañero
		if (detallesRaw.length > 0) {
			const resultadoMates = procesarPorcentajesBase(
				id, 
				recipeDb.receta_subreceta?.unidades_tanda || 1, 
				detallesRaw
			);
			ingredientesCalculados = resultadoMates.ingredientes;
			pesoTotalOriginal = resultadoMates.pesoTotalOriginal;
		}

		const formattedRecipe = {
			id_componente: recipeDb.id_componente,
			nombre: recipeDb.nombre,
			tipo_componente: recipeDb.tipo_componente,
			unidades_tanda: recipeDb.receta_subreceta?.unidades_tanda || 1,
			ppu_objetivo: Number(recipeDb.receta_subreceta?.ppu_objetivo || 0),
			peso_total_masa: pesoTotalOriginal, // <-- Peso total calculado
			ingredientes: ingredientesCalculados // <-- Array con gramos y % panadero
		};

		return NextResponse.json(formattedRecipe, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error?.message || "Error al cargar la receta" }, { status: 400 });
	}
}
