// services/report/productionReportInclude.ts
// Tipos locales para reportes de producción (sin dependencia de modelos Prisma no existentes).

import { ProductionUnit } from "@/domain/types/report";

export interface ProductionBatchWithRelations {
	id_tanda: number;
	id_reporte: number;
	numero_tanda: number;
	cantidad: number;
}

export interface ProductionReportWithRelations {
	id_reporte: number;
	id_receta: number;
	identificador_lote: string;
	fecha_produccion: Date;
	hora_produccion: Date;
	cantidad_producida: number;
	unidad_medida: ProductionUnit;
	id_responsable: number;
	id_supervisor: number | null;
	observaciones: string | null;
	creado_por: number | null;
	creado_en: Date;
	tanda_produccion: ProductionBatchWithRelations[];
	receta_nombre?: string;
	responsable_nombre?: string;
	supervisor_nombre?: string | null;
}
