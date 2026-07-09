import React, { useState } from "react";
import { Info } from "lucide-react";

interface AgregarInsumoFormProps {
  disponibles: any[];
  onAgregar: (datos: { id_componente: number; cantidad: number; unidad: string; aportaABase: boolean }) => void;
  onCancelar: () => void;
}

export function AgregarInsumoForm({ disponibles, onAgregar, onCancelar }: AgregarInsumoFormProps) {
	const [idComponente, setIdComponente] = useState<number>(0);
	const [cantidad, setCantidad] = useState<number>(0);
	const [unidad, setUnidad] = useState<string>("grams");
	const [aportaABase, setAportaABase] = useState<boolean>(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (idComponente === 0) {return alert("Selecciona un insumo");}
		onAgregar({ id_componente: idComponente, cantidad, unidad, aportaABase });
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label className="block text-sm font-medium mb-1">Insumo a inyectar</label>
				<select required className="w-full p-2 border border-input rounded-md bg-background"
					value={idComponente} onChange={(e) => setIdComponente(parseInt(e.target.value))}
				>
					<option value={0} disabled>-- Selecciona un Insumo --</option>
					{disponibles.map(c => (
						<option key={c.id_componente} value={c.id_componente}>{c.tipo_componente} | {c.nombre}</option>
					))}
				</select>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div>
					<label className="block text-sm font-medium mb-1">Cantidad</label>
					<input required type="number" min="0.01" step="0.01" className="w-full p-2 border border-input rounded-md bg-background"
						value={cantidad} onChange={(e) => setCantidad(parseFloat(e.target.value) || 0)}
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">Unidad</label>
					<select required className="w-full p-2 border border-input rounded-md bg-background"
						value={unidad} onChange={(e) => setUnidad(e.target.value)}
					>
						<option value="grams">Gramos (g)</option>
						<option value="percentage">% Panadero</option>
					</select>
				</div>
			</div>

			<div className="flex flex-col gap-1.5 p-3 rounded-md bg-muted/50 border border-border mt-2">
				<label className="flex items-center gap-3 cursor-pointer">
					<input type="checkbox" checked={aportaABase} onChange={(e) => setAportaABase(e.target.checked)}
						className="w-4 h-4 rounded border-primary text-primary focus:ring-primary"
					/>
					<span className="text-sm font-semibold select-none">¿Aporta a la base panadera?</span>
				</label>
				<p className="text-xs text-muted-foreground flex items-start gap-1 ml-7">
					<Info className="w-3.5 h-3.5 mt-0.5 inline shrink-0" />
          Márcalo si es la harina principal o el ingrediente que equivale al 100%.
				</p>
			</div>

			<div className="flex justify-end gap-3 pt-4 border-t border-border mt-4">
				<button type="button" onClick={onCancelar} className="px-4 py-2 border border-input rounded-lg hover:bg-muted">Cancelar</button>
				<button type="submit" className="px-4 py-2 bg-secondary text-secondary-foreground font-bold rounded-lg shadow">Añadir Insumo</button>
			</div>
		</form>
	);
}
