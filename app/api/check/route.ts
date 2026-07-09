import { prisma } from "@/domain/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const idString = searchParams.get("id");
		const idReceta = parseInt(idString || "", 10);

		if (!idString || isNaN(idReceta)) {
			return NextResponse.json({ error: "ID Inválido" }, { status: 400 });
		}

		const receta = await prisma.receta_subreceta.findUnique({
			where: {
				id_componente: idReceta
			},
			include: {
				catalogo_componente: true,
				detalle_formulacion: {
					include: {
						catalogo_componente: true
					}
				}
			}
		});

		return NextResponse.json(receta);
	} catch {
		return NextResponse.json({ error: "Error interno" }, { status: 500 });
	}
}
