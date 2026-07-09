// services/workshop/workshopSessionInclude.ts
// Tipos locales para sesiones de taller (sin dependencia de modelos Prisma no existentes).

import { WorkshopItemType, WorkshopSessionState } from "@/domain/types/workshop";

export interface WorkshopItemWithRelations {
	id_item: number;
	id_sesion: number;
	tipo: WorkshopItemType;
	descripcion: string;
	cantidad: number | null;
	unidad_medida: string | null;
	orden: number;
	completado: boolean;
	completado_en: Date | null;
}

export interface WorkshopSessionWithRelations {
	id_sesion: number;
	id_receta: number;
	identificador_lote: string | null;
	estado: WorkshopSessionState;
	creado_por: number | null;
	creado_en: Date;
	actualizado_en: Date | null;
	items: WorkshopItemWithRelations[];
	receta_nombre?: string;
}
