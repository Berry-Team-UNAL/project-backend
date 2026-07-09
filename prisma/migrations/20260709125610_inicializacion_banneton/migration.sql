-- CreateTable
CREATE TABLE "articulo_proveedor" (
    "id_articulo" SERIAL NOT NULL,
    "id_componente" INTEGER NOT NULL,
    "id_proveedor" INTEGER NOT NULL,
    "marca_descripcion" VARCHAR(100),
    "costo_por_unidad" DECIMAL(10,4) NOT NULL,
    "porcentaje_agua" DECIMAL(5,2) DEFAULT 0.00,
    "porcentaje_grasa" DECIMAL(5,2) DEFAULT 0.00,
    "porcentaje_merma_limpieza" DECIMAL(5,2) DEFAULT 0.00,
    "es_predeterminado" BOOLEAN DEFAULT false,
    "creado_en" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "articulo_proveedor_pkey" PRIMARY KEY ("id_articulo")
);

-- CreateTable
CREATE TABLE "catalogo_componente" (
    "id_componente" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "tipo_componente" VARCHAR(20) NOT NULL,
    "unidad_medida" VARCHAR(20) NOT NULL,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "catalogo_componente_pkey" PRIMARY KEY ("id_componente")
);

-- CreateTable
CREATE TABLE "detalle_formulacion" (
    "id_detalle" SERIAL NOT NULL,
    "id_receta_padre" INTEGER NOT NULL,
    "id_componente_hijo" INTEGER NOT NULL,
    "id_articulo_especifico" INTEGER,
    "cantidad_usada" DECIMAL(10,4) NOT NULL,
    "unidad_medida_usada" VARCHAR(20) NOT NULL,
    "nota_preparacion" VARCHAR(255),
    "aporta_a_base_panadera" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "detalle_formulacion_pkey" PRIMARY KEY ("id_detalle")
);

-- CreateTable
CREATE TABLE "ingrediente_base" (
    "id_componente" INTEGER NOT NULL,

    CONSTRAINT "ingrediente_base_pkey" PRIMARY KEY ("id_componente")
);

-- CreateTable
CREATE TABLE "proveedor" (
    "id_proveedor" SERIAL NOT NULL,
    "nombre_proveedor" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20),
    "email" VARCHAR(100),
    "direccion" TEXT,
    "activo" BOOLEAN DEFAULT true,
    "creado_en" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "proveedor_pkey" PRIMARY KEY ("id_proveedor")
);

-- CreateTable
CREATE TABLE "receta_subreceta" (
    "id_componente" INTEGER NOT NULL,
    "ppu_objetivo" DECIMAL(10,2),
    "unidades_tanda" INTEGER DEFAULT 1,
    "porcentaje_merma_coccion" DECIMAL(5,2) DEFAULT 0.00,
    "creado_por" INTEGER,
    "creado_en" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMP(6),

    CONSTRAINT "receta_subreceta_pkey" PRIMARY KEY ("id_componente")
);

-- CreateTable
CREATE TABLE "rol" (
    "id_rol" SERIAL NOT NULL,
    "nombre_rol" VARCHAR(30) NOT NULL,

    CONSTRAINT "rol_pkey" PRIMARY KEY ("id_rol")
);

-- CreateTable
CREATE TABLE "servicio_costo" (
    "id_componente" INTEGER NOT NULL,
    "costo_por_unidad_medida" DECIMAL(10,4) NOT NULL,

    CONSTRAINT "servicio_costo_pkey" PRIMARY KEY ("id_componente")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre_usuario" VARCHAR(50) NOT NULL,
    "apellido_usuario" VARCHAR(100),
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "id_rol" INTEGER NOT NULL,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "uk_componente_proveedor" ON "articulo_proveedor"("id_componente", "id_proveedor");

-- CreateIndex
CREATE INDEX "idx_componente_hijo" ON "detalle_formulacion"("id_componente_hijo");

-- CreateIndex
CREATE UNIQUE INDEX "uk_padre_hijo" ON "detalle_formulacion"("id_receta_padre", "id_componente_hijo");

-- CreateIndex
CREATE UNIQUE INDEX "rol_nombre_rol_key" ON "rol"("nombre_rol");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "articulo_proveedor" ADD CONSTRAINT "articulo_proveedor_id_componente_fkey" FOREIGN KEY ("id_componente") REFERENCES "ingrediente_base"("id_componente") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "articulo_proveedor" ADD CONSTRAINT "articulo_proveedor_id_proveedor_fkey" FOREIGN KEY ("id_proveedor") REFERENCES "proveedor"("id_proveedor") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "detalle_formulacion" ADD CONSTRAINT "detalle_formulacion_id_articulo_especifico_fkey" FOREIGN KEY ("id_articulo_especifico") REFERENCES "articulo_proveedor"("id_articulo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "detalle_formulacion" ADD CONSTRAINT "detalle_formulacion_id_componente_hijo_fkey" FOREIGN KEY ("id_componente_hijo") REFERENCES "catalogo_componente"("id_componente") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "detalle_formulacion" ADD CONSTRAINT "detalle_formulacion_id_receta_padre_fkey" FOREIGN KEY ("id_receta_padre") REFERENCES "receta_subreceta"("id_componente") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ingrediente_base" ADD CONSTRAINT "ingrediente_base_id_componente_fkey" FOREIGN KEY ("id_componente") REFERENCES "catalogo_componente"("id_componente") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "receta_subreceta" ADD CONSTRAINT "receta_subreceta_creado_por_fkey" FOREIGN KEY ("creado_por") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "receta_subreceta" ADD CONSTRAINT "receta_subreceta_id_componente_fkey" FOREIGN KEY ("id_componente") REFERENCES "catalogo_componente"("id_componente") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "servicio_costo" ADD CONSTRAINT "servicio_costo_id_componente_fkey" FOREIGN KEY ("id_componente") REFERENCES "catalogo_componente"("id_componente") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "rol"("id_rol") ON DELETE NO ACTION ON UPDATE NO ACTION;
