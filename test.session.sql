-- 1. INSERTAR ROLES (Nombres obligatorios por el sistema)
INSERT INTO "rol" ("nombre_rol") VALUES 
('admin'),
('editor'),
('panadero');

-- 2. INSERTAR USUARIO (Asociado al rol 'admin' / id_rol: 1)
INSERT INTO "usuario" ("nombre_usuario", "apellido_usuario", "email", "password", "id_rol", "activo") VALUES
('Niko', 'Chef', 'niko@banneton.com', '$2b$10$xyz...', 1, true); -- password hash simulado

-- 3. INSERTAR CATÁLOGO DE COMPONENTES (Insumos Base y Recetas)
-- Nota: Usamos las unidades exactas según el estándar culinario
INSERT INTO "catalogo_componente" ("id_componente", "nombre", "tipo_componente", "unidad_medida", "activo") VALUES
-- Harinas e Insumos base
(1, 'Harina de Trigo Fuerza', 'INGREDIENTE', 'G', true),
(2, 'Agua Purificada', 'INGREDIENTE', 'G', true),
(3, 'Sal Marina', 'INGREDIENTE', 'G', true),
(4, 'Masa Madre (100% Hidratación)', 'INGREDIENTE', 'G', true),
(5, 'Levadura Seca Instantánea', 'INGREDIENTE', 'G', true),
(6, 'Mantequilla sin Sal', 'INGREDIENTE', 'G', true),
(7, 'Azúcar Estándar', 'INGREDIENTE', 'G', true),
-- Componentes tipo Receta (Los contenedores)
(100, 'Pan de Masa Madre Clásico', 'RECETA', 'G', true),
(201, 'Baguette Tradición', 'RECETA', 'G', true),
(302, 'Brioche de la Casa', 'RECETA', 'G', true);

-- 4. REGISTRAR LOS COMPONENTES EN LA TABLA DE INGREDIENTES BASE
INSERT INTO "ingrediente_base" ("id_componente") VALUES 
(1), (2), (3), (4), (5), (6), (7);

-- 5. CREAR LAS 3 RECETAS EN LA TABLA MAESTRA
-- Definimos las unidades por tanda y el creador (id_usuario: 1)
INSERT INTO "receta_subreceta" ("id_componente", "unidades_tanda", "creado_por") VALUES
(100, 1, 1), -- Pan de Masa Madre
(201, 1, 1), -- Baguette
(302, 1, 1); -- Brioche

-- 6. DETALLE DE FORMULACIÓN (Donde ocurre la magia del Porcentaje Panadero)
-- CRÍTICO: La Harina Principal (id: 1) DEBE tener 'aporta_a_base_panadera' = true
-- para que tu lógica de dominio pueda calcular el divisor base.
INSERT INTO "detalle_formulacion" ("id_receta_padre", "id_componente_hijo", "cantidad_usada", "unidad_medida_usada", "aporta_a_base_panadera") VALUES
-- --- RECETA 1: Pan de Masa Madre Clásico ---
(100, 1, 500.0000, 'G', true),  -- Harina Fuerza (Base 100%)
(100, 2, 325.0000, 'G', false), -- Agua (65% Hidratación)
(100, 4, 100.0000, 'G', false), -- Masa Madre (20%)
(100, 3, 10.0000,  'G', false), -- Sal (2%)

-- --- RECETA 2: Baguette Tradición ---
(201, 1, 600.0000, 'G', true),  -- Harina Fuerza (Base 100%)
(201, 2, 390.0000, 'G', false), -- Agua (65%)
(201, 5, 6.0000,   'G', false), -- Levadura Seca (1%)
(201, 3, 12.0000,  'G', false), -- Sal (2%)

-- --- RECETA 3: Brioche de la Casa (Receta Enriquecida) ---
(302, 1, 400.0000, 'G', true),  -- Harina Fuerza (Base 100%)
(302, 6, 200.0000, 'G', false), -- Mantequilla (50%)
(302, 2, 120.0000, 'G', false), -- Agua/Líquidos (30%)
(302, 7, 60.0000,  'G', false), -- Azúcar (15%)
(302, 5, 8.0000,   'G', false), -- Levadura (2%)
(302, 3, 8.0000,   'G', false); -- Sal (2%)