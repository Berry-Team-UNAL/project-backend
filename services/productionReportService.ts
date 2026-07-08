import { prisma } from "@/domain/prisma";
import * as crypto from "crypto";
import { IProductionReportRequest, ProductionReportDTO } from "@/domain/types/reportTypes";

export async function generateReport(
  req: IProductionReportRequest,
): Promise<{ reporte?: ProductionReportDTO; error?: string }> {
  const receta = await prisma.receta_subreceta.findUnique({
    where: { id_componente: req.idReceta },
    include: { catalogo_componente: true },
  });
  if (!receta) {
    return { error: `Receta ${req.idReceta} no encontrada` };
  }

  const dateStr = new Date().toISOString().split("T")[0];
  const salt = crypto.randomBytes(8).toString("hex");
  const numeroLote = `LOT-${dateStr}-${salt.substring(0, 5)}`;

  const reporte = await prisma.reporte_produccion.create({
    data: {
      fecha: new Date(),
      hora: new Date().toLocaleTimeString(),
      numero_lote: numeroLote,
      cantidad: req.cantidad,
      personal: req.personal,
      notas: `Reporte generado para ${receta.catalogo_componente.nombre}`,
      id_condicion: req.idCondicion,
      id_receta: req.idReceta,
      id_sesion: req.idSesion,
    },
  });

  return {
    reporte: {
      idReporte: reporte.id_reporte,
      numeroLote: reporte.numero_lote,
      fecha: reporte.fecha,
      detalles: reporte,
    },
  };
}