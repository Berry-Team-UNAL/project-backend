// services/environment/RegisterEnvironmentParameters.usecase.ts
// RF_08 — Registrar variables geográficas y ambientales.
// NOTA: Sin persistencia. Valida con domain logic y retorna los datos recibidos.

import { validateEnvironmentParameters } from "@/domain/environmentLogic";
import {
	EnvironmentValidationError,
	RegisterEnvironmentCommand,
} from "@/domain/types/environment";
import { EnvironmentParameters } from "./GetEnvironmentParameters.usecase";

export interface RegisterEnvironmentResult {
	parameters?: EnvironmentParameters;
	errors?: EnvironmentValidationError[];
}

export class RegisterEnvironmentParametersUseCase {
	async execute(command: RegisterEnvironmentCommand): Promise<RegisterEnvironmentResult> {
		const errors = validateEnvironmentParameters(command);
		if (errors.length > 0) {
			return { errors };
		}

		const parameters: EnvironmentParameters = {
			id_parametro: Math.floor(Math.random() * 10000) + 2,
			humedad_relativa: command.humedadRelativa,
			temperatura_ambiente: command.temperaturaAmbiente,
			altitud: command.altitud,
			presion_barometrica: command.presionBarometrica,
			ciudad_referencia: command.ciudadReferencia?.trim() || null,
			sincronizacion_automatica: command.sincronizacionAutomatica ?? false,
			creado_por: command.idCreadoPor ?? null,
			creado_en: new Date(),
		};

		return { parameters };
	}
}
