// ============================================================
// Tests — RF_08 Registrar Variables Geográficas y Ambientales
// ============================================================
import { describe, test, expect } from "vitest";
import {
	validateEnvironmentalParams,
	checkUserRole,
	checkRecipesExist,
	calcAdjustmentFactors,
	applyEnvironmentalAdjustmentToRecipe,
	registerEnvironmentalVariables,
	registerAndRecalculate,
	getStoredEnvironmentalParams,
	EnvironmentalParams,
	UserRole,
	VALID_RANGES,
} from "../lib/environmentalVariablesLogic";
import { SetData } from "../lib/portionCalcLogic";

// ─── Fixtures ───────────────────────────────────────────────

const validParams: EnvironmentalParams = {
	relativeHumidity: 65,
	ambientTemperature: 22,
	altitude: 2600,          // Bogotá aprox.
	barometricPressure: 748,
	location: "Bogotá, Colombia",
};

const baseSetData: SetData = {
	units: 48,
	unitsPerSet: 12,
	ovenTime: 25,
	handlingTime: 5,
	ovenNumber: 2,
};

// ─── 1. Precondición: Rol de usuario ────────────────────────

describe("checkUserRole", () => {
	test("permite Jefe de panadería", () => {
		expect(() => checkUserRole("Jefe de panadería")).not.toThrow();
	});

	test("permite Administrador", () => {
		expect(() => checkUserRole("Administrador")).not.toThrow();
	});

	test("rechaza rol no autorizado", () => {
		expect(() => checkUserRole("otro")).toThrow(/Acceso denegado/);
	});
});

// ─── 2. Precondición: Recetas existentes ────────────────────

describe("checkRecipesExist", () => {
	test("pasa con al menos una receta", () => {
		expect(() => checkRecipesExist(["Brioche classique"])).not.toThrow();
	});

	test("lanza error si no hay recetas", () => {
		expect(() => checkRecipesExist([])).toThrow(/No existen recetas/);
	});
});

// ─── 3. Validación de rangos (Flujo Normal paso 4) ──────────

describe("validateEnvironmentalParams", () => {
	test("valida parámetros correctos", () => {
		const result = validateEnvironmentalParams(validParams);
		expect(result.isValid).toBe(true);
		expect(result.errors).toEqual({});
	});

	test("falla con humedad fuera de rango (> 100)", () => {
		const p = { ...validParams, relativeHumidity: 110 };
		const result = validateEnvironmentalParams(p);
		expect(result.isValid).toBe(false);
		expect(result.errors).toHaveProperty("relativeHumidity");
	});

	test("falla con temperatura negativa extrema (< -10)", () => {
		const p = { ...validParams, ambientTemperature: -15 };
		const result = validateEnvironmentalParams(p);
		expect(result.isValid).toBe(false);
		expect(result.errors).toHaveProperty("ambientTemperature");
	});

	test("falla con altitud negativa", () => {
		const p = { ...validParams, altitude: -100 };
		const result = validateEnvironmentalParams(p);
		expect(result.isValid).toBe(false);
		expect(result.errors).toHaveProperty("altitude");
	});

	test("falla con presión barométrica sobre límite (> 1100)", () => {
		const p = { ...validParams, barometricPressure: 1200 };
		const result = validateEnvironmentalParams(p);
		expect(result.isValid).toBe(false);
		expect(result.errors).toHaveProperty("barometricPressure");
	});

	test("acumula múltiples errores a la vez", () => {
		const p = { ...validParams, relativeHumidity: -5, altitude: 9000 };
		const result = validateEnvironmentalParams(p);
		expect(result.isValid).toBe(false);
		expect(Object.keys(result.errors)).toHaveLength(2);
	});

	test("valores en el límite exacto son válidos", () => {
		const boundary: EnvironmentalParams = {
			relativeHumidity: VALID_RANGES.relativeHumidity.max,
			ambientTemperature: VALID_RANGES.ambientTemperature.min,
			altitude: VALID_RANGES.altitude.min,
			barometricPressure: VALID_RANGES.barometricPressure.min,
		};
		const result = validateEnvironmentalParams(boundary);
		expect(result.isValid).toBe(true);
	});
});

// ─── 4. Factores de ajuste ambiental ────────────────────────

describe("calcAdjustmentFactors", () => {
	test("condiciones de referencia producen factor ~1", () => {
		const reference: EnvironmentalParams = {
			relativeHumidity: 50,
			ambientTemperature: 20,
			altitude: 0,
			barometricPressure: 1013.25,
		};
		const factors = calcAdjustmentFactors(reference);
		expect(factors.combinedFactor).toBeCloseTo(1, 1);
	});

	test("altitud alta reduce el factor combinado", () => {
		const highAltitude: EnvironmentalParams = { ...validParams, altitude: 4000 };
		const low: EnvironmentalParams = { ...validParams, altitude: 0 };
		const fHigh = calcAdjustmentFactors(highAltitude);
		const fLow  = calcAdjustmentFactors(low);
		expect(fHigh.altitudeFactor).toBeLessThan(fLow.altitudeFactor);
	});

	test("temperatura alta reduce el factor de temperatura", () => {
		const hot  = calcAdjustmentFactors({ ...validParams, ambientTemperature: 45 });
		const cold = calcAdjustmentFactors({ ...validParams, ambientTemperature: 5  });
		expect(hot.temperatureFactor).toBeLessThan(cold.temperatureFactor);
	});

	test("todos los factores se mantienen entre 0.5 y 1.5 (clamp)", () => {
		const extreme: EnvironmentalParams = {
			relativeHumidity: 100,
			ambientTemperature: 50,
			altitude: 5000,
			barometricPressure: 300,
		};
		const factors = calcAdjustmentFactors(extreme);
		for (const val of Object.values(factors)) {
			expect(val).toBeGreaterThanOrEqual(0.5);
			expect(val).toBeLessThanOrEqual(1.5);
		}
	});
});

// ─── 5. Ajuste de receta + portionCalcLogic ─────────────────

describe("applyEnvironmentalAdjustmentToRecipe", () => {
	test("recalcula los tiempos de horno correctamente", () => {
		const adjustment = applyEnvironmentalAdjustmentToRecipe(
			"Pan de campagne",
			baseSetData,
			validParams
		);
		expect(adjustment.recipeName).toBe("Pan de campagne");
		expect(adjustment.adjustedEstimation.finalTimeMinutes).toBeGreaterThan(0);
	});

	test("con condiciones de referencia los tiempos son casi iguales", () => {
		const reference: EnvironmentalParams = {
			relativeHumidity: 50,
			ambientTemperature: 20,
			altitude: 0,
			barometricPressure: 1013.25,
		};
		const adj = applyEnvironmentalAdjustmentToRecipe("Test", baseSetData, reference);
		const diff = Math.abs(
			adj.adjustedEstimation.finalTimeMinutes - adj.originalEstimation.finalTimeMinutes
		);
		expect(diff).toBeLessThan(5); // menos de 5 minutos de diferencia
	});

	test("incluye los factores de ajuste en el resultado", () => {
		const adj = applyEnvironmentalAdjustmentToRecipe("Croissant", baseSetData, validParams);
		expect(adj.adjustmentFactors).toHaveProperty("combinedFactor");
		expect(adj.adjustmentFactors).toHaveProperty("altitudeFactor");
	});
});

// ─── 6. Flujo completo RF_08 ────────────────────────────────

describe("registerEnvironmentalVariables (flujo completo)", () => {
	const recipes = ["Brioche classique", "Pain de campagne"];

	test("guarda parámetros válidos y notifica éxito (paso 6 y 7)", () => {
		const result = registerEnvironmentalVariables(validParams, "Jefe de panadería", recipes);
		expect(result.success).toBe(true);
		expect(result.message).toMatch(/guardados exitosamente/);
		expect(result.savedParams).toEqual(validParams);
		expect(result.affectedRecipes).toEqual(recipes);
	});

	test("persiste los parámetros y son recuperables (postcondición)", () => {
		registerEnvironmentalVariables(validParams, "Administrador", recipes);
		const stored = getStoredEnvironmentalParams();
		expect(stored).not.toBeNull();
		expect(stored?.altitude).toBe(validParams.altitude);
	});

	test("no guarda con parámetros inválidos (vuelve al paso 3)", () => {
		const bad = { ...validParams, relativeHumidity: 150 };
		const result = registerEnvironmentalVariables(bad, "Jefe de panadería", recipes);
		expect(result.success).toBe(false);
		expect(result.message).toMatch(/fuera del rango permitido/);
		expect(result.savedParams).toBeUndefined();
	});

	test("rechaza si el rol no es válido (precondición 1)", () => {
		expect(() =>
			registerEnvironmentalVariables(validParams, "otro" as UserRole, recipes)
		).toThrow(/Acceso denegado/);
	});

	test("rechaza si no hay recetas (precondición 2)", () => {
		expect(() =>
			registerEnvironmentalVariables(validParams, "Administrador", [])
		).toThrow(/No existen recetas/);
	});
});

// ─── 7. Registro + recálculo combinado ──────────────────────

describe("registerAndRecalculate", () => {
	const recipesWithData = [
		{ name: "Brioche classique", setData: baseSetData },
		{ name: "Pain de campagne", setData: { ...baseSetData, units: 24 } },
	];

	test("retorna ajustes para cada receta si el registro es exitoso", () => {
		const { saveResult, adjustments } = registerAndRecalculate(
			validParams, "Administrador", recipesWithData
		);
		expect(saveResult.success).toBe(true);
		expect(adjustments).toHaveLength(2);
		expect(adjustments[0].recipeName).toBe("Brioche classique");
	});

	test("no retorna ajustes si la validación falla", () => {
		const badParams = { ...validParams, barometricPressure: 50 };
		const { saveResult, adjustments } = registerAndRecalculate(
			badParams, "Administrador", recipesWithData
		);
		expect(saveResult.success).toBe(false);
		expect(adjustments).toHaveLength(0);
	});
});
