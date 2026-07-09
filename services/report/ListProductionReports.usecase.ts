import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ListProductionReportsUseCase {
	async execute() {
		// 1. Jalamos de un solo golpe los reportes con sus tandas nuevas
		const reportesBase = await prisma.reporte_produccion.findMany({
			include: {
				tanda_produccion: true,
			},
			orderBy: {
				creado_en: "desc",
			},
		});

		if (reportesBase.length === 0) return [];

		// 2. Extraemos los IDs únicos para hacer las consultas en bloque (Evita el problema N+1)
		const recetaIds = Array.from(new Set(reportesBase.map((r) => r.id_receta)));
		const usuarioIds = Array.from(
			new Set(
				reportesBase.flatMap((r) => [r.id_responsable, r.id_supervisor].filter(Boolean) as number[])
			)
		);

		// 3. Consultas en paralelo de los modelos intocables usando sus llaves primarias
		const [recetas, usuarios] = await Promise.all([
			prisma.receta_subreceta.findMany({
				where: { id_componente: { in: recetaIds } },
				include: { catalogo_componente: true },
			}),
			prisma.usuario.findMany({
				where: { id_usuario: { in: usuarioIds } },
			}),
		]);

		// Indexamos en Mapas O(1) en memoria para asociar los datos de forma ultra rápida
		const recetaMap = new Map(recetas.map((r) => [r.id_componente, r]));
		const usuarioMap = new Map(usuarios.map((u) => [u.id_usuario, u]));

		// 4. El "Join Lógico" estructurado exactamente como lo espera tu interfaz de React
		return reportesBase.map((reporte) => {
			const recetaObj = recetaMap.get(reporte.id_receta);
			const respObj = usuarioMap.get(reporte.id_responsable);
			const supObj = reporte.id_supervisor ? usuarioMap.get(reporte.id_supervisor) : null;

			return {
				id_reporte: reporte.id_reporte,
				identificador_lote: reporte.identificador_lote,
				fecha_produccion: reporte.fecha_produccion.toISOString().split("T")[0],
				hora_produccion: reporte.hora_produccion.toISOString(),
				cantidad_producida: reporte.cantidad_producida.toString(),
				unidad_medida: reporte.unidad_medida,
				observaciones: reporte.observaciones,
				receta_subreceta: recetaObj
					? {
							catalogo_componente: {
								nombre: recetaObj.catalogo_componente?.nombre ?? null,
							},
						}
					: null,
				responsable: respObj
					? {
							nombre_usuario: respObj.nombre_usuario,
							apellido_usuario: respObj.apellido_usuario,
						}
					: null,
				supervisor: supObj
					? {
							nombre_usuario: supObj.nombre_usuario,
							apellido_usuario: supObj.apellido_usuario,
						}
					: null,
				tanda_produccion: reporte.tanda_produccion.map((t) => ({
					numero_tanda: t.numero_tanda,
					cantidad: t.cantidad.toString(),
				})),
			};
		});
	}
}
