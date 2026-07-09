"use client";

import { useState, useEffect, useCallback } from "react";
import { AlertCircle, Info, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const RECIPE_ID = "fr_1";

interface SubrecipeVersionSummary {
	versionId: string;
	versionName: string;
	shortDescription: string;
	estimatedCostPerKg: number;
	createdAt: string;
}

interface RecipeComponent {
	type: "ingredient" | "subrecipe";
	id: string;
	name: string;
	quantityGrams: number;
	selectedVersionId?: string;
	subrecipeId?: string;
	versions?: SubrecipeVersionSummary[];
}

interface MasterRecipe {
	id: string;
	name: string;
	version: string;
	components: RecipeComponent[];
}

interface VersionChangeResult {
	from: string;
	to: string;
	costVariationPercentage: number;
	updatedTotalHydration: number;
	updatedTotalCost: number;
}

export default function RecetasPage() {
	const [recipe, setRecipe] = useState<MasterRecipe | null>(null);
	const [loading, setLoading] = useState(true);
	const [savingVersion, setSavingVersion] = useState<string | null>(null);
	const [versionChange, setVersionChange] = useState<VersionChangeResult | null>(null);

	const loadRecipe = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch(`/api/recetas/${RECIPE_ID}`);
			if (!res.ok) {
				toast.error("Error al cargar la receta");
				return;
			}
			const data = await res.json();
			setRecipe(data.recipe);
		} catch {
			toast.error("Error de red al cargar la receta");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		loadRecipe();
	}, [loadRecipe]);

	const handleVersionChange = async (
		componentId: string,
		subrecipeId: string | undefined,
		newVersion: string,
	) => {
		if (!subrecipeId || !recipe) {return;}
		setSavingVersion(componentId);
		try {
			const res = await fetch(`/api/subrecetas/${subrecipeId}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ newVersionId: newVersion, masterRecipeId: RECIPE_ID }),
			});
			if (!res.ok) {
				const data = await res.json();
				toast.error(data.error ?? "Error al cambiar versi&oacute;n");
				return;
			}
			const data = await res.json();
			const r = data.result;
			if (!r) {
				toast.error("No se obtuvo resultado del cambio de versi&oacute;n");
				return;
			}

			// Construir tarjet de variaci&oacute;n con datos reales del backend
			const fromVersion =
				recipe.components
					.find((c) => c.id === componentId)
					?.versions?.find((v) => v.versionId === r.previousVersionId)
					?.versionName ?? r.previousVersionId;
			const toVersion =
				recipe.components
					.find((c) => c.id === componentId)
					?.versions?.find((v) => v.versionId === r.newVersionId)
					?.versionName ?? r.newVersionId;

			setVersionChange({
				from: fromVersion,
				to: toVersion,
				costVariationPercentage: r.costVariationPercentage,
				updatedTotalHydration: r.updatedTotalHydration,
				updatedTotalCost: r.updatedTotalCost,
			});

			// Actualizar localmente el selectedVersionId del component
			setRecipe((prev) => {
				if (!prev) {return prev;}
				return {
					...prev,
					components: prev.components.map((c) =>
						c.id === componentId ? { ...c, selectedVersionId: newVersion } : c,
					),
				};
			});

			toast.success(`Versi&oacute;n ${r.newVersionId} aplicada`);
		} catch {
			toast.error("Error de red al aplicar versi&oacute;n");
		} finally {
			setSavingVersion(null);
		}
	};

	if (loading) {
		return (
			<div className="min-h-screen p-8 bg-background">
				<Toaster />
				<div className="max-w-5xl mx-auto flex flex-col items-center justify-center py-24">
					<Loader2 className="w-10 h-10 animate-spin text-[#8B6F4E]" />
					<p className="mt-4 text-muted-foreground">Cargando receta...</p>
				</div>
			</div>
		);
	}

	if (!recipe) {
		return (
			<div className="min-h-screen p-8 bg-background">
				<Toaster />
				<div className="max-w-5xl mx-auto">
					<Card className="p-8 border-[#D4816A] bg-[#D4816A]/5">
						<p className="text-[#D4816A] mb-4">No se pudo cargar la receta.</p>
						<Button
							variant="outline"
							onClick={loadRecipe}
							className="border-[#8B6F4E] text-[#8B6F4E] hover:bg-[#8B6F4E]/10"
						>
							Reintentar
						</Button>
					</Card>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen p-8 bg-background">
			<Toaster />
			<div className="max-w-5xl mx-auto">
				<div className="mb-8">
					<div className="flex items-center justify-between mb-2">
						<h1 className="text-3xl font-semibold text-foreground">
							{recipe.name}
						</h1>
						<Badge className="bg-[#E8B86D] text-[#3D3229] hover:bg-[#E8B86D]/90 px-4 py-1">
							En edici&oacute;n
						</Badge>
					</div>
					<p className="text-sm text-muted-foreground">
						Selecciona las versiones de subrecetas para tu receta final
					</p>
				</div>

				<div className="space-y-4 mb-8">
					{recipe.components.map((component) => {
						const hasMultipleVersions =
							component.type === "subrecipe" &&
							(component.versions?.length ?? 0) > 1;
						const hasOneVersion =
							component.type === "subrecipe" &&
							(component.versions?.length ?? 0) === 1;

						return (
							<Card
								key={component.id}
								className="p-6 shadow-sm hover:shadow-md transition-shadow border-[1.5px]"
							>
								<div className="flex items-start justify-between">
									<div className="flex-1">
										<div className="flex items-center gap-3 mb-2">
											<h3 className="font-medium text-foreground">
												{component.name}
											</h3>
											{component.type === "ingredient" && (
												<Badge
													variant="outline"
													className="text-xs border-[#C4A882] text-[#C4A882]"
												>
													Ingrediente simple
												</Badge>
											)}
											{component.type === "subrecipe" && (
												<Badge
													variant="outline"
													className="text-xs border-[#8B6F4E] text-[#8B6F4E]"
												>
													Subreceta
												</Badge>
											)}
										</div>

										{component.type === "ingredient" && (
											<p className="text-sm text-muted-foreground">
												Cantidad: {component.quantityGrams}g
											</p>
										)}

										{component.type === "subrecipe" && (
											<div className="mt-4">
												{hasOneVersion && !hasMultipleVersions && (
													<TooltipProvider>
														<Tooltip>
															<TooltipTrigger asChild>
																<div className="w-full">
																	<Select
																		value={component.selectedVersionId}
																		disabled
																	>
																		<SelectTrigger className="w-full bg-muted/50 cursor-not-allowed">
																			<SelectValue>
																				{component.versions![0].versionName}
																			</SelectValue>
																		</SelectTrigger>
																	</Select>
																</div>
															</TooltipTrigger>
															<TooltipContent>
																<p>Solo hay una versi&oacute;n disponible</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												)}

												{hasMultipleVersions && (
													<>
														{!component.selectedVersionId && (
															<div className="mb-2 flex items-center gap-2 text-sm text-[#D4816A]">
																<AlertCircle className="w-4 h-4" />
																<span>Selecciona una versi&oacute;n activa</span>
															</div>
														)}

														<Select
															value={component.selectedVersionId}
															onValueChange={(value) =>
																handleVersionChange(
																	component.id,
																	component.subrecipeId,
																	value,
																)
															}
														>
															<SelectTrigger
																className={`w-full ${
																	!component.selectedVersionId
																		? "border-[#E8B86D] border-2"
																		: ""
																}`}
															>
																<SelectValue placeholder="Seleccionar versi&oacute;n" />
															</SelectTrigger>
															<SelectContent>
																{component.versions!.map((version) => (
																	<SelectItem
																		key={version.versionId}
																		value={version.versionId}
																		className="py-3"
																	>
																		<div className="flex flex-col gap-1">
																			<div className="flex items-center gap-2">
																				<span className="font-medium">
																					{version.versionName}
																				</span>
																			</div>
																			{version.shortDescription && (
																				<p className="text-xs text-muted-foreground">
																					{version.shortDescription}
																				</p>
																			)}
																			<div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
																				<span>
																					${version.estimatedCostPerKg.toLocaleString("es-CO")}/kg
																				</span>
																				<span>&bull;</span>
																				<span>
																					{new Date(version.createdAt).toLocaleDateString("es-CO")}
																				</span>
																			</div>
																		</div>
																	</SelectItem>
																))}
															</SelectContent>
														</Select>

														{savingVersion === component.id && (
															<p className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
																<Loader2 className="w-3 h-3 animate-spin" />
																Aplicando cambio...
															</p>
														)}
													</>
												)}

												{!component.versions || component.versions.length === 0 ? (
													<p className="text-sm text-muted-foreground italic">
														No hay versiones registradas para esta subreceta.
													</p>
												) : null}
											</div>
										)}
									</div>
								</div>
							</Card>
						);
					})}
				</div>

				{versionChange && (
					<Card className="p-6 mb-8 bg-[#FDF6EE] border-[#C4A882] border-2">
						<div className="flex items-start gap-3">
							<Info className="w-5 h-5 text-[#8B6F4E] mt-0.5" />
							<div className="flex-1">
								<h4 className="font-medium text-foreground mb-3">
									Cambios aplicados: {versionChange.from} &rarr; {versionChange.to}
								</h4>
								<div className="grid grid-cols-3 gap-4 text-sm">
									<div>
										<p className="text-muted-foreground mb-1">
											Variaci&oacute;n de costo
										</p>
										<p
											className={`font-medium ${
												versionChange.costVariationPercentage > 0
													? "text-[#D4816A]"
													: "text-[#A8C5A0]"
											}`}
										>
											{versionChange.costVariationPercentage > 0 ? "+" : ""}
											{versionChange.costVariationPercentage}%
										</p>
									</div>
									<div>
										<p className="text-muted-foreground mb-1">
											Hidrataci&oacute;n total
										</p>
										<p className="font-medium text-foreground">
											{versionChange.updatedTotalHydration}%
										</p>
									</div>
									<div>
										<p className="text-muted-foreground mb-1">
											Costo total estimado
										</p>
										<p className="font-medium text-foreground">
											${versionChange.updatedTotalCost.toLocaleString("es-CO")}
										</p>
									</div>
								</div>
							</div>
						</div>
					</Card>
				)}

				<div className="flex justify-end">
					<Button
						size="lg"
						className="bg-[#8B6F4E] hover:bg-[#7A5F42] text-white px-8"
						onClick={() => toast.success("Guardado (demo)")}
					>
						Guardar receta
					</Button>
				</div>
			</div>
		</div>
	);
}
