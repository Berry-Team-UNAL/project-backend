"use client";

import { useState, useEffect, useCallback } from "react";
import {
	TestTube2,
	AlertTriangle,
	Save,
	X,
	Loader2,
	Trash2,
	ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const RECIPE_ID = "fr_1";

interface ModifiedIngredient {
	id: string;
	name: string;
	waterPercentage: number;
	pricePerGram: number;
	quantityGrams: number;
}

interface BakingParameters {
	bakingTimeHours: number;
	unitsPerBatch: number;
}

interface SandboxSession {
	sessionId: string;
	masterRecipeId: string;
	status: string;
	createdAt: string;
	modifiedIngredients: ModifiedIngredient[];
	modifiedBakingParameters: BakingParameters;
	modifications: unknown[];
}

interface SandboxMetrics {
	totalHydration: number;
	estimatedTotalCost: number;
	estimatedCostPerUnit: number;
	rangeWarnings: { field: string; value: number; message: string }[];
}

export default function ReportesPage() {
	const [session, setSession] = useState<SandboxSession | null>(null);
	const [metrics, setMetrics] = useState<SandboxMetrics | null>(null);
	const [loading, setLoading] = useState(true);
	const [pending, setPending] = useState<string | null>(null);
	const [discarding, setDiscarding] = useState(false);
	const [saving, setSaving] = useState(false);

	const openSession = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch("/api/sandbox", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ recipeId: RECIPE_ID }),
			});
			if (!res.ok) {
				toast.error("Error al abrir sesion sandbox");
				return;
			}
			const data = await res.json();
			setSession(data.session);
			await refreshMetrics(data.session.sessionId);
		} catch {
			toast.error("Error de red al abrir sesion");
		} finally {
			setLoading(false);
		}
	}, []);

	const refreshMetrics = useCallback(async (sessionId: string) => {
		try {
			const res = await fetch(`/api/sandbox/${sessionId}?scope=metrics`);
			if (!res.ok) {return;}
			const data = await res.json();
			setMetrics(data.metrics);
		} catch {
			// ignore refresh errors
		}
	}, []);

	useEffect(() => {
		openSession();
	}, [openSession]);

	const modifyIngredient = async (
		ingredientId: string,
		quantityGrams: number,
	) => {
		if (!session) {return;}
		setPending(`qty-${ingredientId}`);
		try {
			const res = await fetch(`/api/sandbox/${session.sessionId}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "modifyIngredient",
					ingredientId,
					quantityGrams,
				}),
			});
			if (!res.ok) {
				const data = await res.json();
				toast.error(data.error ?? "Error al modificar ingrediente");
				return;
			}
			const data = await res.json();
			setSession(data.session);
			await refreshMetrics(session.sessionId);
		} catch {
			toast.error("Error de red");
		} finally {
			setPending(null);
		}
	};

	const modifyBakingTime = async (minutes: number) => {
		if (!session) {return;}
		setPending("bakingTime");
		const hours = parseFloat((minutes / 60).toFixed(4));
		try {
			const res = await fetch(`/api/sandbox/${session.sessionId}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "modifyBakingParameter",
					field: "bakingTimeHours",
					value: hours,
				}),
			});
			if (!res.ok) {
				const data = await res.json();
				toast.error(data.error ?? "Error al modificar tiempo de horneado");
				return;
			}
			const data = await res.json();
			setSession(data.session);
			await refreshMetrics(session.sessionId);
		} catch {
			toast.error("Error de red");
		} finally {
			setPending(null);
		}
	};

	const modifyUnitsPerBatch = async (units: number) => {
		if (!session) {return;}
		setPending("units");
		try {
			const res = await fetch(`/api/sandbox/${session.sessionId}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "modifyBakingParameter",
					field: "unitsPerBatch",
					value: units,
				}),
			});
			if (!res.ok) {
				const data = await res.json();
				toast.error(data.error ?? "Error al modificar unidades por tanda");
				return;
			}
			const data = await res.json();
			setSession(data.session);
			await refreshMetrics(session.sessionId);
		} catch {
			toast.error("Error de red");
		} finally {
			setPending(null);
		}
	};

	const discardSandbox = async () => {
		if (!session) {return;}
		setDiscarding(true);
		try {
			const res = await fetch(`/api/sandbox/${session.sessionId}`, {
				method: "DELETE",
			});
			if (!res.ok) {
				toast.error("Error al descartar sesion");
				return;
			}
			toast.success("Cambios descartados");
			setSession(null);
			setMetrics(null);
			await openSession();
		} catch {
			toast.error("Error de red al descartar");
		} finally {
			setDiscarding(false);
		}
	};

	const saveAsVersion = async (versionName: string) => {
		if (!session || !versionName.trim()) {
			toast.error("Debes indicar un nombre de version");
			return;
		}
		setSaving(true);
		try {
			const res = await fetch(`/api/sandbox/${session.sessionId}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ versionName }),
			});
			if (!res.ok) {
				toast.error("Error al guardar como nueva version");
				return;
			}
			const data = await res.json();
			setSession(data.session);
			toast.success(`Guardado como "${versionName}"`);
		} catch {
			toast.error("Error de red al guardar");
		} finally {
			setSaving(false);
		}
	};

	const [saveDialog, setSaveDialog] = useState<{
		open: boolean;
		versionName: string;
	}>({ open: false, versionName: "" });

	if (loading) {
		return (
			<div className="min-h-screen bg-background">
				<Toaster />
				<div className="flex flex-col items-center justify-center py-24">
					<Loader2 className="w-10 h-10 animate-spin text-[#8B6F4E]" />
					<p className="mt-4 text-muted-foreground">
						Iniciando sesion sandbox...
					</p>
				</div>
			</div>
		);
	}

	if (!session || !metrics) {
		return (
			<div className="min-h-screen bg-background">
				<Toaster />
				<div className="p-8">
					<div className="max-w-7xl mx-auto">
						<Card className="p-8 border-[#D4816A] bg-[#D4816A]/5">
							<p className="text-[#D4816A] mb-4">
								No se pudo iniciar la sesion sandbox.
							</p>
							<Button
								variant="outline"
								onClick={openSession}
								className="border-[#8B6F4E] text-[#8B6F4E] hover:bg-[#8B6F4E]/10"
							>
								Reintentar
							</Button>
						</Card>
					</div>
				</div>
			</div>
		);
	}

	const hydration = metrics.totalHydration;
	const isHydrationOutOfRange = hydration < 40 || hydration > 90;
	const bakingTimeMinutes = Math.round(
		session.modifiedBakingParameters.bakingTimeHours * 60,
	);

	return (
		<div className="min-h-screen bg-background">
			<Toaster />
			<div className="bg-[#E8B86D] border-b-2 border-[#D4A05D] px-8 py-4 sticky top-0 z-10">
				<div className="max-w-7xl mx-auto flex items-center gap-3">
					<TestTube2 className="w-5 h-5 text-[#3D3229]" />
					<p className="font-medium text-[#3D3229]">
						Modo Previsualizacion &mdash; Los cambios NO afectan los datos maestros
					</p>
				</div>
			</div>

			<div className="p-8">
				<div className="max-w-7xl mx-auto">
					<div className="mb-8">
						<h1 className="text-3xl font-semibold text-foreground mb-2">
							Previsualizacion Experimental
						</h1>
						<p className="text-sm text-muted-foreground">
							Prueba modificaciones antes de crear una nueva version
						</p>
					</div>

					{/* Ingredientes */}
					<Card className="mb-8 overflow-hidden shadow-md border-[1.5px]">
						<div className="p-6 bg-[#FDF6EE] border-b border-border">
							<h3 className="text-lg font-semibold text-foreground">
								Ingredientes (modifica cantidad)
							</h3>
						</div>
						<div className="p-6 space-y-4">
							{session.modifiedIngredients.map((ing) => (
								<div
									key={ing.id}
									className="flex items-center justify-between gap-4"
								>
									<div className="flex-1">
										<span className="text-sm font-medium text-foreground">
											{ing.name}
										</span>
										<span className="ml-2 text-xs text-muted-foreground">
											(humedad {ing.waterPercentage}%,
											${ing.pricePerGram.toFixed(2)}/g)
										</span>
									</div>
									<div className="flex items-center gap-2">
										<Input
											type="number"
											value={ing.quantityGrams}
											onChange={(e) =>
												modifyIngredient(ing.id, Number(e.target.value))
											}
											className="w-32 border-[#8B6F4E]"
										/>
										<span className="text-sm text-muted-foreground">g</span>
										{pending === `qty-${ing.id}` && (
											<Loader2 className="w-4 h-4 animate-spin text-[#8B6F4E]" />
										)}
									</div>
								</div>
							))}
						</div>
					</Card>

					{/* Horneado */}
					<Card className="mb-8 overflow-hidden shadow-md border-[1.5px]">
						<div className="p-6 bg-[#FDF6EE] border-b border-border">
							<h3 className="text-lg font-semibold text-foreground">
								Parametros de horneado
							</h3>
						</div>
						<div className="p-6 space-y-4">
							<div className="flex items-center justify-between gap-4">
								<Label className="text-sm text-foreground">
									Tiempo de horneado (minutos)
								</Label>
								<div className="flex items-center gap-2">
									<Input
										type="number"
										value={bakingTimeMinutes}
										onChange={(e) =>
											modifyBakingTime(Number(e.target.value))
										}
										className="w-32 border-[#8B6F4E]"
									/>
									<span className="text-sm text-muted-foreground">min</span>
									{pending === "bakingTime" && (
										<Loader2 className="w-4 h-4 animate-spin text-[#8B6F4E]" />
									)}
								</div>
							</div>
							<div className="flex items-center justify-between gap-4">
								<Label className="text-sm text-foreground">
									Unidades por tanda
								</Label>
								<div className="flex items-center gap-2">
									<Input
										type="number"
										value={session.modifiedBakingParameters.unitsPerBatch}
										onChange={(e) =>
											modifyUnitsPerBatch(Number(e.target.value))
										}
										className="w-32 border-[#8B6F4E]"
									/>
									<span className="text-sm text-muted-foreground">unidades</span>
									{pending === "units" && (
										<Loader2 className="w-4 h-4 animate-spin text-[#8B6F4E]" />
									)}
								</div>
							</div>
						</div>
					</Card>

					{/* Metrics */}
					<Card className="p-6 mb-8 shadow-sm border-[1.5px]">
						<h3 className="text-lg font-semibold text-foreground mb-6">
							Metricas en tiempo real
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div>
								<div className="flex items-center gap-2 mb-2">
									<p className="text-sm text-muted-foreground">
										Hidratacion total
									</p>
									{isHydrationOutOfRange && (
										<Badge className="bg-[#E8B86D] text-[#3D3229] hover:bg-[#E8B86D]/90 text-xs">
											Fuera de rango
										</Badge>
									)}
								</div>
								<p className="text-2xl font-semibold text-foreground">
									{hydration}%
								</p>
								{isHydrationOutOfRange && (
									<p className="text-xs text-[#D4816A] mt-1">
										Valor fuera de rango tecnico (40-90%)
									</p>
								)}
							</div>
							<div>
								<p className="text-sm text-muted-foreground mb-2">
									Costo estimado total
								</p>
								<p className="text-2xl font-semibold text-foreground">
									${metrics.estimatedTotalCost.toLocaleString("es-CO")}
								</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground mb-2">
									Costo por unidad
								</p>
								<p className="text-2xl font-semibold text-foreground">
									${metrics.estimatedCostPerUnit.toLocaleString("es-CO")}
								</p>
							</div>
						</div>

						{metrics.rangeWarnings.length > 0 && (
							<div className="mt-6 p-4 bg-[#E8B86D]/10 rounded-lg border border-[#E8B86D]">
								<div className="flex items-start gap-3">
									<AlertTriangle className="w-5 h-5 text-[#E8B86D] mt-0.5" />
									<div>
										<p className="font-medium text-[#3D3229] mb-1">
											Advertencia tecnica
										</p>
										{metrics.rangeWarnings.map((w, i) => (
											<p key={i} className="text-sm text-foreground">
												{w.message}
											</p>
										))}
									</div>
								</div>
							</div>
						)}
					</Card>

					{/* Modification history */}
					{session.modifications.length > 0 && (
						<Card className="mb-8 p-6 shadow-sm border-[1.5px]">
							<h3 className="text-lg font-semibold text-foreground mb-4">
								Historial ({session.modifications.length} cambios)
							</h3>
							<div className="space-y-2 text-sm">
								{session.modifications.map((mod, i) => {
									const m = mod as {
										componentId: string;
										field: string;
										previousValue: number | string;
										newValue: number | string;
									};
									return (
										<div
											key={i}
											className="flex items-center gap-2 text-muted-foreground"
										>
											<ArrowRight className="w-3 h-3" />
											<span>
												{m.componentId}: {m.field} cambio de{" "}
												<b>{String(m.previousValue)}</b>
												{" "}&rarr;{" "}
												<b className="text-foreground">
													{String(m.newValue)}
												</b>
											</span>
										</div>
									);
								})}
							</div>
						</Card>
					)}

					{/* Buttons */}
					<div className="flex gap-4 justify-end">
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button
									variant="outline"
									size="lg"
									className="border-muted-foreground text-muted-foreground hover:bg-destructive/10"
									disabled={discarding}
								>
									{discarding ? (
										<Loader2 className="w-5 h-5 mr-2 animate-spin" />
									) : (
										<Trash2 className="w-5 h-5 mr-2" />
									)}
									Descartar cambios
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>Descartar cambios?</AlertDialogTitle>
									<AlertDialogDescription>
										Se perderan todas las modificaciones. Esta accion no se puede
										deshacer.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>Cancelar</AlertDialogCancel>
									<AlertDialogAction
										className="bg-[#D4816A] hover:bg-[#C37159]"
										onClick={discardSandbox}
									>
										Descartar
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>

						<Button
							size="lg"
							className="bg-[#8B6F4E] hover:bg-[#7A5F42] text-white px-8"
							disabled={saving}
							onClick={() => setSaveDialog({ open: true, versionName: "" })}
						>
							{saving ? (
								<Loader2 className="w-5 h-5 mr-2 animate-spin" />
							) : (
								<Save className="w-5 h-5 mr-2" />
							)}
							Guardar como nueva version
						</Button>
					</div>

					{/* Save name dialog */}
					{saveDialog.open && (
						<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
							<Card className="p-6 max-w-md w-full">
								<h3 className="text-lg font-semibold text-foreground mb-4">
									Nombre para la nueva version
								</h3>
								<Input
									type="text"
									placeholder="Ej: Masa madre 48h experimental"
									value={saveDialog.versionName}
									onChange={(e) =>
										setSaveDialog({ ...saveDialog, versionName: e.target.value })
									}
									className="mb-4"
								/>
								<div className="flex gap-3 justify-end">
									<Button
										variant="outline"
										onClick={() => setSaveDialog({ open: false, versionName: "" })}
									>
										<X className="w-4 h-4 mr-2" /> Cancelar
									</Button>
									<Button
										className="bg-[#8B6F4E] hover:bg-[#7A5F42] text-white"
										onClick={async () => {
											await saveAsVersion(saveDialog.versionName);
											setSaveDialog({ open: false, versionName: "" });
										}}
									>
										<Save className="w-4 h-4 mr-2" /> Guardar
									</Button>
								</div>
							</Card>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
