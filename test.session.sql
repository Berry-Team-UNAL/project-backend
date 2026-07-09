BEGIN;

-- 1. Asegurar que la secuencia de IDs de catalogo_componente esté perfectamente sincronizada
SELECT setval(
	pg_get_serial_sequence('public.catalogo_componente', 'id_componente'), 
	COALESCE(MAX(id_componente), 1)
) FROM public.catalogo_componente;

-- 2. Insertar el Usuario Administrador (Apuntando al id_rol = 1)
INSERT INTO public.usuario (nombre_usuario, apellido_usuario, email, password, id_rol, activo)
VALUES (
	'Carlos', 
	'Mendoza', 
	'admin@panaderia.com', 
	'$2b$10$UnR1GshK82p9mX0yL4/L0O8mREfN8QWv7CqLOB9T3i.LwX7.5z6v.', 
	1, 
	true
)
ON CONFLICT (email) DO NOTHING;

-- 3. Insertar el Sándwich asegurando que no se duplique por nombre
INSERT INTO public.catalogo_componente (nombre, tipo_componente, unidad_medida, activo)
SELECT 'Sándwich Especial de la Casa', 'RECETA', 'unidades', true
WHERE NOT EXISTS (
	SELECT 1 FROM public.catalogo_componente WHERE nombre = 'Sándwich Especial de la Casa'
);

-- 4. Convertir ese componente en la Receta Oficial
INSERT INTO public.receta_subreceta (id_componente, ppu_objetivo, unidades_tanda, porcentaje_merma_coccion, creado_por)
SELECT 
	c.id_componente, 
	2500.00,  
	10,       
	0.00,     
	u.id_usuario
FROM public.catalogo_componente c
CROSS JOIN public.usuario u
WHERE c.nombre = 'Sándwich Especial de la Casa'
  AND u.email = 'admin@panaderia.com'
  AND NOT EXISTS (
      SELECT 1 FROM public.receta_subreceta WHERE id_componente = c.id_componente
  )
LIMIT 1;

-- 5. Generar el Primer Reporte de Producción (Lote Piloto)
INSERT INTO public.reporte_produccion (identificador_lote, id_receta, fecha_produccion, hora_produccion, cantidad_producida, unidad_medida, id_responsable, id_supervisor, observaciones)
SELECT 
	'LOTE-SANDWICH-001', 
	c.id_componente, 
	CURRENT_DATE,            
	'10:30:00'::time,        
	40.00,                   
	'unidades', 
	u.id_usuario,            
	NULL,                    
	'Lote inicial de prueba inyectado exitosamente por SQL para validar la vista del historial.'
FROM public.catalogo_componente c
CROSS JOIN public.usuario u
WHERE c.nombre = 'Sándwich Especial de la Casa'
  AND u.email = 'admin@panaderia.com'
LIMIT 1
ON CONFLICT (identificador_lote) DO NOTHING;

-- 6. Insertar las Tandas vinculadas a ese Lote Piloto
INSERT INTO public.tanda_produccion (id_reporte, numero_tanda, cantidad)
SELECT id_reporte, 1, 20.00 FROM public.reporte_produccion WHERE identificador_lote = 'LOTE-SANDWICH-001'
UNION ALL
SELECT id_reporte, 2, 20.00 FROM public.reporte_produccion WHERE identificador_lote = 'LOTE-SANDWICH-001'
ON CONFLICT (id_reporte, numero_tanda) DO NOTHING;

COMMIT;