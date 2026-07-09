/* eslint-disable camelcase */
import { MasterRecipe } from "../types/sandbox";
import { Subrecipe } from "../types/subrecipe";
import { prisma } from "../prisma";
import { mapPrismaToMasterRecipe } from "./mappers";
import { findSubrecipeById } from "./subrecipes";

async function findRaw(id: number) {
	return await prisma.receta_subreceta.findUnique({
		where: { id_componente: id },
		include: {
			catalogo_componente: true,
			detalle_formulacion: {
				include: {
					catalogo_componente: {
						include: { ingrediente_base: { include: { articulo_proveedor: true } } },
					},
					articulo_proveedor: true,
				},
			},
		},
	});
}

// subrecipeFetcher injectable for tests; in production reads from data adapter
async function defaultSubrecipeFetcher(subrecipeId: string): Promise<Subrecipe | null> {
	return await findSubrecipeById(subrecipeId);
}

export async function findMasterRecipeById(
	recipeId: string,
	subrecipeFetcher: (subrecipeId: string) => Promise<Subrecipe | null> = defaultSubrecipeFetcher,
): Promise<MasterRecipe | null> {
	const id = parseInt(recipeId.replace("fr_", ""), 10);
	if (isNaN(id)) {return null;}
	const receta = await findRaw(id);
	if (!receta || receta.catalogo_componente.tipo_componente !== "RECETA") {return null;}
	return await mapPrismaToMasterRecipe(receta, subrecipeFetcher);
}

