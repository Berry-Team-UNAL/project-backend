import { describe, it, expect, beforeEach, vi } from "vitest";

// Inline fixture used by cost calculation tests (original RECIPE_FOR_COST_CALCULATION)
const MOCK_MASTER_RECIPE_FOR_COST = {
	id: "fr_001",
	name: "Medialuna Premium",
	version: "V1",
	bakingParameters: {
		bakingTimeHours: 0.42,
		unitsPerBatch: 60,
	},
	ingredients: [
		{ id: "i_harina", name: "Harina", waterPercentage: 0, pricePerGram: 3.2, quantityGrams: 500 },
		{ id: "i_mantequilla", name: "Mantequilla", waterPercentage: 16, pricePerGram: 22, quantityGrams: 300 },
		{ id: "i_agua", name: "Agua", waterPercentage: 100, pricePerGram: 0.1, quantityGrams: 250 },
		{ id: "i_sal", name: "Sal", waterPercentage: 0, pricePerGram: 1, quantityGrams: 10 },
		{ id: "i_leche", name: "Leche", waterPercentage: 88, pricePerGram: 2, quantityGrams: 200 },
	],
	components: [],
	subrecipeVersions: [],
};

// Mock saveGlobalTariffs as no-op — service has module-level cache for state
vi.mock("../domain/data/utilities", async () => {
	const actual = await vi.importActual<typeof import("../domain/data/utilities")>("../domain/data/utilities");
	return {
		...actual,
		saveGlobalTariffs: vi.fn(async () => {}),
	};
});

import { updateTariffs, getTariffs, computeServiceCosts } from "../services/utilityCostService";
import { DEFAULT_UTILITY_TARIFFS } from "../domain/data/utilities";
import type { UtilityTariffs } from "../domain/types/utilities";

function validTariffs(): UtilityTariffs {
	return structuredClone(DEFAULT_UTILITY_TARIFFS);
}

beforeEach(async () => {
	await updateTariffs(validTariffs());
});

describe("CU_13: updateTariffs — tariff validation and global state mutation", () => {
	describe("FA1 — validation: negative water pricePerLiter", () => {
		it("should return a single validation error for negative water pricePerLiter", async () => {
			const bad = validTariffs();
			bad.water.pricePerLiter = -1;

			const result = await updateTariffs(bad);

			expect(result.errors).toBeDefined();
			expect(result.errors).toHaveLength(1);
			expect(result.errors![0].field).toBe("water.pricePerLiter");
		});
	});

	describe("FA2 — validation: negative gas pricePerHour", () => {
		it("should return a single validation error for negative gas pricePerHour", async () => {
			const bad = validTariffs();
			bad.gas.pricePerHour = -500;

			const result = await updateTariffs(bad);

			expect(result.errors).toBeDefined();
			expect(result.errors).toHaveLength(1);
			expect(result.errors![0].field).toBe("gas.pricePerHour");
		});
	});

	describe("FA3 — validation: zero ovenPowerKw", () => {
		it("should return a single validation error for zero ovenPowerKw", async () => {
			const bad = validTariffs();
			bad.electricity.ovenPowerKw = 0;

			const result = await updateTariffs(bad);

			expect(result.errors).toBeDefined();
			expect(result.errors).toHaveLength(1);
			expect(result.errors![0].field).toBe("electricity.ovenPowerKw");
		});
	});

	it("should return validation error for negative electricity pricePerKwh", async () => {
		const bad = validTariffs();
		bad.electricity.pricePerKwh = -1;

		const result = await updateTariffs(bad);

		expect(result.errors).toHaveLength(1);
		expect(result.errors![0].field).toBe("electricity.pricePerKwh");
	});

	it("should return validation error for negative fixedSurcharge", async () => {
		const bad = validTariffs();
		bad.electricity.fixedSurcharge = -100;

		const result = await updateTariffs(bad);

		expect(result.errors).toHaveLength(1);
		expect(result.errors![0].field).toBe("electricity.fixedSurcharge");
	});

	it("should return validation error for negative additionalUsagePercentage", async () => {
		const bad = validTariffs();
		bad.water.additionalUsagePercentage = -5;

		const result = await updateTariffs(bad);

		expect(result.errors).toHaveLength(1);
		expect(result.errors![0].field).toBe("water.additionalUsagePercentage");
	});

	it("should return multiple errors when several fields are invalid simultaneously", async () => {
		const bad = validTariffs();
		bad.water.pricePerLiter = -10;
		bad.gas.pricePerHour = -1;
		bad.electricity.ovenPowerKw = 0;

		const result = await updateTariffs(bad);

		expect(result.errors).toBeDefined();
		expect(result.errors!.length).toBeGreaterThanOrEqual(3);
	});

	it("should update global state and return tariffs when all values are valid", async () => {
		const newTariffs = validTariffs();
		newTariffs.water.pricePerLiter = 2500;
		newTariffs.gas.pricePerHour = 10000;

		const result = await updateTariffs(newTariffs);

		expect(result.tariffs).toBeDefined();
		expect(result.errors).toBeUndefined();
	});

	it("should persist mutated state so that getTariffs() returns the new values", async () => {
		const updated = validTariffs();
		updated.water.pricePerLiter = 9999;
		await updateTariffs(updated);

		const current = await getTariffs();

		expect(current.water.pricePerLiter).toBe(9999);
	});

	it("should NOT mutate state on invalid input (tariffs remain at previous valid values)", async () => {
		const before = await getTariffs();

		const bad = validTariffs();
		bad.water.pricePerLiter = -100;
		await updateTariffs(bad);

		const after = await getTariffs();
		expect(after.water.pricePerLiter).toBe(before.water.pricePerLiter);
	});
});

describe("CU_13 — propagation: computeServiceCosts uses global tariffs", () => {
	it("should compute costs with default tariffs and return correct breakdown", async () => {
		const summary = await computeServiceCosts({
			ingredients: MOCK_MASTER_RECIPE_FOR_COST.ingredients,
			bakingParameters: MOCK_MASTER_RECIPE_FOR_COST.bakingParameters,
		});

		expect(summary.ingredientsCost).toBe(8635);
		expect(summary.services.waterCost).toBe(82800);
		expect(summary.services.gasCost).toBe(3570);
		expect(summary.services.electricityCost).toBe(2107);
		expect(summary.services.subtotalServicesCost).toBe(88477);
		expect(summary.totalCost).toBe(97112);
		expect(summary.costPerUnit).toBe(1619);
	});

	it("should reflect updated water tariff in computed costs (FA1 propagation)", async () => {
		const updated = validTariffs();
		updated.water.pricePerLiter = 2000;
		await updateTariffs(updated);

		const summary = await computeServiceCosts({
			ingredients: MOCK_MASTER_RECIPE_FOR_COST.ingredients,
			bakingParameters: MOCK_MASTER_RECIPE_FOR_COST.bakingParameters,
		});

		expect(summary.services.waterCost).toBe(138000);
		expect(summary.costPerUnit).toBe(2539);
	});

	it("should reflect updated gas tariff in computed costs (FA2 propagation)", async () => {
		const updated = validTariffs();
		updated.gas.pricePerHour = 12000;
		await updateTariffs(updated);

		const summary = await computeServiceCosts({
			ingredients: MOCK_MASTER_RECIPE_FOR_COST.ingredients,
			bakingParameters: MOCK_MASTER_RECIPE_FOR_COST.bakingParameters,
		});

		expect(summary.services.gasCost).toBe(5040);
	});

	it("should reflect updated electricity tariff in computed costs (FA3 propagation)", async () => {
		const updated = validTariffs();
		updated.electricity.ovenPowerKw = 7;
		await updateTariffs(updated);

		const summary = await computeServiceCosts({
			ingredients: MOCK_MASTER_RECIPE_FOR_COST.ingredients,
			bakingParameters: MOCK_MASTER_RECIPE_FOR_COST.bakingParameters,
		});

		expect(summary.services.electricityCost).toBe(2749);
	});

	it("should return zero costPerUnit when unitsPerBatch is zero", async () => {
		const zeroBatch = {
			ingredients: MOCK_MASTER_RECIPE_FOR_COST.ingredients,
			bakingParameters: { bakingTimeHours: 0.5, unitsPerBatch: 0 },
		};

		const summary = await computeServiceCosts(zeroBatch);

		expect(summary.costPerUnit).toBe(0);
	});
});
