// services/workshop/CreateWorkshopSession.usecase.ts
// RF_15 — Cargar la receta en el Modo Taller y generar su lista de verificación.
// NOTA: Sin persistencia. Simula creación en memoria.

import { buildChecklistItems, validateWorkshopSession } from "@/domain/workshopLogic";
import {
	CreateWorkshopSessionCommand,
	WorkshopValidationError,
} from "@/domain/types/workshop";
import { WorkshopSessionWithRelations } from "./workshopSessionInclude";

export interface CreateWorkshopSessionResult {
	session?: WorkshopSessionWithRelations;
	errors?: WorkshopValidationError[];
}

export class CreateWorkshopSessionUseCase {
	async execute(command: CreateWorkshopSessionCommand): Promise<CreateWorkshopSessionResult> {
		if (!command.idReceta || command.idReceta <= 0) {
			return { errors: [{ field: "idReceta", message: "Debe seleccionar una receta activa" }] };
		}

		// Ingredientes por defecto si no se envían
		const ingredientes =
			command.ingredientes && command.ingredientes.length > 0
				? command.ingredientes
				: [
						{ descripcion: "Harina", cantidad: 500, unidadMedida: "g" },
						{ descripcion: "Agua", cantidad: 300, unidadMedida: "ml" },
						{ descripcion: "Sal", cantidad: 10, unidadMedida: "g" },
						{ descripcion: "Levadura", cantidad: 5, unidadMedida: "g" },
					];

		const items = buildChecklistItems({ ...command, ingredientes });

		const errors = validateWorkshopSession(command, items);
		if (errors.length > 0) {
			return { errors };
		}

		const idSesion = Math.floor(Math.random() * 90000) + 10;

		const session: WorkshopSessionWithRelations = {
			id_sesion: idSesion,
			id_receta: command.idReceta,
			identificador_lote: command.identificadorLote?.trim() || null,
			estado: "en_progreso",
			creado_por: command.idCreadoPor ?? null,
			creado_en: new Date(),
			actualizado_en: null,
			receta_nombre: `Receta #${command.idReceta}`,
			items: items.map((item, i) => ({
				id_item: i + 1,
				id_sesion: idSesion,
				tipo: item.tipo,
				descripcion: item.descripcion,
				cantidad: item.cantidad,
				unidad_medida: item.unidadMedida,
				orden: item.orden,
				completado: false,
				completado_en: null,
			})),
		};

		return { session };
	}
}
