"use client";

import React, { useState, useEffect } from "react";
import { Plus, BookOpen, Loader2, PackagePlus, ArrowRight, Eye, ChefHat, Edit2, Trash2 } from "lucide-react";

interface Recipe {
  id_componente: number;
  nombre: string;
  tipo_componente: string;
  unidades_tanda: number;
}

interface AvailableComponent {
  id_componente: number;
  nombre: string;
  tipo_componente: string;
}

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [availableComponents, setAvailableComponents] = useState<AvailableComponent[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Estados para Modal de Crear/Editar Receta
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [editingRecipeId, setEditingRecipeId] = useState<number | null>(null);
  const [recipeForm, setRecipeForm] = useState({
    nombre: "",
    tipo: "RECETA",
    peso_unidad: 0,
    unidades_tanda: 1,
    creador_id: "user_123"
  });

  // Estados para Modal de Agregar Insumo
  const [isComponentModalOpen, setIsComponentModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [componentForm, setComponentForm] = useState({ childComponentId: 0, quantity: 0, unit: "grams" });

  // Estados para Ficha Técnica
  const [isFichaModalOpen, setIsFichaModalOpen] = useState(false);
  const [fichaData, setFichaData] = useState<any>(null);
  const [loadingFicha, setLoadingFicha] = useState(false);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const [resRecipes, resIngredients] = await Promise.all([
        fetch("/api/recipes"),
        fetch("/api/ingredients")
      ]);

      const dataRecipes = await resRecipes.json();
      const dataIngredients = await resIngredients.json();

      setRecipes(dataRecipes);
      const soloIngredientes = dataIngredients.filter(
        (item: any) => item.tipo_componente !== "RECETA" && item.tipo_componente !== "SUBRECETA"
      );
      setAvailableComponents([...soloIngredientes, ...dataRecipes]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // CREAR O ACTUALIZAR RECETA
  // ==========================================
  const handleSaveRecipe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingRecipeId ? `/api/recipes/${editingRecipeId}` : "/api/recipes";
      const method = editingRecipeId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipeForm),
      });

      if (res.ok) {
        setIsRecipeModalOpen(false);
        fetchInitialData();
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openCreateModal = () => {
    setEditingRecipeId(null);
    setRecipeForm({ nombre: "", tipo: "RECETA", peso_unidad: 0, unidades_tanda: 1, creador_id: "user_123" });
    setIsRecipeModalOpen(true);
  };

  const openEditModal = async (recipe: Recipe) => {
    // Al editar, buscamos el ppu_objetivo real (peso) haciendo un GET rápido
    const res = await fetch(`/api/recipes/${recipe.id_componente}`);
    const data = await res.json();

    setEditingRecipeId(recipe.id_componente);
    setRecipeForm({
      nombre: recipe.nombre,
      tipo: recipe.tipo_componente,
      peso_unidad: data.ppu_objetivo || 0,
      unidades_tanda: recipe.unidades_tanda,
      creador_id: "user_123"
    });
    setIsRecipeModalOpen(true);
  };

  // ==========================================
  // ELIMINAR RECETA
  // ==========================================
  const handleDeleteRecipe = async (id: number, nombre: string) => {
    if (!window.confirm(`¿Seguro que deseas eliminar la receta '${nombre}'?`)) return;

    try {
      const res = await fetch(`/api/recipes/${id}`, { method: "DELETE" });
      if (res.ok) fetchInitialData();
      else alert("Error al eliminar la receta");
    } catch (error) {
      console.error(error);
    }
  };

  // ==========================================
  // GESTIÓN DE COMPONENTES E INSUMOS
  // ==========================================
  const handleAddComponent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRecipe) return;

    try {
      const res = await fetch(`/api/recipes/${selectedRecipe.id_componente}/components`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          childComponentId: Number(componentForm.childComponentId),
          quantity: Number(componentForm.quantity),
          unit: componentForm.unit
        }),
      });

      if (res.ok) {
        setIsComponentModalOpen(false);
        setComponentForm({ childComponentId: 0, quantity: 0, unit: "grams" });
        alert("Insumo agregado.");
      } else {
        const errorData = await res.json();
        alert(`Alerta del Sistema Experto:\n${errorData.error}`); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveComponent = async (parentId: number, childId: number, childName: string) => {
    if (!window.confirm(`¿Remover '${childName}' de la receta?`)) return;

    try {
      const res = await fetch(`/api/recipes/${parentId}/components/${childId}`, { method: "DELETE" });
      if (res.ok) {
        // Recargar la ficha técnica para que se actualice la tablita
        handleVerFicha(parentId); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerFicha = async (id: number) => {
    try {
      setIsFichaModalOpen(true);
      setLoadingFicha(true);
      const res = await fetch(`/api/recipes/${id}`);
      if (!res.ok) throw new Error("Error");
      const data = await res.json();
      setFichaData(data);
    } catch (error) {
      alert("Ocurrió un error al cargar la ficha");
      setIsFichaModalOpen(false);
    } finally {
      setLoadingFicha(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8 font-sans text-foreground">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary flex items-center gap-3">
              <BookOpen className="w-8 h-8" /> Fichas Técnicas
            </h1>
            <p className="text-secondary-foreground opacity-80 mt-1">Crea recetas base, subrecetas y formula insumos</p>
          </div>
          <button onClick={openCreateModal} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-opacity-90 shadow-md">
            <Plus className="w-5 h-5" /> Nueva Receta
          </button>
        </div>

        <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center h-64"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
          ) : recipes.length === 0 ? (
            <div className="text-center p-12 text-muted-foreground"><BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" /><p>No hay recetas.</p></div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted text-muted-foreground text-xs uppercase tracking-wider">
                  <th className="p-4 border-b font-medium">Nombre de Ficha</th>
                  <th className="p-4 border-b font-medium">Tipo</th>
                  <th className="p-4 border-b font-medium text-center">Unidades x Tanda</th>
                  <th className="p-4 border-b font-medium text-center">Formulación</th>
                  <th className="p-4 border-b font-medium text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {recipes.map((item) => (
                  <tr key={item.id_componente} className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-bold text-primary text-base">{item.nombre}</td>
                    <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.tipo_componente === 'RECETA' ? 'bg-primary/20 text-primary' : 'bg-secondary/30 text-secondary-foreground'}`}>{item.tipo_componente}</span></td>
                    <td className="p-4 text-center font-medium">{item.unidades_tanda}</td>
                    <td className="p-4 flex justify-center gap-2">
                      <button onClick={() => handleVerFicha(item.id_componente)} className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded hover:bg-primary/20 shadow-sm font-medium text-xs"><Eye className="w-4 h-4" /> Ver Ficha</button>
                      <button onClick={() => { setSelectedRecipe(item); setIsComponentModalOpen(true); }} className="flex items-center gap-2 px-3 py-1.5 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 shadow-sm font-medium text-xs"><PackagePlus className="w-4 h-4" /> Agregar</button>
                    </td>
                    <td className="p-4 text-center">
                      <button onClick={() => openEditModal(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors mr-2"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleDeleteRecipe(item.id_componente, item.nombre)} className="p-2 text-destructive hover:bg-destructive/10 rounded-md transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* MODAL 1: RECETA */}
      {isRecipeModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm p-4">
          <div className="bg-card w-full max-w-md rounded-xl shadow-2xl overflow-hidden border border-border">
            <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
              <h2 className="text-lg font-bold">{editingRecipeId ? "Editar Receta" : "Nueva Receta"}</h2>
              <button onClick={() => setIsRecipeModalOpen(false)} className="text-white hover:text-gray-200 font-bold text-xl">&times;</button>
            </div>
            <form onSubmit={handleSaveRecipe} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input required type="text" className="w-full p-2 border border-input rounded-md" value={recipeForm.nombre} onChange={(e) => setRecipeForm({...recipeForm, nombre: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tipo</label>
                <select className="w-full p-2 border border-input rounded-md" value={recipeForm.tipo} onChange={(e) => setRecipeForm({...recipeForm, tipo: e.target.value})}>
                  <option value="RECETA">Receta Final</option>
                  <option value="SUBRECETA">Subreceta</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Peso Objetivo (g)</label>
                <input required type="number" min="0.1" step="0.1" className="w-full p-2 border border-input rounded-md" value={recipeForm.peso_unidad} onChange={(e) => setRecipeForm({...recipeForm, peso_unidad: parseFloat(e.target.value) || 0})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Unidades/Tanda</label>
                <input required type="number" min="1" className="w-full p-2 border border-input rounded-md" value={recipeForm.unidades_tanda} onChange={(e) => setRecipeForm({...recipeForm, unidades_tanda: parseInt(e.target.value) || 1})} />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border mt-4">
                <button type="button" onClick={() => setIsRecipeModalOpen(false)} className="px-4 py-2 border border-input rounded-lg">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">{editingRecipeId ? "Actualizar" : "Guardar"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: INYECTAR INSUMO */}
      {isComponentModalOpen && selectedRecipe && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm p-4">
          <div className="bg-card w-full max-w-lg rounded-xl shadow-2xl overflow-hidden border border-border">
            <div className="bg-secondary p-4 text-secondary-foreground flex justify-between items-center border-b border-border">
              <h2 className="text-lg font-bold flex items-center gap-2"><PackagePlus className="w-5 h-5" /> Inyectar a {selectedRecipe.nombre}</h2>
              <button onClick={() => setIsComponentModalOpen(false)} className="text-black font-bold text-xl">&times;</button>
            </div>
            <form onSubmit={handleAddComponent} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Insumo</label>
                <select required className="w-full p-2 border border-input rounded-md" value={componentForm.childComponentId} onChange={(e) => setComponentForm({...componentForm, childComponentId: parseInt(e.target.value)})}>
                  <option value="0" disabled>-- Selecciona un Insumo --</option>
                  {availableComponents.map(c => <option key={c.id_componente} value={c.id_componente}>{c.tipo_componente} | {c.nombre}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Cantidad</label>
                  <input required type="number" min="0.01" step="0.01" className="w-full p-2 border border-input rounded-md" value={componentForm.quantity} onChange={(e) => setComponentForm({...componentForm, quantity: parseFloat(e.target.value) || 0})} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Unidad</label>
                  <select required className="w-full p-2 border border-input rounded-md" value={componentForm.unit} onChange={(e) => setComponentForm({...componentForm, unit: e.target.value})}>
                    <option value="grams">Gramos (g)</option>
                    <option value="percentage">% Panadero</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border mt-4">
                <button type="submit" className="px-4 py-2 bg-secondary text-secondary-foreground font-bold rounded-lg flex items-center gap-2">Añadir <ArrowRight className="w-4 h-4" /></button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: FICHA TÉCNICA */}
      {isFichaModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm p-4">
          <div className="bg-card w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden border border-border flex flex-col max-h-[90vh]">
            <div className="bg-primary p-5 text-primary-foreground flex justify-between items-center">
              <h2 className="text-2xl font-bold flex items-center gap-3"><ChefHat className="w-6 h-6" /> {loadingFicha ? "Cargando..." : fichaData?.nombre}</h2>
              <button onClick={() => setIsFichaModalOpen(false)} className="text-white hover:text-gray-200 font-bold text-2xl">&times;</button>
            </div>
            <div className="p-6 overflow-y-auto">
              {loadingFicha ? (
                <div className="flex justify-center items-center h-40"><Loader2 className="w-10 h-10 animate-spin text-primary" /></div>
              ) : fichaData ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 bg-muted/50 p-4 rounded-lg border border-border">
                    <div><p className="text-xs text-muted-foreground uppercase">Clasificación</p><p className="font-bold text-lg text-primary">{fichaData.tipo_componente}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase">Tanda</p><p className="font-bold text-lg text-primary">{fichaData.unidades_tanda} un</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase">Peso/Unidad</p><p className="font-bold text-lg text-primary">{fichaData.ppu_objetivo} g</p></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 border-b border-border pb-2">Formulación</h3>
                    {fichaData.ingredientes && fichaData.ingredientes.length > 0 ? (
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-muted text-muted-foreground text-xs uppercase">
                            <th className="p-3 border-b">Insumo</th>
                            <th className="p-3 border-b">Tipo</th>
                            <th className="p-3 border-b text-right">Cantidad</th>
                            <th className="p-3 border-b">Acción</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                          {fichaData.ingredientes.map((ing: any) => (
                            <tr key={ing.id_detalle} className="hover:bg-muted/10">
                              <td className="p-3 font-medium">{ing.nombre}</td>
                              <td className="p-3"><span className="text-xs bg-secondary/10 px-2 py-1 rounded">{ing.tipo}</span></td>
                              <td className="p-3 text-right font-bold text-primary">{ing.cantidad} {ing.unidad === 'percentage' ? '%' : 'g'}</td>
                              <td className="p-3">
                                <button 
                                  onClick={() => handleRemoveComponent(fichaData.id_componente, ing.id_componente_hijo, ing.nombre)}
                                  className="text-destructive hover:bg-destructive/10 p-1.5 rounded transition-colors"
                                  title="Quitar Insumo"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : <p className="text-center p-8 text-muted-foreground">Sin insumos agregados.</p>}
                  </div>
                </div>
              ) : <p>Error al cargar.</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}