// services/environment/GetEnvironmentParameters.usecase.ts
// RF_08 — Devuelve el perfil ambiental más reciente para precargar el formulario.
// NOTA: Sin persistencia. Retorna datos de ejemplo representativos de Bogotá.

export interface EnvironmentParameters {
	id_parametro: number;
	humedad_relativa: number;
	temperatura_ambiente: number;
	altitud: number;
	presion_barometrica: number;
	ciudad_referencia: string | null;
	sincronizacion_automatica: boolean;
	creado_por: number | null;
	creado_en: Date;
}

const SAMPLE_PARAMETERS: EnvironmentParameters = {
	id_parametro: 1,
	humedad_relativa: 72,
	temperatura_ambiente: 14,
	altitud: 2600,
	presion_barometrica: 750,
	ciudad_referencia: "Bogotá",
	sincronizacion_automatica: false,
	creado_por: null,
	creado_en: new Date("2025-01-15T10:00:00.000Z"),
};

export class GetEnvironmentParametersUseCase {
	async execute(): Promise<EnvironmentParameters> {
		return SAMPLE_PARAMETERS;
	}
}
