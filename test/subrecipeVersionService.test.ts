import { describe, it, expect, vi } from "vitest";

// Inline fixtures so vi.mock factory has no hoisting/import issues
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

const MOCK_SUBRECIPES: Record<string, unknown> = {
	"sr_001": {
		id: "sr_001",
		name: "Masa Base Hojaldre",
		versions: [
			{
				versionId: "v1",
				versionName: "V1 — Clásica",
				shortDescription: "Formulación original con mantequilla europea",
				estimatedCostPerKg: 12400,
				createdAt: new Date("2024-01-10"),
				isActive: true,
				ingredients: [
					{ id: "i_harina", name: "Harina", waterPercentage: 0, pricePerGram: 3.2, quantityGrams: 500 },
					{ id: "i_mantequilla", name: "Mantequilla europea", waterPercentage: 16, pricePerGram: 22, quantityGrams: 300 },
					{ id: "i_agua", name: "Agua", waterPercentage: 100, pricePerGram: 0.1, quantityGrams: 250 },
					{ id: "i_sal", name: "Sal", waterPercentage: 0, pricePerGram: 1, quantityGrams: 10 },
				],
			},
			{
				versionId: "v2",
				versionName: "V2 — Reducida",
				shortDescription: "Menos mantequilla para reducir costo unitario",
				estimatedCostPerKg: 10800,
				createdAt: new Date("2024-03-05"),
				isActive: true,
				ingredients: [
					{ id: "i_harina", name: "Harina", waterPercentage: 0, pricePerGram: 3.2, quantityGrams: 500 },
					{ id: "i_mantequilla", name: "Mantequilla nacional", waterPercentage: 16, pricePerGram: 14, quantityGrams: 250 },
					{ id: "i_agua", name: "Agua", waterPercentage: 100, pricePerGram: 0.1, quantityGrams: 250 },
					{ id: "i_sal", name: "Sal", waterPercentage: 0, pricePerGram: 1, quantityGrams: 10 },
				],
			},
			{
				versionId: "v3",
				versionName: "V3 — Experimental",
				shortDescription: "Prueba con margarina vegetal + harina integral",
				estimatedCostPerKg: 14200,
				createdAt: new Date("2024-06-20"),
				isActive: true,
				ingredients: [
					{ id: "i_harina_int", name: "Harina integral", waterPercentage: 0, pricePerGram: 5, quantityGrams: 400 },
					{ id: "i_harina", name: "Harina blanca", waterPercentage: 0, pricePerGram: 3.2, quantityGrams: 100 },
					{ id: "i_margarina", name: "Margarina vegetal", waterPercentage: 20, pricePerGram: 18, quantityGrams: 300 },
					{ id: "i_agua", name: "Agua", waterPercentage: 100, pricePerGram: 0.1, quantityGrams: 280 },
					{ id: "i_sal", name: "Sal", waterPercentage: 0, pricePerGram: 1, quantityGrams: 10 },
				],
			},
		],
	},
	"sr_002": {
		id: "sr_002",
		name: "Crema Pastelera",
		versions: [
			{
				versionId: "v1",
				versionName: "V1 — Estándar",
				shortDescription: "Receta tradicional con yemas y maicena",
				estimatedCostPerKg: 8500,
				createdAt: new Date("2024-02-14"),
				isActive: true,
				ingredients: [
					{ id: "i_leche", name: "Leche entera", waterPercentage: 88, pricePerGram: 2, quantityGrams: 500 },
					{ id: "i_azucar", name: "Azúcar", waterPercentage: 0, pricePerGram: 2.5, quantityGrams: 100 },
					{ id: "i_yemas", name: "Yemas", waterPercentage: 50, pricePerGram: 15, quantityGrams: 80 },
					{ id: "i_maicena", name: "Maicena", waterPercentage: 0, pricePerGram: 4, quantityGrams: 40 },
				],
			},
		],
	},
};

vi.mock("../domain/data/subrecipes", () => ({
	findSubrecipeById: vi.fn(async (id: string) => {
		const subrecipe = MOCK_SUBRECIPES[id];
		return subrecipe ? structuredClone(subrecipe) : null;
	}),
}));

vi.mock("../domain/data/recipes", () => ({
	findMasterRecipeById: vi.fn(async (id: string) => {
		if (id === "fr_001") {
			return structuredClone(MOCK_MASTER_RECIPE);
		}
		return null;
	}),
}));

import { applyVersion, getVersionList } from "../services/subrecipeVersionService";

describe("CU_10: applyVersion — subrecipe version selection", () => {
	it("should return error when subrecipe ID does not exist (NOT_FOUND)", async () => {
		const result = await applyVersion("sr_NONEXISTENT", "v1", "fr_001");

		expect(result.error).toBeDefined();
		expect(result.error).toContain("no encontrada");
		expect(result.result).toBeUndefined();
	});

	it("should return error when master recipe ID does not exist (NOT_FOUND)", async () => {
		const result = await applyVersion("sr_001", "v1", "fr_NONEXISTENT");

		expect(result.error).toBeDefined();
		expect(result.error).toContain("no encontrada");
		expect(result.result).toBeUndefined();
	});

	it("should return error when version ID does not exist in the subrecipe (NOT_FOUND via selectVersion throw)", async () => {
		const result = await applyVersion("sr_001", "v999", "fr_001");

		expect(result.error).toBeDefined();
		expect(result.result).toBeUndefined();
	});

	it("should successfully select version v2 and compute correct cost variation from v1 baseline", async () => {
		const result = await applyVersion("sr_001", "v2", "fr_001");

		expect(result.error).toBeUndefined();
		expect(result.result).toBeDefined();

		const r = result.result!;
		expect(r.previousVersionId).toBe("v1");
		expect(r.newVersionId).toBe("v2");
		expect(r.costVariationPercentage).toBe(-13);
		expect(r.updatedTotalCost).toBeGreaterThan(0);
		expect(r.updatedTotalHydration).toBeGreaterThan(0);
	});

	it("should mutate global currentVersionId so that getVersionList reflects it", async () => {
		const list = await getVersionList("sr_001");

		expect(list.currentVersionId).toBe("v2");
		expect(list.versions).toBeDefined();
		expect(list.versions.length).toBeGreaterThanOrEqual(1);
	});

	it("should compute correct cost variation when selecting v3 after v2", async () => {
		const result = await applyVersion("sr_001", "v3", "fr_001");

		expect(result.error).toBeUndefined();
		expect(result.result).toBeDefined();

		const r = result.result!;
		expect(r.previousVersionId).toBe("v2");
		expect(r.newVersionId).toBe("v3");
		expect(r.costVariationPercentage).toBe(31);
	});

	it("should compute correct cost variation when going back to v2 from v3", async () => {
		const result = await applyVersion("sr_001", "v2", "fr_001");

		expect(result.error).toBeUndefined();
		expect(result.result).toBeDefined();

		const r = result.result!;
		expect(r.previousVersionId).toBe("v3");
		expect(r.newVersionId).toBe("v2");
		expect(r.costVariationPercentage).toBe(-24);
	});

	it("should compute total hydration above zero for any valid version switch", async () => {
		const result = await applyVersion("sr_001", "v1", "fr_001");

		expect(result.error).toBeUndefined();
		expect(result.result!.updatedTotalHydration).toBeGreaterThan(0);
	});

	it("should work with subrecipe sr_002 (only one version)", async () => {
		const result = await applyVersion("sr_002", "v1", "fr_001");

		expect(result.error).toBeUndefined();
		expect(result.result).toBeDefined();
		expect(result.result!.newVersionId).toBe("v1");
		expect(result.result!.updatedTotalCost).toBeGreaterThan(0);
	});
});
