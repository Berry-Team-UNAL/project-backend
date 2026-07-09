import { SandboxSession, SandboxComparison, SandboxMetrics, SandboxModification } from "../domain/types/sandbox";
import { Ingredient } from "../domain/types/recipe";
import { findMasterRecipeById } from "../domain/data/recipes";
import { findIngredientByArticleId } from "../domain/data/ingredients";
import { createSession, computeSandboxMetrics, compareSessions, isSessionExpired } from "../utils/sandboxUtils";

const activeSessions: Map<string, SandboxSession> = new Map();

export async function openSession(recipeId: string): Promise<{ session: SandboxSession; error?: string }> {
	const recipe = await findMasterRecipeById(recipeId);
	if (!recipe) {
		return { session: null as unknown as SandboxSession, error: `Receta maestra "${recipeId}" no encontrada` };
	}

	const session = createSession(recipe);
	activeSessions.set(session.sessionId, session);
	return { session };
}

export function getSession(sessionId: string): { session?: SandboxSession; error?: string } {
	const session = activeSessions.get(sessionId);
	if (!session) {
		return { error: `Sesión sandbox "${sessionId}" no encontrada` };
	}
	if (isSessionExpired(session)) {
		session.status = "expired";
		return { error: "La sesión ha expirado. Crea una nueva." };
	}
	return { session };
}

export async function getComparison(sessionId: string): Promise<{ comparison?: SandboxComparison; error?: string }> {
	const { session, error } = getSession(sessionId);
	if (error || !session) {return { error };}
	if (session.status !== "active") {return { error: "La sesión no está activa" };}

	const recipe = await findMasterRecipeById(session.masterRecipeId);
	if (!recipe) {return { error: "Receta maestra no encontrada" };}

	const comparison = compareSessions(recipe, session);
	return { comparison };
}

export function modifyIngredientQuantity(
	sessionId: string,
	ingredientId: string,
	newQuantityGrams: number,
): { session?: SandboxSession; error?: string } {
	const { session, error } = getSession(sessionId);
	if (error || !session) {return { error };}

	const ingredient = session.modifiedIngredients.find((i) => i.id === ingredientId);
	if (!ingredient) {return { error: `Ingrediente "${ingredientId}" no encontrado"` };}

	const previousValue = ingredient.quantityGrams;
	ingredient.quantityGrams = newQuantityGrams;
	session.lastActivityAt = new Date();

	const mod: SandboxModification = {
		componentId: ingredientId,
		field: "quantityGrams",
		previousValue,
		newValue: newQuantityGrams,
	};
	session.modifications.push(mod);

	return { session };
}

export function modifyBakingParameter(
	sessionId: string,
	field: "bakingTimeHours" | "unitsPerBatch",
	newValue: number,
): { session?: SandboxSession; error?: string } {
	const { session, error } = getSession(sessionId);
	if (error || !session) {return { error };}

	const previousValue = session.modifiedBakingParameters[field];
	session.modifiedBakingParameters[field] = newValue;
	session.lastActivityAt = new Date();

	const mod: SandboxModification = {
		componentId: "baking_params",
		field,
		previousValue,
		newValue,
	};
	session.modifications.push(mod);

	return { session };
}

export async function modifyIngredientSubstitute(
	sessionId: string,
	ingredientId: string,
	articleId: number,
): Promise<{ session?: SandboxSession; error?: string }> {
	const { session, error } = getSession(sessionId);
	if (error || !session) {return { error };}

	const ingredient = session.modifiedIngredients.find((i) => i.id === ingredientId);
	if (!ingredient) {return { error: `Ingrediente "${ingredientId}" no encontrado` };}

	const substitute = await findIngredientByArticleId(articleId);
	if (!substitute) {return { error: `Art&iacute;culo proveedor "${articleId}" no encontrado` };}

	const previousIngredient: Ingredient = { ...ingredient };
	const previousName = ingredient.name;
	const previousPrice = ingredient.pricePerGram;
	const previousWater = ingredient.waterPercentage;

	ingredient.name = substitute.name;
	ingredient.waterPercentage = substitute.waterPercentage;
	ingredient.pricePerGram = substitute.pricePerGram;
	session.lastActivityAt = new Date();

	const mod: SandboxModification = {
		componentId: ingredientId,
		field: "substitute",
		previousValue: previousName,
		newValue: substitute.name,
		previousIngredient,
		substitutedIngredient: { ...substitute, quantityGrams: ingredient.quantityGrams },
		// Guardamos adicionalmente el precio/agua para evitar consultas futuras:
		previousPricePerGram: previousPrice,
		previousWaterPercentage: previousWater,
	} as SandboxModification & { previousPricePerGram?: number; previousWaterPercentage?: number };

	session.modifications.push(mod);

	return { session };
}

export function discardSession(sessionId: string): { success?: boolean; error?: string } {
	const session = activeSessions.get(sessionId);
	if (!session) {return { error: "Sesión no encontrada" };}

	session.status = "discarded";
	activeSessions.delete(sessionId);
	return { success: true };
}

export function saveSessionAsVersion(
	sessionId: string,
	_versionName: string,
): { session?: SandboxSession; error?: string } {
	const { session, error } = getSession(sessionId);
	if (error || !session) {return { error };}

	session.status = "saved";
	session.lastActivityAt = new Date();
	return { session };
}

export function getSessionMetrics(sessionId: string): { metrics?: SandboxMetrics; error?: string } {
	const { session, error } = getSession(sessionId);
	if (error || !session) {return { error };}

	const metrics = computeSandboxMetrics(
		session.modifiedIngredients,
		session.modifiedBakingParameters,
	);
	return { metrics };
}
