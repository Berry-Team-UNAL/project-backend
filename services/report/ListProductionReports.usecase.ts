// services/report/ListProductionReports.usecase.ts
// RF_16 — Historial de producción.
// NOTA: Sin persistencia. Retorna reportes de ejemplo.

import { ProductionReportWithRelations } from "./productionReportInclude";

const SAMPLE_REPORTS: ProductionReportWithRelations[] = [
	{
		id_reporte: 1,
		id_receta: 1,
		identificador_lote: "BNN-2025-0001",
		fecha_produccion: new Date("2025-03-10T00:00:00.000Z"),
		hora_produccion: new Date("1970-01-01T06:00:00.000Z"),
		cantidad_producida: 120,
		unidad_medida: "unidades",
		id_responsable: 1,
		id_supervisor: null,
		observaciones: "Producción sin novedades.",
		creado_por: null,
		creado_en: new Date("2025-03-10T06:30:00.000Z"),
		receta_nombre: "Pan de molde integral",
		responsable_nombre: "Carlos Gómez",
		supervisor_nombre: null,
		tanda_produccion: [
			{ id_tanda: 1, id_reporte: 1, numero_tanda: 1, cantidad: 60 },
			{ id_tanda: 2, id_reporte: 1, numero_tanda: 2, cantidad: 60 },
		],
	},
	{
		id_reporte: 2,
		id_receta: 2,
		identificador_lote: "BNN-2025-0002",
		fecha_produccion: new Date("2025-03-12T00:00:00.000Z"),
		hora_produccion: new Date("1970-01-01T07:00:00.000Z"),
		cantidad_producida: 48,
		unidad_medida: "unidades",
		id_responsable: 2,
		id_supervisor: 1,
		observaciones: null,
		creado_por: null,
		creado_en: new Date("2025-03-12T07:45:00.000Z"),
		receta_nombre: "Croissant clásico",
		responsable_nombre: "Laura Martínez",
		supervisor_nombre: "Carlos Gómez",
		tanda_produccion: [
			{ id_tanda: 3, id_reporte: 2, numero_tanda: 1, cantidad: 24 },
			{ id_tanda: 4, id_reporte: 2, numero_tanda: 2, cantidad: 24 },
		],
	},
];

export class ListProductionReportsUseCase {
	async execute(): Promise<ProductionReportWithRelations[]> {
		return SAMPLE_REPORTS;
	}
}
