import { NextRequest, NextResponse } from "next/server";
import { RegisterProductionReportUseCase } from "@/services/report/RegisterProductionReport.usecase";
import { ListProductionReportsUseCase } from "@/services/report/ListProductionReports.usecase";
import { RegisterProductionReportCommand } from "@/domain/types/report";

// GET /api/produccion/reportes — Historial de producción (Ya funcionando)
export async function GET() {
	try {
		const reports = await new ListProductionReportsUseCase().execute();
		return NextResponse.json({ ok: true, data: reports });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ ok: false, error: "Error al obtener el historial de producción" },
			{ status: 500 },
		);
	}
}

// POST /api/produccion/reportes — ¡Aquí estaba el cuello de botella! Liberando el método de guardado
export async function POST(request: NextRequest) {
	try {
		const body = (await request.json()) as RegisterProductionReportCommand;

		// Despachamos el comando al caso de uso transaccional que creamos en el sprint anterior
		const result = await new RegisterProductionReportUseCase().execute(body);

		// Si el caso de uso devuelve errores de validación de negocio o lote duplicado
		if (result.errors) {
			return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });
		}

		// ¡Éxito de producción! Retornamos un HTTP 201 Created con el reporte persistido
		return NextResponse.json({ ok: true, data: result.report }, { status: 201 });
	} catch (error) {
		console.error("Fallo crítico en el endpoint POST de reportes:", error);
		return NextResponse.json(
			{ ok: false, error: "Error interno al procesar el reporte de producción" },
			{ status: 500 },
		);
	}
}
