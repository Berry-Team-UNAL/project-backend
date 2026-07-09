-- CreateTable
CREATE TABLE "reporte_produccion" (
    "id_reporte" SERIAL NOT NULL,
    "identificador_lote" VARCHAR(50) NOT NULL,
    "id_receta" INTEGER NOT NULL,
    "fecha_produccion" DATE NOT NULL,
    "hora_produccion" TIME(6) NOT NULL,
    "cantidad_producida" DECIMAL(10,2) NOT NULL,
    "unidad_medida" VARCHAR(20) NOT NULL,
    "id_responsable" INTEGER NOT NULL,
    "id_supervisor" INTEGER,
    "observaciones" VARCHAR(500),
    "creado_en" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reporte_produccion_pkey" PRIMARY KEY ("id_reporte")
);

-- CreateTable
CREATE TABLE "tanda_produccion" (
    "id_tanda" SERIAL NOT NULL,
    "id_reporte" INTEGER NOT NULL,
    "numero_tanda" INTEGER NOT NULL,
    "cantidad" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "tanda_produccion_pkey" PRIMARY KEY ("id_tanda")
);

-- CreateIndex
CREATE UNIQUE INDEX "reporte_produccion_identificador_lote_key" ON "reporte_produccion"("identificador_lote");

-- CreateIndex
CREATE UNIQUE INDEX "uk_reporte_tanda" ON "tanda_produccion"("id_reporte", "numero_tanda");

-- AddForeignKey
ALTER TABLE "tanda_produccion" ADD CONSTRAINT "tanda_produccion_id_reporte_fkey" FOREIGN KEY ("id_reporte") REFERENCES "reporte_produccion"("id_reporte") ON DELETE CASCADE ON UPDATE NO ACTION;
