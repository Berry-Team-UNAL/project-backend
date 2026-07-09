import { VersionSelectionResult } from "../domain/types/subrecipe";
import { findSubrecipeById } from "../domain/data/subrecipes";
import { findMasterRecipeById } from "../domain/data/recipes";
import { getVersionSummaries, selectVersion } from "../utils/subrecipeUtils";

let currentVersionId: string = "v1";

export async function getVersionList(subrecipeId: string) {
	const subrecipe = await findSubrecipeById(subrecipeId);
	if (!subrecipe) {
		return { error: `Subreceta "${subrecipeId}" no encontrada` };
	}

	const summaries = getVersionSummaries(subrecipe);
	return { versions: summaries, currentVersionId };
}

export async function applyVersion(
	subrecipeId: string,
	newVersionId: string,
	masterRecipeId: string,
): Promise<{ result?: VersionSelectionResult; error?: string }> {
	const subrecipe = await findSubrecipeById(subrecipeId);
	if (!subrecipe) {
		return { error: `Subreceta "${subrecipeId}" no encontrada` };
	}

	const masterRecipe = await findMasterRecipeById(masterRecipeId);
	if (!masterRecipe) {
		return { error: `Receta maestra "${masterRecipeId}" no encontrada` };
	}

	try {
		const result = selectVersion(subrecipe, currentVersionId, newVersionId, masterRecipe);
		currentVersionId = newVersionId;
		return { result };
	} catch (err) {
		return { error: (err as Error).message };
	}
}
