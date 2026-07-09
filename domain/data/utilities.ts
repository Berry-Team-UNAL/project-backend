/* eslint-disable camelcase */
import { UtilityTariffs } from "../types/utilities";
import { MasterRecipe } from "../types/sandbox";
import { prisma } from "../prisma";
import { findMasterRecipeById } from "./recipes";

export const DEFAULT_UTILITY_TARIFFS: UtilityTariffs = {
	water: { pricePerLiter: 1200, additionalUsagePercentage: 15 },
	gas: { pricePerHour: 8500 },
	electricity: { pricePerKwh: 900, ovenPowerKw: 5.0, fixedSurcharge: 500 },
};

export async function getGlobalTariffs(): Promise<UtilityTariffs> {
	const config = await prisma.configuracion_tarifas.findFirst({
		orderBy: { creado_en: "desc" },
	});
	if (!config) {return structuredClone(DEFAULT_UTILITY_TARIFFS);}
	return {
		water: {
			pricePerLiter: Number(config.agua_precio_litro),
			additionalUsagePercentage: Number(config.agua_porcentaje_adicional),
		},
		gas: { pricePerHour: Number(config.gas_precio_hora) },
		electricity: {
			pricePerKwh: Number(config.electricidad_precio_kwh),
			ovenPowerKw: Number(config.electricidad_potencia_horno),
			fixedSurcharge: Number(config.electricidad_recargo_fijo),
		},
	};
}

export async function saveGlobalTariffs(tariffs: UtilityTariffs): Promise<void> {
	await prisma.configuracion_tarifas.create({
		data: {
			agua_precio_litro: tariffs.water.pricePerLiter,
			agua_porcentaje_adicional: tariffs.water.additionalUsagePercentage,
			gas_precio_hora: tariffs.gas.pricePerHour,
			electricidad_precio_kwh: tariffs.electricity.pricePerKwh,
			electricidad_potencia_horno: tariffs.electricity.ovenPowerKw,
			electricidad_recargo_fijo: tariffs.electricity.fixedSurcharge,
		},
	});
}

export async function RECIPE_FOR_COST_CALCULATION(recipeId: string): Promise<MasterRecipe | null> {
	return await findMasterRecipeById(recipeId);
}
