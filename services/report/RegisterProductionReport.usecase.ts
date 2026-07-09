// services/report/RegisterProductionReport.usecase.ts
// RF_16 — Generar reporte de producción.
// NOTA: Sin persistencia. Valida con domain logic y retorna el reporte simulado.

import { validateProductionReport } from "@/domain/reportLogic";
import { parseDateOnly, parseTimeOfDay, formatLoteIdentifier } from "@/utils/reportUtils";
import {
	ProductionReportValidationError,
	RegisterProductionReportCommand,
} from "@/domain/types/report";
import { ProductionReportWithRelations } from "./productionReportInclude";

export interface RegisterProductionReportResult {
	report?: ProductionReportWithRelations;
	errors?: ProductionReportValidationError[];
}

export class RegisterProductionReportUseCase {
	async execute(command: RegisterProductionReportCommand): Promise<RegisterProductionReportResult> {
		const errors = validateProductionReport(command);
		if (errors.length > 0) {
			return { errors };
		}

		const now = new Date();
		const idReporte = Math.floor(Math.random() * 90000) + 10;
		const identificadorLote = command.identificadorLote?.trim() || formatLoteIdentifier(idReporte, now);

		const report: ProductionReportWithRelations = {
			id_reporte: idReporte,
			id_receta: command.idReceta,
			identificador_lote: identificadorLote,
			fecha_produccion: parseDateOnly(command.fechaProduccion),
			hora_produccion: parseTimeOfDay(command.horaProduccion),
			cantidad_producida: command.cantidadProducida,
			unidad_medida: command.unidadMedida,
			id_responsable: command.idResponsable,
			id_supervisor: command.idSupervisor ?? null,
			observaciones: command.observaciones ?? null,
			creado_por: command.idCreadoPor ?? null,
			creado_en: now,
			receta_nombre: `Receta #${command.idReceta}`,
			responsable_nombre: `Responsable #${command.idResponsable}`,
			supervisor_nombre: command.idSupervisor ? `Supervisor #${command.idSupervisor}` : null,
			tanda_produccion: (command.tandas ?? []).map((t, i) => ({
				id_tanda: i + 1,
				id_reporte: idReporte,
				numero_tanda: t.numeroTanda,
				cantidad: t.cantidad,
			})),
		};

		return { report };
	}
}
