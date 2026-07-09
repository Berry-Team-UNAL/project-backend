"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Loader2, Beaker, Droplets, Flame, Package } from "lucide-react";

interface Ingredient {
  id_componente?: number;
  nombre: string;
  tipo_componente: string;
  unidad_medida: string;
  costo_por_gramo: number;
  porcentaje_humedad: number;
  porcentaje_grasa: number;
  porcentaje_merma: number;
}

export default function IngredientsPage() {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [loading, setLoading] = useState(true);
  
	// Estados para el Modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingId, setEditingId] = useState<number | null>(null); // Nulo = Crear, Número = Editar
  
	const [formData, setFormData] = useState<Ingredient>({
		nombre: "",
		tipo_componente: "SECO",
		unidad_medida: "KG",
		costo_por_gramo: 0,
		porcentaje_humedad: 0,
		porcentaje_grasa: 0,
		porcentaje_merma: 0,
	});

	useEffect(() => {
		fetchIngredients();
	}, []);

	const fetchIngredients = async () => {
		try {
			setLoading(true);
			const res = await fetch("/api/ingredients");
			if (!res.ok) {throw new Error("Error al obtener ingredientes");}
			const data = await res.json();
			setIngredients(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	// ==========================================
	// FUNCIÓN PARA GUARDAR O ACTUALIZAR
	// ==========================================
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			// Decidimos la ruta y el método dependiendo de si estamos editando
			const url = editingId ? `/api/ingredients/${editingId}` : "/api/ingredients";
			const method = editingId ? "PUT" : "POST";

			const res = await fetch(url, {
				method,
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (res.ok) {
				closeModal();
				fetchIngredients();
			} else {
				const errorData = await res.json();
				alert(errorData.error || "Ocurrió un error inesperado al guardar.");
			}
		} catch (error) {
			console.error(error);
		}
	};

	// ==========================================
	// FUNCIÓN PARA ELIMINAR (Desactivar)
	// ==========================================
	const handleDelete = async (id: number, nombre: string) => {
		const confirmar = window.confirm(`¿Estás seguro de que deseas eliminar '${nombre}'?`);
		if (!confirmar) {return;}

		try {
			const res = await fetch(`/api/ingredients/${id}`, {
				method: "DELETE",
			});

			if (res.ok) {
				fetchIngredients();
			} else {
				const errorData = await res.json();
				alert(errorData.error || "Error al eliminar");
			}
		} catch (error) {
			console.error(error);
		}
	};

	// ==========================================
	// MANEJO DEL MODAL
	// ==========================================
	const openEditModal = (item: Ingredient) => {
		setEditingId(item.id_componente || null);
		setFormData({
			nombre: item.nombre,
			tipo_componente: item.tipo_componente,
			unidad_medida: item.unidad_medida,
			costo_por_gramo: item.costo_por_gramo,
			porcentaje_humedad: item.porcentaje_humedad,
			porcentaje_grasa: item.porcentaje_grasa,
			porcentaje_merma: item.porcentaje_merma,
		});
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setEditingId(null);
		setFormData({ nombre: "", tipo_componente: "SECO", unidad_medida: "KG", costo_por_gramo: 0, porcentaje_humedad: 0, porcentaje_grasa: 0, porcentaje_merma: 0 });
	};

	const getIcon = (tipo: string) => {
		switch (tipo) {
			case "LIQUIDO": return <Droplets className="w-4 h-4 text-blue-500" />;
			case "GRASA": return <Flame className="w-4 h-4 text-yellow-500" />;
			case "LEVADURA": return <Beaker className="w-4 h-4 text-green-500" />;
			default: return <Package className="w-4 h-4 text-primary" />;
		}
	};

	return (
		<div className="min-h-screen bg-background p-8 font-sans text-foreground">
			<div className="max-w-7xl mx-auto space-y-8">
        
				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-3xl font-bold text-primary">Catálogo de Ingredientes</h1>
						<p className="text-secondary-foreground opacity-80 mt-1">
              Gestiona costos, hidratación, grasa y merma de insumos
						</p>
					</div>
					<button 
						onClick={() => { setEditingId(null); setIsModalOpen(true); }}
						className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all shadow-md"
					>
						<Plus className="w-5 h-5" /> Nuevo Ingrediente
					</button>
				</div>

				<div className="bg-card rounded-xl shadow-sm border border-border overflow-x-auto">
					{loading ? (
						<div className="flex justify-center items-center h-64">
							<Loader2 className="w-8 h-8 animate-spin text-primary" />
						</div>
					) : ingredients.length === 0 ? (
						<div className="text-center p-12 text-muted-foreground">
							<Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
							<p>No hay ingredientes registrados.</p>
						</div>
					) : (
						<table className="w-full text-left border-collapse whitespace-nowrap">
							<thead>
								<tr className="bg-muted text-muted-foreground text-xs uppercase tracking-wider">
									<th className="p-4 border-b font-medium">Ingrediente</th>
									<th className="p-4 border-b font-medium">Tipo</th>
									<th className="p-4 border-b font-medium text-right text-primary">Costo/g</th>
									<th className="p-4 border-b font-medium text-right text-primary">Costo/Libra</th>
									<th className="p-4 border-b font-medium text-right text-primary">Costo/Kilo</th>
									<th className="p-4 border-b font-medium text-center">Hum %</th>
									<th className="p-4 border-b font-medium text-center">Grasa %</th>
									<th className="p-4 border-b font-medium text-center">Merma %</th>
									<th className="p-4 border-b font-medium text-center">Acciones</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-border text-sm">
								{ingredients.map((item, idx) => (
									<tr key={idx} className="hover:bg-muted/30 transition-colors">
										<td className="p-4 font-medium flex items-center gap-3">
											{getIcon(item.tipo_componente)} {item.nombre}
										</td>
										<td className="p-4">
											<span className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs font-semibold">
												{item.tipo_componente}
											</span>
										</td>
										<td className="p-4 text-right font-bold">${item.costo_por_gramo || 0}</td>
										<td className="p-4 text-right">${((item.costo_por_gramo || 0) * 500).toLocaleString("es-CO")}</td>
										<td className="p-4 text-right">${((item.costo_por_gramo || 0) * 1000).toLocaleString("es-CO")}</td>
										<td className="p-4 text-center">{item.porcentaje_humedad || 0}%</td>
										<td className="p-4 text-center">{item.porcentaje_grasa || 0}%</td>
										<td className="p-4 text-center">{item.porcentaje_merma || 0}%</td>
										<td className="p-4 flex justify-center gap-2">
											<button 
												onClick={() => openEditModal(item)}
												className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
												title="Editar ingrediente"
											>
												<Edit2 className="w-4 h-4" />
											</button>
											<button 
												onClick={() => item.id_componente && handleDelete(item.id_componente, item.nombre)}
												className="p-2 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
												title="Eliminar ingrediente"
											>
												<Trash2 className="w-4 h-4" />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>

			{isModalOpen && (
				<div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm p-4">
					<div className="bg-card w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-border">
						<div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
							{/* Cambiamos el título si estamos editando o creando */}
							<h2 className="text-xl font-bold">
								{editingId ? "Editar Ingrediente" : "Registrar Ingrediente"}
							</h2>
							<button onClick={closeModal} className="text-white hover:text-gray-200 font-bold text-xl">&times;</button>
						</div>
            
						<form onSubmit={handleSubmit} className="p-6 space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="col-span-1 md:col-span-2">
									<label className="block text-sm font-medium mb-1">Nombre del Insumo</label>
									<input 
										required 
										type="text" 
										className="w-full p-2 border border-input rounded-md bg-background"
										value={formData.nombre}
										onChange={(e) => setFormData({...formData, nombre: e.target.value})}
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-1">Tipo de Componente</label>
									<select 
										className="w-full p-2 border border-input rounded-md bg-background"
										value={formData.tipo_componente}
										onChange={(e) => setFormData({...formData, tipo_componente: e.target.value})}
									>
										<option value="SECO">Seco</option>
										<option value="LIQUIDO">Líquido</option>
										<option value="GRASA">Grasa</option>
										<option value="LEVADURA">Levadura</option>
										<option value="OTROS">Otros</option>
									</select>
								</div>


								<div>
									<label className="block text-sm font-medium mb-1 text-primary">Costo por Gramo ($)</label>
									<input 
										type="number" step="0.0001" required min="0"
										className="w-full p-2 border border-input rounded-md bg-background"
										value={formData.costo_por_gramo}
										onChange={(e) => setFormData({...formData, costo_por_gramo: parseFloat(e.target.value) || 0})}
									/>
								</div>
                
								<div>
									<label className="block text-sm font-medium mb-1">Merma (%)</label>
									<input 
										type="number" max="99" min="0" step="0.1" required
										className="w-full p-2 border border-input rounded-md bg-background"
										value={formData.porcentaje_merma}
										onChange={(e) => setFormData({...formData, porcentaje_merma: parseFloat(e.target.value) || 0})}
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-1">Humedad (%)</label>
									<input 
										type="number" max="100" min="0" step="0.1" required
										className="w-full p-2 border border-input rounded-md bg-background"
										value={formData.porcentaje_humedad}
										onChange={(e) => setFormData({...formData, porcentaje_humedad: parseFloat(e.target.value) || 0})}
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-1">Grasa (%)</label>
									<input 
										type="number" max="100" min="0" step="0.1" required
										className="w-full p-2 border border-input rounded-md bg-background"
										value={formData.porcentaje_grasa}
										onChange={(e) => setFormData({...formData, porcentaje_grasa: parseFloat(e.target.value) || 0})}
									/>
								</div>
							</div>

							<div className="flex justify-end gap-3 pt-4 border-t border-border">
								<button 
									type="button" 
									onClick={closeModal}
									className="px-4 py-2 border border-input text-foreground rounded-lg hover:bg-muted"
								>
                  Cancelar
								</button>
								<button 
									type="submit" 
									className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 font-medium"
								>
									{editingId ? "Actualizar Ingrediente" : "Guardar Ingrediente"}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
