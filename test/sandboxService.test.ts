import { describe, it, expect, vi, afterEach } from "vitest";

// Inline fixture so vi.mock factory has no hoisting/import issues
const MOCK_MASTER_RECIPE = {
	id: "fr_001",
	name: "Medialuna Premium",
	version: "V1",
	components: [
		{ type: "ingredient", id: "i_harina", name: "Harina", quantityGrams: 500 },
		{ type: "ingredient", id: "i_mantequilla", name: "Mantequilla", quantityGrams: 300 },
		{ type: "ingredient", id: "i_agua", name: "Agua", quantityGrams: 250 },
		{ type: "ingredient", id: "i_sal", name: "Sal", quantityGrams: 10 },
		{ type: "subrecipe", id: "sr_001", name: "Masa Base Hojaldre", quantityGrams: 500, selectedVersionId: "v1" },
	],
	ingredients: [
		{ id: "i_harina", name: "Harina", waterPercentage: 0, pricePerGram: 3.2, quantityGrams: 500 },
		{ id: "i_mantequilla", name: "Mantequilla", waterPercentage: 16, pricePerGram: 22, quantityGrams: 300 },
		{ id: "i_agua", name: "Agua", waterPercentage: 100, pricePerGram: 0.1, quantityGrams: 250 },
		{ id: "i_sal", name: "Sal", waterPercentage: 0, pricePerGram: 1, quantityGrams: 10 },
	],
	subrecipeVersions: [],
	bakingParameters: {
		bakingTimeHours: 0.42,
		unitsPerBatch: 60,
	},
};

vi.mock("../domain/data/recipes", () => ({
	findMasterRecipeById: vi.fn(async (id: string) => {
		if (id === "fr_001") {
			return structuredClone(MOCK_MASTER_RECIPE);
		}
		return null;
	}),
}));

import {
	openSession,
	modifyIngredientQuantity,
	getSessionMetrics,
} from "../services/sandboxService";

afterEach(() => {
	vi.useRealTimers();
});

async function createActiveSession(): Promise<string> {
	const { session } = await openSession("fr_001");
	return session.sessionId;
}

describe("CU_17: modifyIngredientQuantity — ingredient modification in sandbox session", () => {
	it("should return error when session ID does not exist (NOT_FOUND", () => {
		const result = modifyIngredientQuantity("non-existent-session", "i_harina", 600);

		expect(result.error).toBeDefined();
		expect(result.error).toContain("no encontrada");
		expect(result.session).toBeUndefined();
	});

	it("should return error when session has expired (expiration guard)", async () => {
		vi.useFakeTimers();

		const sessionId = await createActiveSession();
		vi.advanceTimersByTime(31 * 60 * 1000);

		const result = modifyIngredientQuantity(sessionId, "i_harina", 600);

		expect(result.error).toBeDefined();
		expect(result.error).toContain("expirado");
	});

	it("should return error when ingredient ID does not exist in the session", async () => {
		const sessionId = await createActiveSession();

		const result = modifyIngredientQuantity(sessionId, "i_NONEXISTENT", 999);

		expect(result.error).toBeDefined();
		expect(result.error).toContain("no encontrado");
		expect(result.session).toBeUndefined();
	});

	it("should successfully modify an ingredient quantity and return the updated session", async () => {
		const sessionId = await createActiveSession();

		const result = modifyIngredientQuantity(sessionId, "i_harina", 600);

		expect(result.error).toBeUndefined();
		expect(result.session).toBeDefined();
	});

	it("should apply the new quantity value to the ingredient in the session", async () => {
		const sessionId = await createActiveSession();

		const result = modifyIngredientQuantity(sessionId, "i_harina", 600);

		const ingredient = result.session!.modifiedIngredients.find((i: { id: string }) => i.id === "i_harina");
		expect(ingredient).toBeDefined();
		expect((ingredient as { quantityGrams: number }).quantityGrams).toBe(600);
	});

	it("should record the modification in the session modifications array", async () => {
		const sessionId = await createActiveSession();

		const result = modifyIngredientQuantity(sessionId, "i_harina", 600);

		expect(result.session!.modifications).toHaveLength(1);
		const mod = result.session!.modifications[0];
		expect(mod.componentId).toBe("i_harina");
		expect(mod.field).toBe("quantityGrams");
		expect(mod.previousValue).toBe(500);
		expect(mod.newValue).toBe(600);
	});

	it("should accumulate multiple modifications in the modifications history", async () => {
		const sessionId = await createActiveSession();

		modifyIngredientQuantity(sessionId, "i_harina", 600);
		modifyIngredientQuantity(sessionId, "i_mantequilla", 200);

		const result = modifyIngredientQuantity(sessionId, "i_sal", 15);

		expect(result.session!.modifications.length).toBeGreaterThanOrEqual(3);
	});

	it("should keep session active after modification (lastActivityAt refresh)", async () => {
		const sessionId = await createActiveSession();

		modifyIngredientQuantity(sessionId, "i_harina", 700);

		const secondOp = modifyIngredientQuantity(sessionId, "i_agua", 300);
		expect(secondOp.error).toBeUndefined();
	});

	it("should preserve other ingredients when modifying one ingredient", async () => {
		const sessionId = await createActiveSession();

		const { session } = modifyIngredientQuantity(sessionId, "i_harina", 800);

		const unchanged = session!.modifiedIngredients.find((i: { id: string }) => i.id === "i_sal");
		expect(unchanged).toBeDefined();
		expect((unchanged as { quantityGrams: number }).quantityGrams).toBe(10);
	});
});

describe("CU_17 — propagation: metrics re-computation after modification", () => {
	it("should update estimatedTotalCost when an ingredient quantity changes", async () => {
		const sessionId = await createActiveSession();

		const before = getSessionMetrics(sessionId);
		expect(before.error).toBeUndefined();
		const costBefore = before.metrics!.estimatedTotalCost;

		modifyIngredientQuantity(sessionId, "i_mantequilla", 500);

		const after = getSessionMetrics(sessionId);
		const costAfter = after.metrics!.estimatedTotalCost;

		expect(costAfter).not.toBe(costBefore);
	});

	it("should trigger range warning when hydration drops below minimum", async () => {
		const sessionId = await createActiveSession();

		modifyIngredientQuantity(sessionId, "i_harina", 20);

		const after = getSessionMetrics(sessionId);
		expect(after.metrics!.rangeWarnings.length).toBeGreaterThanOrEqual(1);
		expect(after.metrics!.rangeWarnings[0].field).toBe("totalHydration");
	});

	it("should trigger range warning when hydration exceeds maximum", async () => {
		const sessionId = await createActiveSession();

		modifyIngredientQuantity(sessionId, "i_agua", 5000);

		const after = getSessionMetrics(sessionId);
		expect(after.metrics!.rangeWarnings.length).toBeGreaterThanOrEqual(1);
	});

	it("should not produce range warnings for normal hydration values", async () => {
		const sessionId = await createActiveSession();

		// 500 harina, 300 mantequilla(16% water=48g), 250 agua(100% water=250g), 10 sal
		// Total flour = 510g, total water = 298g -> hydration = round(298/510*100) = 58%
		// 58% is within the [40, 90] range
		const after = getSessionMetrics(sessionId);

		expect(after.metrics!.rangeWarnings).toHaveLength(0);
	});

	it("should update estimatedCostPerUnit after modifying an ingredient", async () => {
		const sessionId = await createActiveSession();
		const before = getSessionMetrics(sessionId);
		const unitBefore = before.metrics!.estimatedCostPerUnit;

		modifyIngredientQuantity(sessionId, "i_mantequilla", 500);

		const after = getSessionMetrics(sessionId);
		const unitAfter = after.metrics!.estimatedCostPerUnit;

		expect(unitAfter).not.toBe(unitBefore);
	});
});
