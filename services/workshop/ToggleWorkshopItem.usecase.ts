// services/workshop/ToggleWorkshopItem.usecase.ts
// RF_15 — Marca/desmarca un ítem de la lista de verificación.
// NOTA: Sin persistencia. Simula toggle en memoria sobre datos de ejemplo.

import { computeProgress } from "@/domain/workshopLogic";
import { WorkshopSessionWithRelations } from "./workshopSessionInclude";
import { ListWorkshopSessionsUseCase } from "./ListWorkshopSessions.usecase";

export interface ToggleWorkshopItemCommand {
	idSesion: number;
	idItem: number;
	completado: boolean;
}

export interface ToggleWorkshopItemResult {
	session?: WorkshopSessionWithRelations;
	error?: string;
}

export class ToggleWorkshopItemUseCase {
	async execute(command: ToggleWorkshopItemCommand): Promise<ToggleWorkshopItemResult> {
		const sessions = await new ListWorkshopSessionsUseCase().execute();
		const session = sessions.find((s) => s.id_sesion === command.idSesion);

		if (!session) {
			return { error: "El ítem no existe en esta sesión de taller" };
		}

		const item = session.items.find((i) => i.id_item === command.idItem);
		if (!item || item.id_sesion !== command.idSesion) {
			return { error: "El ítem no existe en esta sesión de taller" };
		}

		// Simular toggle
		item.completado = command.completado;
		item.completado_en = command.completado ? new Date() : null;

		const progress = computeProgress(session.items);
		session.estado = progress.procesoCompleto ? "completada" : "en_progreso";
		session.actualizado_en = new Date();

		return { session };
	}
}
