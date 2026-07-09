"use client";

import { useState, useEffect } from "react";

// ==========================================
// INTERFACES (Tipado TypeScript 5)
// ==========================================
interface ComponenteCatalogo {
	id_componente: number;
	nombre: string;
	tipo_componente: string;
	unidad_medida: string;
}

interface PasoReceta {
	id_detalle: number;
	cantidad_usada: string;
	nota_preparacion?: string;
	catalogo_componente: ComponenteCatalogo;
}

interface RecetaCompleta {
	id_componente: number;
	unidades_tanda: number;
	catalogo_componente: ComponenteCatalogo;
	detalle_formulacion: PasoReceta[];
}

// ==========================================
// COMPONENTE PRINCIPAL (EXPORT DEFAULT ÚNICO)
// ==========================================
export default function RecetasPage() {
	const [recetasDB, setRecetasDB] = useState<any[]>([]);
	const [idRecetaSeleccionada, setIdRecetaSeleccionada] = useState<number | null>(null);
	const [pasosCompletados, setPasosCompletados] = useState<Record<number, boolean>>({});
	const [datosReceta, setDatosReceta] = useState<RecetaCompleta | null>(null);
	const [cargando, setCargando] = useState(true);

	const storageKey = idRecetaSeleccionada ? `banneton_taller_receta_${idRecetaSeleccionada}` : "";

	// Efecto 1: Cargar la lista del catálogo principal
	useEffect(() => {
		async function obtenerRecetas() {
			try {
				const res = await fetch("/api/recetas");
				if (res.ok) {
					const data = await res.json();
					setRecetasDB(data);
				}
			} catch (error) {
				console.error("Error al sincronizar con el catálogo:", error);
			} finally {
				setCargando(false);
			}
		}
		
		if (idRecetaSeleccionada === null) {
			obtenerRecetas();
		}
	}, [idRecetaSeleccionada]);

	// Efecto 2: Cargar el detalle cuando se entra al Modo Taller
	useEffect(() => {
		if (!idRecetaSeleccionada) {
			return;
		}

		async function cargarDetalle() {
			setCargando(true);
			try {
				const res = await fetch(`/api/check?id=${idRecetaSeleccionada}`);
				if (res.ok) {
					const data = await res.json();
					setDatosReceta(data);

					const guardado = localStorage.getItem(storageKey);
					if (guardado) {
						setPasosCompletados(JSON.parse(guardado));
					} else {
						setPasosCompletados({});
					}
				}
			} catch (err) {
				console.error("Error en la línea de producción:", err);
			} finally {
				setCargando(false);
			}
		}
		cargarDetalle();
	}, [idRecetaSeleccionada, storageKey]);

	// Manejadores de Estado del Taller
	const togglePaso = (idDetalle: number) => {
		const nuevoEstado = {
			...pasosCompletados,
			[idDetalle]: !pasosCompletados[idDetalle]
		};
		setPasosCompletados(nuevoEstado);
		localStorage.setItem(storageKey, JSON.stringify(nuevoEstado));
	};

	const finalizarTaller = () => {
		if (storageKey) {
			localStorage.removeItem(storageKey);
		}
		setPasosCompletados({});
		setDatosReceta(null);
		setIdRecetaSeleccionada(null);
	};

	// Lógica de Renderizado Condicional de Vistas
	if (idRecetaSeleccionada !== null && datosReceta) {
		const totalPasos = datosReceta.detalle_formulacion?.length || 0;
		const pasosHechos = Object.values(pasosCompletados).filter(Boolean).length;
		const porcentajeProgreso = totalPasos > 0 ? Math.round((pasosHechos / totalPasos) * 100) : 0;

		return (
			<div className="p-6 max-w-4xl mx-auto bg-stone-50 rounded-xl border border-stone-200 shadow-sm">
				{/* Encabezado con Botón Oscuro Contraste Total */}
				<div className="flex justify-between items-center mb-4 border-b border-stone-200 pb-4">
					<div>
						<span className="text-xs font-bold text-amber-700 tracking-wider uppercase">Modo Taller</span>
						<h2 className="text-2xl font-bold text-stone-900">{datosReceta.catalogo_componente.nombre}</h2>
					</div>
					<button
						onClick={() => { localStorage.removeItem(storageKey); setPasosCompletados({}); setIdRecetaSeleccionada(null); }}
						className="px-6 py-2.5 bg-amber-900 hover:bg-amber-950 text-black rounded-full transition-all font-bold text-sm shadow-md active:scale-95 border border-amber-900"					>
						Finalizar Receta
					</button>
				</div>

				{/* Barra de Progreso */}
				<div className="mb-6 bg-stone-200/60 p-4 rounded-xl border border-stone-200">
					<div className="flex justify-between items-center mb-1.5">
						<span className="text-xs font-bold text-stone-600 uppercase tracking-wide">Progreso del Lote</span>
						<span className="text-sm font-bold text-amber-800">{porcentajeProgreso}%</span>
					</div>
					<div className="w-full bg-stone-200 rounded-full h-3 overflow-hidden border border-stone-300/40">
						<div
							className="bg-amber-600 h-3 rounded-full transition-all duration-300 ease-out"
							style={{ width: `${porcentajeProgreso}%` }}
						/>
					</div>
				</div>

				{/* Lista de Ingredientes */}
				<div className="space-y-3">
					{datosReceta.detalle_formulacion?.map((paso) => (
						<label
							key={paso.id_detalle}
							className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
								pasosCompletados[paso.id_detalle]
									? "bg-stone-200/60 border-stone-300 opacity-60 select-none"
									: "bg-white border-stone-200 hover:border-amber-300 hover:shadow-sm"
							}`}
						>
							<input
								type="checkbox"
								checked={!!pasosCompletados[paso.id_detalle]}
								onChange={() => togglePaso(paso.id_detalle)}
								className="mt-1 h-5 w-5 rounded border-stone-300 text-amber-800 focus:ring-amber-600 transition-colors"
							/>
							<div className="flex-1">
								<p className={`text-base font-medium ${pasosCompletados[paso.id_detalle] ? "line-through text-stone-500" : "text-stone-800"}`}>
									{paso.catalogo_componente.nombre} — <span className="font-bold">{paso.cantidad_usada}</span> {paso.catalogo_componente.unidad_medida}
								</p>
								{paso.nota_preparacion && (
									<p className="text-xs text-stone-500 italic mt-0.5">
										📝 {paso.nota_preparacion}
									</p>
								)}
							</div>
						</label>
					))}
				</div>
			</div>
		);
	}

	// Vista Principal: Catálogo de Selección
	return (
		<div className="p-6 max-w-7xl mx-auto">
			<div className="mb-6">
				<h1 className="text-2xl font-bold text-stone-900">📖 Fichas Técnicas</h1>
				<p className="text-sm text-stone-500">Selecciona una receta activa para iniciar la preparación en planta</p>
			</div>

			<div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
				<table className="w-full text-left border-collapse">
					<thead>
						<tr className="bg-stone-50/70 text-xs font-bold text-stone-500 uppercase tracking-wider border-b border-stone-200">
							<th className="p-4">Nombre de Ficha</th>
							<th className="p-4">Tipo</th>
							<th className="p-4">Unidades x Tanda</th>
							<th className="p-4 text-center">Acciones</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-stone-100 text-sm">
						{cargando && recetasDB.length === 0 ? (
							<tr>
								<td colSpan={4} className="p-8 text-center text-stone-500 italic">
									Sincronizando con Supabase...
								</td>
							</tr>
						) : recetasDB.map((item) => (
							<tr key={item.id_componente} className="hover:bg-stone-50/40 transition-colors">
								<td className="p-4 font-semibold text-stone-900">{item.nombre}</td>
								<td className="p-4">
									<span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded text-xs font-bold tracking-wide">
										{item.tipo_componente}
									</span>
								</td>
								<td className="p-4 text-stone-600">
									{item.receta_subreceta?.unidades_tanda ?? 1}
								</td>
								<td className="p-4 text-center">
									<button
										onClick={() => setIdRecetaSeleccionada(item.id_componente)}
										title="Iniciar Checklist"
										className="inline-flex items-center justify-center w-10 h-10 bg-amber-50 text-amber-700 hover:bg-amber-600 hover:text-white rounded-full transition-all border border-amber-200 shadow-sm font-medium text-base"
									>
										⚡
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
