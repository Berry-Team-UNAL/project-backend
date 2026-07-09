import { PrismaClient } from "@prisma/client";
import { RegisterProductionReportCommand } from "@/domain/types/report";

const prisma = new PrismaClient();

export class RegisterProductionReportUseCase {
	async execute(command: RegisterProductionReportCommand) {
		const errors: Record<string, string> = {};

		// 1. Validaciones de Negocio previas
		if (!command.identificadorLote) {
			errors.identificadorLote = "El identificador de lote es obligatorio.";
		}
		if (!command.idReceta) {
			errors.idReceta = "Debe seleccionar una receta válida.";
		}
		if (!command.idResponsable) {
			errors.idResponsable = "Debe asignar un responsable.";
		}

		if (Object.keys(errors).length > 0) {
			return { errors };
		}

		try {
			// 2. Ejecutar inserción atómica y transaccional
			const nuevoReporte = await prisma.$transaction(async (tx) => {
				// Crear el reporte base
				const reporte = await tx.reporte_produccion.create({
					data: {
						identificador_lote: command.identificadorLote,
						id_receta: command.idReceta,
						fecha_produccion: new Date(command.fechaProduccion),
						// Prisma requiere un objeto Date para campos de hora, mapeamos la string "HH:MM"
						hora_produccion: new Date(`1970-01-01T${command.horaProduccion}:00`),
						cantidad_producida: command.cantidadProducida,
						unidad_medida: command.unidadMedida,
						id_responsable: command.idResponsable,
						id_supervisor: command.idSupervisor || null,
						observaciones: command.observaciones || null,
					},
				});

				// Si el formulario incluyó tandas dinámicas, las guardamos en lote vinculadas al reporte creado
				if (command.tandas && command.tandas.length > 0) {
					await tx.tanda_produccion.createMany({
						data: command.tandas.map((tanda) => ({
							id_reporte: reporte.id_reporte,
							numero_tanda: tanda.numeroTanda,
							cantidad: tanda.cantidad,
						})),
					});
				}

				return reporte;
			});

			return { report: nuevoReporte };
		} catch (error: any) {
			console.error("Error en transacción de reporte de producción:", error);
			
			// Manejo de lote duplicado (P2002 es el código de restricción única en Prisma)
			if (error.code === "P2002") {
				return {
					errors: {
						identificadorLote: "El identificador de lote ya existe en el sistema.",
					},
				};
			}

			return {
				errors: {
					general: "Ocurrió un error inesperado al persistir el reporte de producción.",
				},
			};
		}
	}
}
