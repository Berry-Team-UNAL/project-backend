import { NextResponse } from "next/server";
import { formatLoteIdentifier } from "@/utils/reportUtils";

// GET /api/produccion/lote-sugerido — Identificador de lote sugerido (RF_16).
// NOTA: Sin persistencia. Secuencia simulada con timestamp.
export async function GET() {
	try {
		const now = new Date();
		const sequence = Math.floor(Date.now() / 1000) % 10000 + 1;
		return NextResponse.json({ ok: true, data: { identificadorLote: formatLoteIdentifier(sequence, now) } });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ ok: false, error: "Error al calcular el identificador de lote sugerido" },
			{ status: 500 },
		);
	}
}
