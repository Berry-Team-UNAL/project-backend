/* eslint-disable camelcase */
import { Subrecipe } from "../types/subrecipe";
import { prisma } from "../prisma";
import { mapPrismaToSubrecipe } from "./mappers";

export async function findSubrecipeById(subrecipeId: string): Promise<Subrecipe | null> {
	const id = parseInt(subrecipeId.replace("sr_", ""), 10);
	if (isNaN(id)) {return null;}
	const receta = await prisma.receta_subreceta.findUnique({
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
	if (!receta || receta.catalogo_componente.tipo_componente !== "SUBRECETA") {return null;}
	return mapPrismaToSubrecipe(receta);
}
