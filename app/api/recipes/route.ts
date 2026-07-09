import { NextResponse } from "next/server";
import { CreateRecipeUseCase } from "@/services/recipes/CreateRecipe.usecase";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ==========================================
// POST: CREAR UNA NUEVA RECETA (CASCARÓN)
// ==========================================
export async function POST(request: Request) {
	try {
		const body = await request.json();
		const useCase = new CreateRecipeUseCase();
		const nuevaReceta = await useCase.execute(body);

		return NextResponse.json(nuevaReceta, { status: 201 });
	} catch (error: any) {
		console.error("🔥 ERROR EN POST RECIPE:", error);
		return NextResponse.json(
			{ error: error?.message || "Error interno al crear receta" }, 
			{ status: 400 }
		);
	}
}

// ==========================================
// GET: OBTENER TODAS LAS RECETAS
// ==========================================
export async function GET() {
	try {
		const recipes = await prisma.catalogo_componente.findMany({
			where: { 
				activo: true,
				// Solo traemos las que sean Recetas o Subrecetas
				tipo_componente: { in: ["RECETA", "SUBRECETA"] }
			},
			include: {
				receta_subreceta: true
			}
		});

		// Formateamos para que el frontend lo lea fácil
		const formattedRecipes = recipes.map(r => ({
			id_componente: r.id_componente,
			nombre: r.nombre,
			tipo_componente: r.tipo_componente,
			unidades_tanda: r.receta_subreceta?.unidades_tanda || 0
		}));

		return NextResponse.json(formattedRecipes, { status: 200 });
	} catch (error) {
		console.error("🔥 ERROR EN GET RECIPES:", error);
		return NextResponse.json({ error: "Error al obtener recetas" }, { status: 500 });
	}
}
