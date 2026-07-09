import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
	try {
		const recetas = await prisma.catalogo_componente.findMany({
			where: {
				tipo_componente: "RECETA",
				activo: true
			},
			include: {
				receta_subreceta: true
			}
		});

		return NextResponse.json(recetas);
	} catch {
		return NextResponse.json(
			{ error: "Error en el servidor" },
			{ status: 500 }
		);
	}
}
