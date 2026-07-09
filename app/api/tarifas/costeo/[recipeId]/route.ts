import { NextRequest, NextResponse } from "next/server";
import { RECIPE_FOR_COST_CALCULATION } from "../../../../../domain/data/utilities";
import { computeServiceCosts } from "../../../../../services/utilityCostService";

export async function GET(
	_request: NextRequest,
	{ params }: { params: Promise<{ recipeId: string }> },
) {
	const { recipeId } = await params;
	// Asegurar formato "fr_<n>"
	const id = recipeId.startsWith("fr_") ? recipeId : `fr_${recipeId}`;
	const recipe = await RECIPE_FOR_COST_CALCULATION(id);
	if (!recipe) {
		return NextResponse.json({ error: "Receta no encontrada" }, { status: 404 });
	}

	const summary = await computeServiceCosts({
		ingredients: recipe.ingredients,
		bakingParameters: recipe.bakingParameters,
	});
	return NextResponse.json({ summary });
}
