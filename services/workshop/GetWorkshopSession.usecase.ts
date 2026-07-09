// services/workshop/GetWorkshopSession.usecase.ts
// RF_15 — Recupera una sesión con su lista de verificación.
// NOTA: Sin persistencia. Busca en datos de ejemplo.

import { WorkshopSessionWithRelations } from "./workshopSessionInclude";
import { ListWorkshopSessionsUseCase } from "./ListWorkshopSessions.usecase";

export class GetWorkshopSessionUseCase {
	async execute(idSesion: number): Promise<WorkshopSessionWithRelations | null> {
		const sessions = await new ListWorkshopSessionsUseCase().execute();
		return sessions.find((s) => s.id_sesion === idSesion) ?? null;
	}
}
