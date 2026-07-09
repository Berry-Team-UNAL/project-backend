"use client";

import { useState, useEffect } from "react";
import { Scale, RotateCcw } from "lucide-react";
import { RecetaEscaladaResultado } from "../../../domain/data/sacaleLogic";

interface RecetaDesplegable {
	idComponente: number;
	nombre: string;
}

export default function EscaladorPanaderoPage() {
	// --- ESTADOS DE CONTROL (camelCase) ---
	const [recetas, setRecetas] = useState<RecetaDesplegable[]>([]);
	const [idSeleccionado, setIdSeleccionado] = useState<string>("");
	const [pesoObjetivo, setPesoObjetivo] = useState<string>("5000"); // 5kg por defecto
	const [resultado, setResultado] = useState<RecetaEscaladaResultado | null>(null);
	const [cargando, setCargando] = useState<boolean>(false);
	const [errorMsj, setErrorMsj] = useState<string | null>(null);

	// Cargar las recetas disponibles al montar el componente
	useEffect(() => {
		async function cargarCatalogo() {
			try {
				const res = await fetch("/api/scale1");
				if (!res.ok) { throw new Error("Error HTTP al obtener recetas"); }
				const data = await res.json();
				setRecetas(data);
				if (data.length > 0) { setIdSeleccionado(data[0].idComponente.toString()); }
			} catch (err) {
				setErrorMsj("No se pudo conectar con el catálogo de Docker.");
			}
		}
		cargarCatalogo();
	}, []);

	// Manejar el envío del formulario de cálculo
	const manejarCalcular = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!idSeleccionado || !pesoObjetivo) { return; }

		setCargando(true);
		setErrorMsj(null);

		try {
			const res = await fetch("/api/scale1/formulas", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					idComponente: Number(idSeleccionado),
					pesoTotalObjetivo: Number(pesoObjetivo)
				})
			});

			const data = await res.json();
			if (!res.ok) { throw new Error(data.error || "Error en el cálculo"); }

			setResultado(data);
		} catch (err: any) {
			setErrorMsj(err.message);
			setResultado(null);
		} finally {
			setCargando(false);
		}
	};

	return (
		<div className="min-h-screen p-8 bg-background font-sans text-foreground antialiased">
			<div className="max-w-4xl mx-auto">
				
				{/* Encabezado con Identidad del Sistema */}
				<div className="flex items-start justify-between mb-8">
					<div>
						<h1 className="text-3xl font-semibold text-foreground mb-2 flex items-center gap-3">
							<Scale className="w-7 h-7 text-[#8B6F4E]" strokeWidth={1.5} />
							Banneton Escalador
						</h1>
						<p className="text-sm text-muted-foreground">
							Calculadora Automatizada basada en Porcentaje Panadero Real
						</p>
					</div>
				</div>

				{errorMsj && (
					<div className="mb-6 p-4 border-[1.5px] border-[#D4816A] bg-[#D4816A]/5 text-[#D4816A] rounded-lg text-sm">
						{errorMsj}
					</div>
				)}

				{/* Contenedor del Formulario Tipo Card */}
				<div className="bg-card border-[1.5px] border-border rounded-xl p-6 shadow-sm mb-8">
					<form onSubmit={manejarCalcular} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
						<div>
							<label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
								Seleccionar Receta
							</label>
							<select
								value={idSeleccionado}
								onChange={(e) => setIdSeleccionado(e.target.value)}
								className="w-full h-10 px-3 bg-background border border-input rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#8B6F4E]/20 focus:border-[#8B6F4E] transition-all"
							>
								{recetas.length === 0 ? (
									<option>Cargando catálogo...</option>
								) : (
									recetas.map((r) => (
										<option key={r.idComponente} value={r.idComponente}>
											{r.nombre}
										</option>
									))
								)}
							</select>
						</div>

						<div>
							<label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
								Masa Total Objetivo (g)
							</label>
							<input
								type="number"
								value={pesoObjetivo}
								onChange={(e) => setPesoObjetivo(e.target.value)}
								placeholder="Ej: 5000"
								min="1"
								className="w-full h-10 px-3 bg-background border border-input rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#8B6F4E]/20 focus:border-[#8B6F4E] transition-all"
							/>
						</div>

						<div>
							<button
								type="submit"
								disabled={cargando || recetas.length === 0}
								className="w-full h-10 bg-[#8B6F4E] hover:bg-[#7A5F42] active:scale-[0.98] text-white text-sm font-medium rounded-md transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
							>
								<RotateCcw className="w-4 h-4" />
								{cargando ? "Computando..." : "Recalcular Masa"}
							</button>
						</div>
					</form>
				</div>

				{/* Resultados de la Fórmula Escalada */}
				{resultado && (
					<div className="bg-card border-[1.5px] border-border rounded-xl shadow-sm overflow-hidden">
						{/* Banner superior de la Card */}
						<div className="bg-[#FDF6EE] border-b border-border px-6 py-4 flex justify-between items-center">
							<span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
								Peso Total de Tanda Entregado
							</span>
							<span className="text-lg font-semibold text-[#8B6F4E]">
								{resultado.pesoTotalObjetivo} g
							</span>
						</div>

						{/* Tabla de Pesaje */}
						<div className="p-6">
							<h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
								Hoja de Pesaje para Báscula Digital
							</h3>
							<div className="overflow-hidden border border-border rounded-lg">
								<table className="min-w-full divide-y divide-border text-left text-sm">
									<thead className="bg-[#FDF6EE]/60 text-muted-foreground text-xs font-medium uppercase tracking-wider">
										<tr>
											<th className="px-6 py-3">Ingrediente Insumo</th>
											<th className="px-6 py-3 text-right">Porcentaje Panadero</th>
											<th className="px-6 py-3 text-right bg-[#FDF6EE] text-[#8B6F4E]">Nueva Cantidad Pesada</th>
										</tr>
									</thead>
									<tbody className="bg-background divide-y divide-border text-foreground">
										{resultado.ingredientes.map((ing) => (
											<tr key={ing.idDetalle} className="hover:bg-[#FDF6EE]/30 transition-colors">
												<td className="px-6 py-4 font-medium">{ing.nombre}</td>
												<td className="px-6 py-4 text-right text-muted-foreground">{ing.porcentajePanadero}%</td>
												<td className="px-6 py-4 text-right font-semibold text-[#8B6F4E] bg-[#FDF6EE]/20">
													{ing.cantidadNueva.toLocaleString()} {ing.unidad.toLowerCase()}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
