import { MasterRecipe } from "../domain/types/sandbox";
import { findMasterRecipeById } from "../domain/data/recipes";

export async function getRecipeWithComponents(
	recipeId: string,
): Promise<{ recipe?: MasterRecipe; error?: string }> {
	const recipe = await findMasterRecipeById(recipeId);
	if (!recipe) {
		return { error: `Receta maestra "${recipeId}" no encontrada` };
	}
	return { recipe };
}
