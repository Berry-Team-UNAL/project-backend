export interface IProductionReportRequest {
  idReceta: number;
  idSesion: number;
  idCondicion: number;
  personal: string;
  cantidad: number;
}

export interface ProductionReportDTO {
  idReporte: number;
  numeroLote: string;
  fecha: Date;
  detalles: any;
}