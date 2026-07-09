/* eslint-disable camelcase */
import { Ingredient } from "../types/recipe";
import { prisma } from "../prisma";

// Devuelve los datos b&aacute;sicos del art&iacute;culo proveedor como Ingredient (cantidad cero).
// El caller (sandbox) preserva la cantidad original del ingrediente reemplazado.
export async function findIngredientByArticleId(
	articleId: number,
): Promise<Ingredient | null> {
	const row = await prisma.articulo_proveedor.findUnique({
		where: { id_articulo: articleId },
	});
	if (!row) {return null;}
	const comp = await prisma.catalogo_componente.findUnique({
		where: { id_componente: row.id_componente },
	});
	if (!comp) {return null;}
	return {
		id: `i_${row.id_componente}`,
		name: row.marca_descripcion
			? `${comp.nombre} (${row.marca_descripcion})`
			: comp.nombre,
		waterPercentage: Number(row.porcentaje_agua || 0),
		pricePerGram: Number(row.costo_por_unidad) / 1000,
		quantityGrams: 0,
	};
}

// Lista candidatos disponibles para sustituir el art&iacute;culo actual:
// otros art&iacute;culos del mismo componente (misma materia prima, distinto proveedor/marca).
export async function findSubstituteOptions(
	currentArticleId: number,
): Promise<{ articleId: number; name: string; waterPercentage: number; pricePerGram: number }[]> {
	const current = await prisma.articulo_proveedor.findUnique({
		where: { id_articulo: currentArticleId },
	});
	if (!current) {return [];}

	const candidates = await prisma.articulo_proveedor.findMany({
		where: {
			id_componente: current.id_componente,
			id_articulo: { not: currentArticleId },
		},
	});
	if (candidates.length === 0) {return [];}

	const comp = await prisma.catalogo_componente.findUnique({
		where: { id_componente: current.id_componente },
	});
	const compName = comp?.nombre ?? "Ingrediente";

	return candidates.map((row) => ({
		articleId: row.id_articulo,
		name: row.marca_descripcion
			? `${compName} (${row.marca_descripcion})`
			: compName,
		waterPercentage: Number(row.porcentaje_agua || 0),
		pricePerGram: Number(row.costo_por_unidad) / 1000,
	}));
}

// Busca el id_articulo predeterminado asociado a un componente de ingrediente.
// &Uacute;til para que el frontend obtenga el articleId actual antes de pedir sustitutos.
export async function findDefaultArticleIdByComponentId(
	componentId: number,
): Promise<number | null> {
	const row = await prisma.articulo_proveedor.findFirst({
		where: { id_componente: componentId, es_predeterminado: true },
	});
	if (row) {return row.id_articulo;}
	const fallback = await prisma.articulo_proveedor.findFirst({
		where: { id_componente: componentId },
	});
	return fallback?.id_articulo ?? null;
}
