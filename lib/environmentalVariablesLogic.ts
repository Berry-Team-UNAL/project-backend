// ============================================================
// RF_08 – Registrar Variables Geográficas y Ambientales
// Lógica de negocio para el módulo de configuración ambiental
// ============================================================

import { SetData, FinalEstimation, calcFinalOvenTime } from "./portionCalcLogic";

// ─────────────────────────────────────────
// Tipos e interfaces
// ─────────────────────────────────────────

export interface EnvironmentalParams {
  relativeHumidity: number;    // % — humedad relativa
  ambientTemperature: number;  // °C — temperatura ambiente
  altitude: number;            // m.s.n.m. — altitud
  barometricPressure: number;  // hPa — presión barométrica
  location?: string;           // Ciudad / taller (opcional)
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface SaveResult {
  success: boolean;
  message: string;
  savedParams?: EnvironmentalParams;
  affectedRecipes?: string[];
}

export interface RecipeAdjustment {
  recipeName: string;
  originalEstimation: FinalEstimation;
  adjustedEstimation: FinalEstimation;
  adjustmentFactors: AdjustmentFactors;
}

export interface AdjustmentFactors {
  humidityFactor: number;
  temperatureFactor: number;
  altitudeFactor: number;
  pressureFactor: number;
  combinedFactor: number;
}

// ─────────────────────────────────────────
// Rangos aceptables (Flujo Normal, paso 4)
// ─────────────────────────────────────────

export const VALID_RANGES = {
	relativeHumidity:    { min: 0,    max: 100,  unit: "%",      label: "Humedad relativa"    },
	ambientTemperature:  { min: -10,  max: 50,   unit: "°C",     label: "Temperatura ambiente" },
	altitude:            { min: 0,    max: 5000, unit: "m.s.n.m.", label: "Altitud"            },
	barometricPressure:  { min: 300,  max: 1100, unit: "hPa",    label: "Presión barométrica" },
} as const;

// Condiciones de referencia estándar (nivel del mar, 20 °C, 50 % HR)
const REFERENCE_CONDITIONS: EnvironmentalParams = {
	relativeHumidity: 50,
	ambientTemperature: 20,
	altitude: 0,
	barometricPressure: 1013.25,
};

// ─────────────────────────────────────────
// Precondiciones (RF_08)
// ─────────────────────────────────────────

export type UserRole = "Jefe de panadería" | "Administrador" | "otro";

/**
 * Verifica si el usuario cumple las precondiciones para usar el módulo.
 * Precondición 1: rol autorizado.
 */
export function checkUserRole(role: UserRole): void {
	const allowedRoles: UserRole[] = ["Jefe de panadería", "Administrador"];
	if (!allowedRoles.includes(role)) {
		throw new Error(
			`Acceso denegado. Solo el Jefe de panadería o el Administrador pueden registrar variables ambientales. Rol actual: "${role}".`
		);
	}
}

/**
 * Precondición 2: debe existir al menos una receta con ajustes ambientales.
 */
export function checkRecipesExist(recipes: string[]): void {
	if (!recipes || recipes.length === 0) {
		throw new Error(
			"No existen recetas con ajustes ambientales en el sistema. Cree al menos una receta antes de registrar variables."
		);
	}
}

// ─────────────────────────────────────────
// Validación de rangos (Flujo Normal, paso 4)
// ─────────────────────────────────────────

/**
 * Valida que todos los parámetros ambientales estén dentro de los rangos
 * aceptables definidos en VALID_RANGES.
 *
 * Retorna `{ isValid: true, errors: {} }` si todo es correcto, o
 * `{ isValid: false, errors: { campo: "mensaje" } }` si hay valores fuera de rango.
 */
export function validateEnvironmentalParams(
	params: EnvironmentalParams
): ValidationResult {
	const errors: Record<string, string> = {};

	for (const [field, range] of Object.entries(VALID_RANGES)) {
		const key = field as keyof typeof VALID_RANGES;
		const value = params[key as keyof EnvironmentalParams] as number | undefined;

		if (value === undefined || value === null) {
			errors[field] = `${range.label} es requerida.`;
			continue;
		}

		if (typeof value !== "number" || isNaN(value)) {
			errors[field] = `${range.label} debe ser un número válido.`;
			continue;
		}

		if (value < range.min || value > range.max) {
			errors[field] =
        `${range.label} debe estar entre ${range.min} y ${range.max} ${range.unit}. ` +
        `Valor ingresado: ${value} ${range.unit}.`;
		}
	}

	return {
		isValid: Object.keys(errors).length === 0,
		errors,
	};
}

// ─────────────────────────────────────────
// Factores de ajuste por condición ambiental
// ─────────────────────────────────────────

/**
 * Calcula los factores de ajuste para una receta dada las condiciones ambientales.
 *
 * Lógica de negocio:
 * - Humedad alta → ingredientes higroscópicos (harina, azúcar) absorben más agua,
 *   se reduce ligeramente la cantidad de líquidos.
 * - Temperatura alta → fermentación más rápida, tiempos de horno menores.
 * - Altitud elevada → menor presión, gases se expanden más, se reduce levadura
 *   y se ajusta el tiempo de horno.
 * - Presión barométrica baja (correlacionada con altitud) refuerza el ajuste.
 */
export function calcAdjustmentFactors(
	params: EnvironmentalParams
): AdjustmentFactors {
	// Factor de humedad: por cada 10 % sobre el 50 % de referencia, reducir un 1 %
	const humidityDelta = params.relativeHumidity - REFERENCE_CONDITIONS.relativeHumidity;
	const humidityFactor = 1 - humidityDelta * 0.001; // ±0.1 % por punto porcentual

	// Factor de temperatura: por cada grado sobre 20 °C, reducir un 0.5 % del tiempo
	const tempDelta = params.ambientTemperature - REFERENCE_CONDITIONS.ambientTemperature;
	const temperatureFactor = 1 - tempDelta * 0.005;

	// Factor de altitud: cada 1 000 m reduce la presión ~12 % y el tiempo de horno ~3 %
	const altitudeFactor = 1 - (params.altitude / 1000) * 0.03;

	// Factor de presión: desviación respecto a la presión estándar (1013.25 hPa)
	const pressureDelta =
    (params.barometricPressure - REFERENCE_CONDITIONS.barometricPressure) /
    REFERENCE_CONDITIONS.barometricPressure;
	const pressureFactor = 1 + pressureDelta * 0.02;

	// Factor combinado (producto de los cuatro)
	const combinedFactor =
    humidityFactor * temperatureFactor * altitudeFactor * pressureFactor;

	return {
		humidityFactor:    Math.max(0.5, Math.min(1.5, humidityFactor)),
		temperatureFactor: Math.max(0.5, Math.min(1.5, temperatureFactor)),
		altitudeFactor:    Math.max(0.5, Math.min(1.5, altitudeFactor)),
		pressureFactor:    Math.max(0.5, Math.min(1.5, pressureFactor)),
		combinedFactor:    Math.max(0.5, Math.min(1.5, combinedFactor)),
	};
}

// ─────────────────────────────────────────
// Ajuste de recetas con portionCalcLogic
// ─────────────────────────────────────────

/**
 * Recalcula las estimaciones de tiempo de horno de una receta aplicando
 * los factores ambientales calculados por `calcAdjustmentFactors`.
 *
 * Integración con portionCalcLogic.ts:
 *   - Ajusta `ovenTime` y `handlingTime` del SetData según el factor combinado.
 *   - Llama a `calcFinalOvenTime` con los datos ajustados.
 */
export function applyEnvironmentalAdjustmentToRecipe(
	recipeName: string,
	baseSetData: SetData,
	params: EnvironmentalParams
): RecipeAdjustment {
	const factors = calcAdjustmentFactors(params);

	// Estimación original (sin ajuste ambiental)
	const originalEstimation = calcFinalOvenTime(baseSetData);

	// Datos ajustados: tiempos modificados por el factor combinado
	const adjustedSetData: SetData = {
		...baseSetData,
		ovenTime:     Math.round(baseSetData.ovenTime     * factors.combinedFactor * 100) / 100,
		handlingTime: Math.round(baseSetData.handlingTime * factors.combinedFactor * 100) / 100,
	};

	const adjustedEstimation = calcFinalOvenTime(adjustedSetData);

	return {
		recipeName,
		originalEstimation,
		adjustedEstimation,
		adjustmentFactors: factors,
	};
}

// ─────────────────────────────────────────
// Flujo completo del caso de uso RF_08
// ─────────────────────────────────────────

// Simulación de persistencia en memoria (reemplazar por BD en implementación real)
let storedEnvironmentalParams: EnvironmentalParams | null = null;

/**
 * Obtiene los parámetros ambientales actualmente almacenados.
 */
export function getStoredEnvironmentalParams(): EnvironmentalParams | null {
	return storedEnvironmentalParams;
}

/**
 * Punto de entrada principal del RF_08.
 *
 * Ejecuta los pasos del Flujo Normal:
 *   1. Verifica precondiciones (rol + recetas existentes).
 *   2. Valida los parámetros ingresados (paso 4 del flujo).
 *   3. Almacena los valores validados (paso 6).
 *   4. Retorna notificación de éxito y lista de recetas afectadas (paso 7).
 *
 * Lanza un error si las precondiciones no se cumplen.
 * Retorna `SaveResult` con `success: false` si la validación falla
 * (el sistema debe volver al paso 3 sin guardar).
 */
export function registerEnvironmentalVariables(
	params: EnvironmentalParams,
	userRole: UserRole,
	existingRecipes: string[]
): SaveResult {
	// ── Precondiciones ──────────────────────────────────────────
	checkUserRole(userRole);
	checkRecipesExist(existingRecipes);

	// ── Paso 4: Validación de rangos ────────────────────────────
	const validation = validateEnvironmentalParams(params);
	if (!validation.isValid) {
		const errorMessages = Object.values(validation.errors).join(" | ");
		return {
			success: false,
			message:
        `Los siguientes valores están fuera del rango permitido: ${errorMessages}. ` +
        "Por favor corrija los valores e intente guardar nuevamente.",
		};
	}

	// ── Paso 6: Almacenar valores ───────────────────────────────
	storedEnvironmentalParams = { ...params };

	// ── Paso 7: Notificación de éxito ───────────────────────────
	return {
		success: true,
		message:
      "Los parámetros ambientales han sido guardados exitosamente. " +
      "Las recetas serán recalculadas con los nuevos valores.",
		savedParams: storedEnvironmentalParams,
		affectedRecipes: existingRecipes,
	};
}

/**
 * Conveniencia: registra los parámetros y recalcula de inmediato una
 * colección de recetas, devolviendo los ajustes por receta.
 */
export function registerAndRecalculate(
	params: EnvironmentalParams,
	userRole: UserRole,
	recipes: Array<{ name: string; setData: SetData }>
): { saveResult: SaveResult; adjustments: RecipeAdjustment[] } {
	const recipeNames = recipes.map((r) => r.name);
	const saveResult = registerEnvironmentalVariables(params, userRole, recipeNames);

	if (!saveResult.success) {
		return { saveResult, adjustments: [] };
	}

	const adjustments = recipes.map((recipe) =>
		applyEnvironmentalAdjustmentToRecipe(recipe.name, recipe.setData, params)
	);

	return { saveResult, adjustments };
}
