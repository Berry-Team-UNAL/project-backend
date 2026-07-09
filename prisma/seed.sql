-- ============================================================
-- BANNETON — SQL SEED SCRIPT (Fase 2)
-- Pegarlo directamente en Supabase SQL Editor.
-- Orden de inserción respeta FKs: proveedor → catalogo_componente → ingrediente_base → articulo_proveedor → receta_subreceta → detalle_formulacion → configuracion_tarifas
-- ============================================================

-- Limpieza (en orden inverso a las dependencias)
TRUNCATE TABLE detalle_formulacion CASCADE;
TRUNCATE TABLE articulo_proveedor CASCADE;
TRUNCATE TABLE receta_subreceta CASCADE;
TRUNCATE TABLE ingrediente_base CASCADE;
TRUNCATE TABLE servicio_costo CASCADE;
TRUNCATE TABLE catalogo_componente CASCADE;
TRUNCATE TABLE configuracion_tarifas CASCADE;
TRUNCATE TABLE proveedor CASCADE;
TRUNCATE TABLE rol CASCADE;
TRUNCATE TABLE usuario CASCADE;

-- Reiniciar auto-incrementos
ALTER SEQUENCE articulo_proveedor_id_articulo_seq RESTART WITH 1;
ALTER SEQUENCE catalogo_componente_id_componente_seq RESTART WITH 1;
ALTER SEQUENCE detalle_formulacion_id_detalle_seq RESTART WITH 1;
ALTER SEQUENCE proveedor_id_proveedor_seq RESTART WITH 1;
ALTER SEQUENCE configuracion_tarifas_id_configuracion_seq RESTART WITH 1;
ALTER SEQUENCE rol_id_rol_seq RESTART WITH 1;
ALTER SEQUENCE usuario_id_usuario_seq RESTART WITH 1;

-- ============================================================
-- 1. ROL
-- ============================================================
INSERT INTO rol (id_rol, nombre_rol) VALUES
	(1, 'ADMIN'),
	(2, 'PANADERO');

-- ============================================================
-- 2. USUARIO
-- ============================================================
INSERT INTO usuario (id_usuario, nombre_usuario, apellido_usuario, email, id_rol, activo) VALUES
	(1, 'Sergio', 'Navarro', 'sergio@example.com', 1, true),
	(2, 'Ana', 'Gomez', 'ana@example.com', 2, true);

-- ============================================================
-- 3. PROVEEDOR
-- ============================================================
INSERT INTO proveedor (id_proveedor, nombre_proveedor, telefono, email, direccion, activo) VALUES
	(1, 'Harinas del Valle', '601 555 0101', 'ventas@harinasdelvalle.co', 'Bogotá D.C.', true),
	(2, 'Distribuidora La Espiga', '601 555 0202', 'info@laespiga.co', 'Medellín', true),
	(3, 'Lácteos Las Veredales', '601 555 0303', 'pedidos@veredales.co', 'Bogotá D.C.', true);

-- ============================================================
-- 4. CATALOGO_COMPONENTE (tipos: INGREDIENTE, RECETA, SUBRECETA, SERVICIO)
-- ============================================================
INSERT INTO catalogo_componente (id_componente, nombre, tipo_componente, unidad_medida, activo) VALUES
	-- Master recipe
	(1, 'Medialuna Premium',        'RECETA',      'unidad',  true),
	-- Subrecetas (Cada versión es una subreceta independiente — Mapper la trata como v1.
	--            La gestión de multi-versión se desarrolla en Fase 3.)
	(2, 'Masa Base Hojaldre V1',    'SUBRECETA',   'gramo',   true),
	(3, 'Masa Base Hojaldre V2',    'SUBRECETA',   'gramo',   true),
	(4, 'Masa Base Hojaldre V3',    'SUBRECETA',   'gramo',   true),
	(5, 'Crema Pastelera V1',       'SUBRECETA',   'gramo',   true),
	-- Ingredientes (hijos finales, sin descomposición)
	(6,  'Harina',                  'INGREDIENTE', 'gramo',   true),
	(7,  'Mantequilla Europea',     'INGREDIENTE', 'gramo',   true),
	(8,  'Mantequilla Nacional',    'INGREDIENTE', 'gramo',   true),
	(9,  'Agua',                    'INGREDIENTE', 'gramo',   true),
	(10, 'Sal',                     'INGREDIENTE', 'gramo',   true),
	(11, 'Leche Entera',            'INGREDIENTE', 'gramo',   true),
	(12, 'Harina Integral',         'INGREDIENTE', 'gramo',   true),
	(13, 'Margarina Vegetal',       'INGREDIENTE', 'gramo',   true),
	(14, 'Azúcar',                  'INGREDIENTE', 'gramo',   true),
	(15, 'Yemas',                   'INGREDIENTE', 'gramo',   true),
	(16, 'Maicena',                 'INGREDIENTE', 'gramo',   true),
	-- Servicio (es opcional: lo incluye otro grupo — Registrado por completitud)
	(17, 'Servicio Agua',           'SERVICIO',    'litro',   true),
	(18, 'Servicio Gas',            'SERVICIO',    'hora',    true),
	(19, 'Servicio Electricidad',   'SERVICIO',    'kwh',     true);

-- ============================================================
-- 5. INGREDIENTE_BASE (FK a catalogo_componente, PK id_componente)
-- ============================================================
INSERT INTO ingrediente_base (id_componente, aporta_a_base_panadera) VALUES
	(6,  true),   -- Harina
	(7,  false),  -- Mantequilla Europea
	(8,  false),  -- Mantequilla Nacional
	(9,  false),  -- Agua
	(10, false),  -- Sal
	(11, false),  -- Leche Entera
	(12, true),   -- Harina Integral
	(13, false),  -- Margarina Vegetal
	(14, false),  -- Azúcar
	(15, false),  -- Yemas
	(16, false);  -- Maicena

-- ============================================================
-- 6. ARTICULO_PROVEEDOR (id_articulo explícito — coincide con detalle_formulacion.id_articulo_especifico)
-- ============================================================
INSERT INTO articulo_proveedor (id_articulo, id_componente, id_proveedor, marca_descripcion, costo_por_unidad, porcentaje_agua, porcentaje_grasa, porcentaje_merma_limpieza, es_predeterminado) VALUES
	-- Harina
	(1,  6,  1, 'Harina Trigo Especial',   3200, 0,  0,   0, true),
	-- Mantequilla Europea
	(2,  7,  3, 'Mantequilla Importada',   22000, 16, 81, 0, true),
	-- Mantequilla Nacional
	(3,  8,  3, 'Mantequilla La Vaquita',   14000, 16, 80, 0, true),
	-- Agua
	(4,  9,  1, 'Agua Potable',            100, 100, 0, 0, true),
	-- Sal
	(5,  10, 1, 'Sal Marina',               1000, 0, 0, 0, true),
	-- Leche
	(6,  11, 3, 'Leche Entera 3.5%',        2000, 88, 4, 0, true),
	-- Harina Integral
	(7,  12, 1, 'Harina Integral',          5000, 0, 0, 0, true),
	-- Margarina Vegetal
	(8,  13, 2, 'Margarina Veteral',        18000, 20, 70, 0, true),
	-- Azúcar
	(9,  14, 2, 'Azúcar Refinada',          2500, 0, 0, 0, true),
	-- Yemas
	(10, 15, 3, 'Yemas Pasteurizadas',      15000, 50, 33, 0, true),
	-- Maicena
	(11, 16, 2, 'Maicena Premium',          4000, 0, 0, 0, true);

-- ============================================================
-- 7. SERVICIO_COSTO (1 fila por servicio — Opcional según grupo)
-- ============================================================
INSERT INTO servicio_costo (id_componente, costo_por_unidad_medida) VALUES
	(17, 1200),   -- Agua: $1200 por litro
	(18, 8500),   -- Gas: $8500 por hora
	(19, 900);    -- Electricidad: $900 por kWh

-- ============================================================
-- 8. RECETA_SUBRECETA (id_componente coincide con catalogo_componente)
-- ============================================================
INSERT INTO receta_subreceta (id_componente, ppu_objetivo, unidades_tanda, porcentaje_merma_coccion, tiempo_coccion_horas, creado_por) VALUES
	-- Master recipe "Medialuna Premium" (fr_001)
	(1, NULL, 60, 10.00, 0.42, 1),
	-- Subrecetas "Masa Base Hojaldre" (3 versiones)
	(2, NULL, 1, 15.00, 0.5, 1),   -- V1
	(3, NULL, 1, 12.00, 0.5, 1),   -- V2
	(4, NULL, 1, 18.00, 0.6, 1),   -- V3
	-- Subreceta "Crema Pastelera" V1
	(5, NULL, 1, 5.00, 0.3, 1),
	-- Servicios (no son recetas estrictamente pero completan el FK en detalle_formulacion si llegaran a usarse)
	(17, NULL, 1, 0.00, 0.00, 1),
	(18, NULL, 1, 0.00, 0.00, 1),
	(19, NULL, 1, 0.00, 0.00, 1);

-- ============================================================
-- 9. DETALLE_FORMULACION
-- id_detalle es auto-incremental; id_articulo_especifico referencia articulo_proveedor.id_articulo
-- Para subrecetas usamos id_articulo_especifico=NULL (solo se aplica a ingredientes finales)
-- ============================================================

-- Master Recipe "Medialuna Premium" (id_receta_padre=1) — ingredições diretas + 1 subreceta
INSERT INTO detalle_formulacion (id_receta_padre, id_componente_hijo, id_articulo_especifico, cantidad_usada, unidad_medida_usada) VALUES
	(1, 6,  1, 500, 'gramo'),   -- Harina
	(1, 7,  2, 300, 'gramo'),   -- Mantequilla Europea
	(1, 9,  4, 250, 'gramo'),   -- Agua
	(1, 10, 5,  10, 'gramo'),   -- Sal
	(1, 2, NULL, 500, 'gramo'); -- Subreceta "Masa Base Hojaldre V1"

-- Subreceta "Masa Base Hojaldre V1" (id=2)
INSERT INTO detalle_formulacion (id_receta_padre, id_componente_hijo, id_articulo_especifico, cantidad_usada, unidad_medida_usada) VALUES
	(2, 6,  1,  500, 'gramo'),
	(2, 7,  2,  300, 'gramo'),
	(2, 9,  4,  250, 'gramo'),
	(2, 10, 5,   10, 'gramo');

-- Subreceta "Masa Base Hojaldre V2" (id=3) — Mantequilla Nacional + menos cantidad
INSERT INTO detalle_formulacion (id_receta_padre, id_componente_hijo, id_articulo_especifico, cantidad_usada, unidad_medida_usada) VALUES
	(3, 6,  1,  500, 'gramo'),
	(3, 8,  3,  250, 'gramo'),   -- Mantequilla Nacional
	(3, 9,  4,  250, 'gramo'),
	(3, 10, 5,   10, 'gramo');

-- Subreceta "Masa Base Hojaldre V3" (id=4) — Harina integral + Margarina
INSERT INTO detalle_formulacion (id_receta_padre, id_componente_hijo, id_articulo_especifico, cantidad_usada, unidad_medida_usada) VALUES
	(4, 12, 7,  400, 'gramo'),
	(4, 6,  1,  100, 'gramo'),
	(4, 13, 8,  300, 'gramo'),
	(4, 9,  4,  280, 'gramo'),
	(4, 10, 5,   10, 'gramo');

-- Subreceta "Crema Pastelera V1" (id=5)
INSERT INTO detalle_formulacion (id_receta_padre, id_componente_hijo, id_articulo_especifico, cantidad_usada, unidad_medida_usada) VALUES
	(5, 11, 6,  500, 'gramo'),
	(5, 14, 9,  100, 'gramo'),
	(5, 15, 10,  80, 'gramo'),
	(5, 16, 11,  40, 'gramo');

-- ============================================================
-- 10. CONFIGURACION_TARIFAS (1 fila singleton — tarifas globales actuales)
-- ============================================================
INSERT INTO configuracion_tarifas (
	agua_precio_litro,
	agua_porcentaje_adicional,
	gas_precio_hora,
	electricidad_precio_kwh,
	electricidad_potencia_horno,
	electricidad_recargo_fijo
) VALUES (
	1200,  -- $/litro
	15,    -- % adicional limpiezas
	8500,  -- $/hora
	900,   -- $/kWh
	5.0,   -- kW potencia horno
	500    -- $ recargo fijo
);

-- ============================================================
-- Verificación rápida (correr tras insert)
-- ============================================================
-- SELECT id_componente, nombre, tipo_componente FROM catalogo_componente ORDER BY id_componente;
-- SELECT id_articulo, id_componente, id_proveedor, costo_por_unidad FROM articulo_proveedor ORDER BY id_articulo;
-- SELECT id_detalle, id_receta_padre, id_componente_hijo, id_articulo_especifico, cantidad_usada FROM detalle_formulacion ORDER BY id_detalle;
-- SELECT * FROM configuracion_tarifas ORDER BY id_configuracion DESC LIMIT 1;