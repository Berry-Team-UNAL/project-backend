-- 1. REGISTRO EN EL CATÁLOGO MAESTRO (Asignamos el ID 7 para esta nueva obra de arte)
INSERT INTO "catalogo_componente" ("id_componente", "nombre", "tipo_componente", "unidad_medida", "activo") VALUES 
(7, 'Media Luna', 'RECETA', 'g', true);

-- 2. VINCULARLO COMO RECETA/SUBRECETA
-- Seteamos una tanda inicial de 40 unidades (basado en el peso multiplicado por unidades de tu tabla)
INSERT INTO "receta_subreceta" ("id_componente", "ppu_objetivo", "unidades_tanda", "porcentaje_merma_coccion", "creado_por") VALUES 
(7, 4.50, 40, 10.00, 1); -- Creado por el Administrador (id_usuario 1)

-- 3. NUEVOS INGREDIENTES EN EL CATÁLOGO (Si no existían los IDs anteriores, agregamos Leche y Yogurt)
INSERT INTO "catalogo_componente" ("id_componente", "nombre", "tipo_componente", "unidad_medida", "activo") VALUES 
(17, 'Leche Entera Industrial', 'INGREDIENTE', 'g', true), -- Manejado en gramos para consistencia de costos
(18, 'Yogurt Griego Natural', 'INGREDIENTE', 'g', true);

-- 4. VINCULARLOS COMO INGREDIENTES BASE
INSERT INTO "ingrediente_base" ("id_componente", "aporta_a_base_panadera") VALUES 
(17, false), -- Líquido (Hidratación enriquecida)
(18, false);

-- 5. ASIGNAR ARTÍCULOS DE PROVEEDORES Y COSTOS PARA LOS NUEVOS INGREDIENTES
INSERT INTO "articulo_proveedor" ("id_articulo", "id_componente", "id_proveedor", "marca_descripcion", "costo_por_unidad", "porcentaje_agua", "porcentaje_grasa", "porcentaje_merma_limpieza", "es_predeterminado") VALUES 
(8, 17, 2, 'Litro Leche Alianza', 0.0011, 87.00, 3.50, 0.00, true),   -- $0.0011 por gramo
(9, 18, 2, 'Balde Yogurt Griego 5kg', 0.0045, 80.00, 10.00, 0.00, true); -- $0.0045 por gramo

-- 6. MAESTRO-DETALLE: FORMULACIÓN DE LA RECETA COMPLETA (Usando la columna 'Peso X unidades' de tu imagen)
INSERT INTO "detalle_formulacion" ("id_detalle", "id_receta_padre", "id_componente_hijo", "id_articulo_especifico", "cantidad_usada", "unidad_medida_usada", "nota_preparacion") VALUES 
(19, 7, 10, 1, 4371.6000, 'g', 'Harina de trigo (100% Base Panadera).'),
(20, 7, 17, 8, 2185.8000, 'g', 'Leche (50% de hidratación enriquecida).'),
(21, 7, 18, 9, 437.2000, 'g', 'Yogurt griego para dar suavidad y acidez controlada (10%).'),
(22, 7, 16, 7, 349.7000, 'g', 'Azúcar blanca para activar y dorar (8%).'),
(23, 7, 13, 4, 87.4000, 'g', 'Sal marina fina (2%).'),
(24, 7, 14, 5, 131.1000, 'g', 'Levadura seca instantánea (3%).'),
(25, 7, 15, 6, 437.2000, 'g', 'Mantequilla sin sal añadida al final del proceso de amasado (10%).');