"use client";

import React, { useState } from "react";
import { Clock, Check, Hourglass, Layers, Flame } from "lucide-react";
import { calcFinalOvenTime } from "../../../domain/portionCalcLogic";
import { SetData } from "../../../domain/portionCalcLogic";
import { FinalEstimation } from "../../../domain/portionCalcLogic";

interface EstimatorModalProps {
	onCancel: () => void;
	onEstimate: (data: EstimatorData) => void;
}

interface EstimatorData {
	unidades: number;
	unidadesPorTanda: number;
	numeroDeHornos: number;
	tiempoDeHorneado: number;
	tiempoDeManiobra: number;
}

export default function ProductionEstimatorModal({
	onCancel
}: Partial<EstimatorModalProps>) {
	// --- ESTADOS DE CONTROL (camelCase) ---
	const [formData, setFormData] = useState<EstimatorData>({
		unidades: 120,
		unidadesPorTanda: 20,
		numeroDeHornos: 2,
		tiempoDeHorneado: 10,
		tiempoDeManiobra: 20
	});

	const [resultado, setResultado] = useState<FinalEstimation | null>(null);

	const handleChange = (field: keyof EstimatorData, value: number) => {
		setFormData(prev => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const datos: SetData = {
			units: formData.unidades,
			unitsPerSet: formData.unidadesPorTanda,
			ovenTime: formData.tiempoDeHorneado,
			handlingTime: formData.tiempoDeManiobra,
			ovenNumber: formData.numeroDeHornos
		};

		const res: FinalEstimation = calcFinalOvenTime(datos);
		setResultado(res);
	};

	return (
		<div className="min-h-screen p-8 bg-background font-sans text-foreground antialiased flex items-center justify-center">
			<div className="w-full max-w-xl bg-card border-[1.5px] border-border rounded-xl shadow-sm p-6 md:p-8 transition-all space-y-6">
        
				{/* Encabezado */}
				<div className="flex items-start gap-3">
					<Clock className="w-7 h-7 text-[#8B6F4E]" strokeWidth={1.5} />
					<div>
						<h2 className="text-2xl font-semibold text-foreground tracking-tight">Estimador de tiempo</h2>
						<p className="text-sm text-muted-foreground mt-1">
							Calcula el tiempo de tu próximo ciclo de horneado
						</p>
					</div>
				</div>

				<hr className="border-border" />

				{/* Formulario */}
				<form onSubmit={handleSubmit} className="space-y-6">
          
					{/* Grid de 3 Columnas */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						<div>
							<label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
								Número de Unidades
							</label>
							<input
								type="number"
								value={formData.unidades === 0 ? "" : formData.unidades}
								onChange={(e) => handleChange("unidades", parseInt(e.target.value) || 0)}
								className="w-full h-10 px-3 bg-background border border-input rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#8B6F4E]/20 focus:border-[#8B6F4E] transition-all"
								placeholder="120"
							/>
						</div>

						<div>
							<label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
								Unidades por Tanda
							</label>
							<input
								type="number"
								value={formData.unidadesPorTanda === 0 ? "" : formData.unidadesPorTanda}
								onChange={(e) => handleChange("unidadesPorTanda", parseInt(e.target.value) || 0)}
								className="w-full h-10 px-3 bg-background border border-input rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#8B6F4E]/20 focus:border-[#8B6F4E] transition-all"
								placeholder="24"
							/>
						</div>

						<div>
							<label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
								Número de Hornos
							</label>
							<input
								type="number"
								value={formData.numeroDeHornos === 0 ? "" : formData.numeroDeHornos}
								onChange={(e) => handleChange("numeroDeHornos", parseInt(e.target.value) || 0)}
								className="w-full h-10 px-3 bg-background border border-input rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#8B6F4E]/20 focus:border-[#8B6F4E] transition-all"
								placeholder="2"
							/>
						</div>
					</div>

					{/* Grid de 2 Columnas */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
								Tiempo de Horneado
							</label>
							<input
								type="number"
								value={formData.tiempoDeHorneado === 0 ? "" : formData.tiempoDeHorneado}
								onChange={(e) => handleChange("tiempoDeHorneado", parseInt(e.target.value) || 0)}
								className="w-full h-10 px-3 bg-background border border-input rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#8B6F4E]/20 focus:border-[#8B6F4E] transition-all"
								placeholder="2"
							/>
						</div>

						<div>
							<label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
								Tiempo de maniobra
							</label>
							<input
								type="number"
								value={formData.tiempoDeManiobra === 0 ? "" : formData.tiempoDeManiobra}
								onChange={(e) => handleChange("tiempoDeManiobra", parseInt(e.target.value) || 0)}
								className="w-full h-10 px-3 bg-background border border-input rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#8B6F4E]/20 focus:border-[#8B6F4E] transition-all"
								placeholder="10"
							/>
						</div>
					</div>

					{/* Info Box */}
					<div className="w-full bg-[#FDF6EE] border border-border rounded-lg p-4 flex gap-3 items-start">
						<div className="text-[#8B6F4E] shrink-0 mt-0.5">
							<Check className="w-4 h-4" strokeWidth={2.5} />
						</div>
						<p className="text-xs text-muted-foreground leading-normal font-medium">
							La estimación toma en cuenta el uso de hornos en simultáneo.
						</p>
					</div>

					{/* Botones de Acción */}
					<div className="flex items-center justify-end gap-4 pt-2">
						<button
							type="button"
							onClick={onCancel}
							className="h-10 px-4 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
						>
							Cancelar
						</button>
						<button
							type="submit"
							className="h-10 bg-[#8B6F4E] hover:bg-[#7A5F42] active:scale-[0.98] text-white text-sm font-medium px-6 rounded-md transition-all shadow-sm"
						>
							Estimar tiempo
						</button>
					</div>
				</form>

				{/* Nueva Sección de Resultados Consolidada */}
				{resultado && (
					<div className="border-t border-border pt-6 space-y-4 animate-in fade-in duration-200">
						<div className="w-full bg-[#FDF6EE] border border-border rounded-xl p-4 flex justify-between items-center">
							<span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
								<Hourglass className="w-4 h-4 text-[#8B6F4E]" /> Tiempo Final Estimado:
							</span>
							<span className="text-lg font-bold text-[#8B6F4E]">
								{resultado.finalTimeMinutes} minutos
							</span>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
							<div className="bg-background border border-border rounded-lg p-3 flex flex-col gap-1">
								<span className="text-muted-foreground font-medium flex items-center gap-1.5">
									<Layers className="w-3.5 h-3.5 text-[#8B6F4E]" /> Tandas
								</span>
								<span className="text-sm font-semibold text-foreground">{resultado.setNumber}</span>
							</div>

							<div className="bg-background border border-border rounded-lg p-3 flex flex-col gap-1">
								<span className="text-muted-foreground font-medium flex items-center gap-1.5">
									<Clock className="w-3.5 h-3.5 text-[#8B6F4E]" /> Maniobra
								</span>
								<span className="text-sm font-semibold text-foreground">{resultado.totalHandlingTime} min</span>
							</div>

							<div className="bg-background border border-border rounded-lg p-3 flex flex-col gap-1">
								<span className="text-muted-foreground font-medium flex items-center gap-1.5">
									<Flame className="w-3.5 h-3.5 text-[#8B6F4E]" /> Horno
								</span>
								<span className="text-sm font-semibold text-foreground">{resultado.totalTimeOven} min</span>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
