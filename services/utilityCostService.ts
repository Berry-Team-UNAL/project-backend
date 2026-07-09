import { UtilityTariffs, RecipeCostSummary, TariffValidationError } from "../domain/types/utilities";
import { DEFAULT_UTILITY_TARIFFS, saveGlobalTariffs } from "../domain/data/utilities";
import { computeRecipeCost, validateTariffs } from "../utils/utilityCostUtils";
import { MasterRecipe } from "../domain/types/sandbox";

let currentTariffs: UtilityTariffs = structuredClone(DEFAULT_UTILITY_TARIFFS);

export async function getTariffs(): Promise<UtilityTariffs> {
	return structuredClone(currentTariffs);
}

export async function updateTariffs(updated: UtilityTariffs): Promise<{ tariffs?: UtilityTariffs; errors?: TariffValidationError[] }> {
	const errors = validateTariffs(updated);
	if (errors.length > 0) {
		return { errors };
	}
	await saveGlobalTariffs(updated);
	currentTariffs = structuredClone(updated);
	return { tariffs: structuredClone(currentTariffs) };
}

export async function computeServiceCosts(
	recipe: Pick<MasterRecipe, "ingredients" | "bakingParameters">,
): Promise<RecipeCostSummary> {
	return computeRecipeCost(currentTariffs, recipe);
}
