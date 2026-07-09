import { Decimal } from "@prisma/client/runtime/library";

export interface IngredienteCalculado {
	idDetalle: number;
	idComponenteHijo: number; // Añadido para facilitar hipervínculos futuros
	nombre: string;
	cantidadOriginal: number;
	unidad: string;
	porcentajePanadero: number;
	esPrincipal: boolean;
}

export interface RecetaCalculadaBase {
	idComponente: number;
	unidadesTanda: number;
	pesoTotalOriginal: number;
	ingredientes: IngredienteCalculado[];
}

export interface IngredienteEscalado {
	idDetalle: number;
	nombre: string;
	cantidadNueva: number;
	unidad: string;
	porcentajePanadero: number;
}

export interface RecetaEscaladaResultado {
	idComponente: number;
	pesoTotalObjetivo: number;
	ingredientes: IngredienteEscalado[];
}

/**
 * Calcula los porcentajes panaderos adaptados a bases panaderas compuestas (ej: múltiples harinas).
 */
export function procesarPorcentajesBase(
	idComponente: number,
	unidadesTanda: number | null,
	detalles: any[]
): RecetaCalculadaBase {
	if (!detalles || detalles.length === 0) {
		throw new Error("La receta no tiene ingredientes configurados.");
	}

	// 1. Filtrar TODOS los insumos que aportan a la base panadera en ESTA receta
	const componentesBase = detalles.filter((item) => item.aporta_a_base_panadera === true);

	// Fallback de seguridad: si el usuario olvidó marcar alguno, usamos el de mayor peso como base
	let baseEfectiva = componentesBase;
	if (baseEfectiva.length === 0) {
		const mayorPeso = detalles.reduce((max, item) => 
			(item.cantidad_usada as Decimal).toNumber() > (max.cantidad_usada as Decimal).toNumber() ? item : max
		);
		baseEfectiva = [mayorPeso];
	}

	// 2. Sumar el peso de todos los componentes base para decretar el 100% total de la base
	const pesoBaseTotal = baseEfectiva.reduce(
		(sum, item) => sum + (item.cantidad_usada as Decimal).toNumber(), 
		0
	);

	if (pesoBaseTotal === 0) {
		throw new Error("El peso de la base panadera no puede ser cero.");
	}

	let pesoTotalOriginal = 0;

	// 3. Mapear y calcular los porcentajes panaderos individuales relativos a la suma de la base
	const ingredientes: IngredienteCalculado[] = detalles.map((item) => {
		const cantidad = (item.cantidad_usada as Decimal).toNumber();
		pesoTotalOriginal += cantidad;

		// Regla de tres: (cantidad_insumo / suma_peso_harinas_o_bases) * 100
		const porcentajePanadero = (cantidad / pesoBaseTotal) * 100;

		// Es principal si pertenece al grupo que compone la base
		const esPrincipal = baseEfectiva.some(b => b.id_detalle === item.id_detalle);

		return {
			idDetalle: item.id_detalle,
			idComponenteHijo: item.id_componente_hijo,
			nombre: item.catalogo_componente?.nombre || "Insumo Desconocido",
			cantidadOriginal: cantidad,
			unidad: item.unidad_medida_usada,
			porcentajePanadero: Math.round(porcentajePanadero * 100) / 100,
			esPrincipal: esPrincipal
		};
	});

	return {
		idComponente,
		unidadesTanda: unidadesTanda ?? 1,
		pesoTotalOriginal: Math.round(pesoTotalOriginal * 100) / 100,
		ingredientes
	};
}

/**
 * Aplica la regla de tres inversa para escalar basándose en el peso objetivo total.
 * Mantiene la lógica matemática intacta pero se beneficia de la base compuesta.
 */
export function escalarReceta(
	recetaBase: RecetaCalculadaBase,
	pesoTotalObjetivo: number
): RecetaEscaladaResultado {
	const sumaPorcentajes = recetaBase.ingredientes.reduce(
		(acc, ing) => acc + ing.porcentajePanadero,
		0
	);

	// Multiplicador global basado en el peso objetivo y la suma de porcentajes
	const nuevoPesoPrincipal = (pesoTotalObjetivo / sumaPorcentajes) * 100;

	const ingredientesEscalados: IngredienteEscalado[] = recetaBase.ingredientes.map((ing) => {
		const cantidadNueva = (nuevoPesoPrincipal * ing.porcentajePanadero) / 100;

		return {
			idDetalle: ing.idDetalle,
			nombre: ing.nombre,
			cantidadNueva: Math.round(cantidadNueva * 100) / 100,
			unidad: ing.unidad,
			porcentajePanadero: ing.porcentajePanadero
		};
	});

	return {
		idComponente: recetaBase.idComponente,
		pesoTotalObjetivo,
		ingredientes: ingredientesEscalados
	};
}
