// services/workshop/ListWorkshopSessions.usecase.ts
// RF_15 — Lista las sesiones de taller.
// NOTA: Sin persistencia. Retorna sesiones de ejemplo.

import { WorkshopSessionWithRelations } from "./workshopSessionInclude";

const SAMPLE_SESSIONS: WorkshopSessionWithRelations[] = [
	{
		id_sesion: 1,
		id_receta: 1,
		identificador_lote: "BNN-2025-0001",
		estado: "completada",
		creado_por: null,
		creado_en: new Date("2025-03-10T08:00:00.000Z"),
		actualizado_en: new Date("2025-03-10T10:30:00.000Z"),
		receta_nombre: "Pan de molde integral",
		items: [
			{ id_item: 1, id_sesion: 1, tipo: "ingrediente", descripcion: "Harina integral", cantidad: 500, unidad_medida: "g", orden: 1, completado: true, completado_en: new Date("2025-03-10T08:15:00.000Z") },
			{ id_item: 2, id_sesion: 1, tipo: "ingrediente", descripcion: "Agua", cantidad: 350, unidad_medida: "ml", orden: 2, completado: true, completado_en: new Date("2025-03-10T08:20:00.000Z") },
			{ id_item: 3, id_sesion: 1, tipo: "paso", descripcion: "Mezclar y amasar por 10 minutos", cantidad: null, unidad_medida: null, orden: 3, completado: true, completado_en: new Date("2025-03-10T08:35:00.000Z") },
		],
	},
	{
		id_sesion: 2,
		id_receta: 2,
		identificador_lote: "BNN-2025-0002",
		estado: "en_progreso",
		creado_por: null,
		creado_en: new Date("2025-03-12T09:00:00.000Z"),
		actualizado_en: new Date("2025-03-12T09:20:00.000Z"),
		receta_nombre: "Croissant clásico",
		items: [
			{ id_item: 4, id_sesion: 2, tipo: "ingrediente", descripcion: "Harina de fuerza", cantidad: 400, unidad_medida: "g", orden: 1, completado: true, completado_en: new Date("2025-03-12T09:10:00.000Z") },
			{ id_item: 5, id_sesion: 2, tipo: "ingrediente", descripcion: "Mantequilla laminada", cantidad: 200, unidad_medida: "g", orden: 2, completado: false, completado_en: null },
			{ id_item: 6, id_sesion: 2, tipo: "paso", descripcion: "Laminar la masa con mantequilla (3 pliegues simples)", cantidad: null, unidad_medida: null, orden: 3, completado: false, completado_en: null },
		],
	},
];

export class ListWorkshopSessionsUseCase {
	async execute(idReceta?: number): Promise<WorkshopSessionWithRelations[]> {
		if (idReceta) {
			return SAMPLE_SESSIONS.filter((s) => s.id_receta === idReceta);
		}
		return SAMPLE_SESSIONS;
	}
}
