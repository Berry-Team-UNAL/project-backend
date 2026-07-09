/* eslint-disable camelcase */
import { MasterRecipe, RecipeComponent } from "../types/sandbox";
import { Subrecipe, SubrecipeVersionSummary } from "../types/subrecipe";
import type { receta_subreceta, detalle_formulacion, catalogo_componente, articulo_proveedor, ingrediente_base } from "../../generated/prisma/client";

type RecetaWithIncludes = receta_subreceta & {
	catalogo_componente: catalogo_componente;
	detalle_formulacion: (detalle_formulacion & {
		catalogo_componente: catalogo_componente & {
			ingrediente_base: (ingrediente_base & {
				articulo_proveedor: articulo_proveedor[];
			}) | null;
		};
		articulo_proveedor: articulo_proveedor | null;
	})[];
};

type ComponentKind = "ingredient" | "subrecipe";

export async function mapPrismaToMasterRecipe(
	receta: RecetaWithIncludes,
	subrecipeFetcher: (subrecipeId: string) => Promise<Subrecipe | null>,
): Promise<MasterRecipe> {
	const components = await Promise.all(
		receta.detalle_formulacion.map(async (d): Promise<RecipeComponent> => {
			const isSubrecipe = d.catalogo_componente.tipo_componente === "SUBRECETA";
			const kind: ComponentKind = isSubrecipe ? "subrecipe" : "ingredient";
			const base = {
				type: kind,
				id: `c_${d.id_componente_hijo}`,
				name: d.catalogo_componente.nombre,
				quantityGrams: Number(d.cantidad_usada),
				selectedVersionId: d.id_articulo_especifico
					? `v${d.id_articulo_especifico}`
					: undefined,
			};
			if (!isSubrecipe) {
				return base;
			}
			const subrecipeId = `sr_${d.id_componente_hijo}`;
			const subrecipe = await subrecipeFetcher(subrecipeId);
			const summaries: SubrecipeVersionSummary[] = subrecipe
				? subrecipe.versions
					.filter((v) => v.isActive)
					.map((v) => ({
						versionId: v.versionId,
						versionName: v.versionName,
						shortDescription: v.shortDescription,
						estimatedCostPerKg: v.estimatedCostPerKg,
						createdAt: v.createdAt,
					}))
				: [];
			return { ...base, subrecipeId, versions: summaries };
		}),
	);

	const ingredients = receta.detalle_formulacion
		.filter((d) => d.catalogo_componente.tipo_componente === "INGREDIENTE")
		.map((d) => {
			const article = d.catalogo_componente.ingrediente_base?.articulo_proveedor[0];
			return {
				id: `i_${d.id_componente_hijo}`,
				name: d.catalogo_componente.nombre,
				waterPercentage: article ? Number(article.porcentaje_agua || 0) : 0,
				pricePerGram: article ? Number(article.costo_por_unidad) / 1000 : 0,
				quantityGrams: Number(d.cantidad_usada),
			};
		});

	return {
		id: `fr_${receta.id_componente}`,
		name: receta.catalogo_componente.nombre,
		version: "V1",
		components,
		ingredients,
		subrecipeVersions: [],
		bakingParameters: {
			bakingTimeHours: Number(receta.tiempo_coccion_horas || 0.42),
			unitsPerBatch: receta.unidades_tanda ?? 60,
		},
	};
}

export function mapPrismaToSubrecipe(receta: RecetaWithIncludes): Subrecipe {
	return {
		id: `sr_${receta.id_componente}`,
		name: receta.catalogo_componente.nombre,
		versions: [
			{
				versionId: "v1",
				versionName: `${receta.catalogo_componente.nombre} — V1`,
				shortDescription: "Versión registrada en base de datos",
				estimatedCostPerKg: computeSubrecipeCostPerKg(receta.detalle_formulacion),
				createdAt: receta.creado_en || new Date(),
				isActive: receta.catalogo_componente.activo ?? true,
				ingredients: receta.detalle_formulacion.map((d) => {
					const article = d.catalogo_componente.ingrediente_base?.articulo_proveedor[0];
					return {
						id: `i_${d.id_componente_hijo}`,
						name: d.catalogo_componente.nombre,
						waterPercentage: article ? Number(article.porcentaje_agua || 0) : 0,
						pricePerGram: article ? Number(article.costo_por_unidad) / 1000 : 0,
						quantityGrams: Number(d.cantidad_usada),
					};
				}),
			},
		],
	};
}

function computeSubrecipeCostPerKg(details: RecetaWithIncludes["detalle_formulacion"]): number {
	const totalGrams = details.reduce((s, d) => s + Number(d.cantidad_usada), 0);
	if (totalGrams === 0) {return 0;}
	const totalCost = details.reduce((s, d) => {
		const article = d.catalogo_componente.ingrediente_base?.articulo_proveedor[0];
		if (!article) {return s;}
		return s + Number(d.cantidad_usada) * Number(article.costo_por_unidad) / 1000;
	}, 0);
	return Math.round((totalCost / totalGrams) * 1000);
}

