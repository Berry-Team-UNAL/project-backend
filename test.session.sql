-- ====================================================================
-- INYECCIÓN DE DATOS CORREGIDA CON UNIDAD DE MEDIDA
-- ====================================================================

BEGIN;

-- 1. Insertar componentes en el catálogo (Incluyendo unidad_medida)
INSERT INTO "catalogo_componente" ("id_componente", "nombre", "tipo_componente", "unidad_medida") VALUES
(1, 'Hard Red Wheat Flour', 'INSUMO', 'GRAMS'),
(2, 'Spring Water', 'INSUMO', 'GRAMS'),
(3, 'Sourdough Starter', 'INSUMO', 'GRAMS'),
(4, 'Sea Salt', 'INSUMO', 'GRAMS'),
(5, 'Artisan Heritage Sourdough', 'RECETA', 'GRAMS')
ON CONFLICT ("id_componente") DO NOTHING;

-- 2. Declarar la Harina como base panadera (100%)
INSERT INTO "ingrediente_base" ("id_componente", "aporta_a_base_panadera") VALUES
(1, TRUE),
(2, FALSE),
(3, FALSE),
(4, FALSE)
ON CONFLICT ("id_componente") DO NOTHING;

-- 3. Crear la cabecera de la receta
INSERT INTO "receta_subreceta" ("id_componente", "unidades_tanda", "creado_en") VALUES
(5, 1, NOW())
ON CONFLICT ("id_componente") DO NOTHING;

-- 4. Insertar las proporciones originales del caso de uso (Ajustado a tu esquema real)
INSERT INTO "detalle_formulacion" ("id_detalle", "id_receta_padre", "id_componente_hijo", "cantidad_usada", "unidad_medida_usada") VALUES
(101, 5, 1, 1000.0000, 'GRAMS'), -- Harina: 1000g
(102, 5, 2, 750.0000,  'GRAMS'), -- Agua: 750g
(103, 5, 3, 100.0000,  'GRAMS'), -- Masa Madre: 100g
(104, 5, 4, 20.0000,   'GRAMS')  -- Sal: 20g
ON CONFLICT ("id_detalle") DO NOTHING;

COMMIT;