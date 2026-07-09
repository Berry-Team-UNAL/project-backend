"use client";

import { useState, useEffect, useCallback } from "react";
import { Wheat, Droplet, Flame, Zap, TrendingUp, AlertTriangle, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface CostBreakdown {
	ingredientsCost: number;
	services: {
		waterCost: number;
		gasCost: number;
		electricityCost: number;
		subtotalServicesCost: number;
	};
	totalCost: number;
	costPerUnit: number;
}

// Precio de venta sugerido para c&aacute;lculo de rentabilidad (placeholder, ajustable)
const SELLING_PRICE = 3000;

export default function CostosPage() {
	const [summary, setSummary] = useState<CostBreakdown | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const loadCosts = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			// Hardcoded fr_001 (master recipe &uacute;nica sembrada en Fase 2)
			const res = await fetch("/api/tarifas/costeo/fr_1");
			if (res.status === 404) {
				setError("No hay receta configurada para costeo.");
				return;
			}
			if (!res.ok) {
				setError("Error al calcular costeo.");
				return;
			}
			const data = await res.json();
			setSummary(data.summary);
		} catch {
			setError("Error de red al cargar el costeo.");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		loadCosts();
	}, [loadCosts]);

	if (loading) {
		return (
			<div className="min-h-screen p-8 bg-background">
				<div className="max-w-6xl mx-auto flex flex-col items-center justify-center py-24">
					<Loader2 className="w-10 h-10 animate-spin text-[#8B6F4E]" />
					<p className="mt-4 text-muted-foreground">
						Calculando costeo de la receta...
					</p>
				</div>
			</div>
		);
	}

	if (error || !summary) {
		return (
			<div className="min-h-screen p-8 bg-background">
				<div className="max-w-6xl mx-auto">
					<Card className="p-8 border-[#D4816A] bg-[#D4816A]/5">
						<div className="flex items-start gap-3">
							<AlertTriangle className="w-6 h-6 text-[#D4816A]" />
							<div>
								<p className="font-medium text-[#D4816A] mb-1">
									No se pudo cargar el costeo
								</p>
								<p className="text-sm text-foreground">
									{error ?? "Error desconocido. Verifica que la receta maestra est&eacute; sembrada en Supabase."}
								</p>
								<Button
									variant="outline"
									size="sm"
									className="mt-4 border-[#8B6F4E] text-[#8B6F4E] hover:bg-[#8B6F4E]/10"
									onClick={loadCosts}
								>
									Reintentar
								</Button>
							</div>
						</div>
					</Card>
				</div>
			</div>
		);
	}

	const isProfitable = summary.costPerUnit <= SELLING_PRICE;

	const costItems = [
		{
			label: "Ingredientes",
			amount: summary.ingredientsCost,
			icon: <Wheat className="w-6 h-6" strokeWidth={1.5} />,
			color: "#8B6F4E",
		},
		{
			label: "Agua",
			amount: summary.services.waterCost,
			icon: <Droplet className="w-6 h-6" strokeWidth={1.5} />,
			color: "#A8C5A0",
		},
		{
			label: "Gas",
			amount: summary.services.gasCost,
			icon: <Flame className="w-6 h-6" strokeWidth={1.5} />,
			color: "#D4816A",
		},
		{
			label: "Electricidad",
			amount: summary.services.electricityCost,
			icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
			color: "#E8B86D",
		},
	];

	return (
		<div className="min-h-screen p-8 bg-background">
			<div className="max-w-6xl mx-auto">
				<div className="mb-8">
					<div className="flex items-center justify-between mb-2">
						<h1 className="text-3xl font-semibold text-foreground">
							Costeo Producci&oacute;n
						</h1>
						<Badge className="bg-[#A8C5A0] text-[#3D3229] hover:bg-[#A8C5A0]/90 px-4 py-1">
							Costeo
						</Badge>
					</div>
					<p className="text-sm text-muted-foreground">
						Desglose completo de costos por tanda de producci&oacute;n
					</p>
				</div>

				{/* Cards por componente */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
					{costItems.map((item) => (
						<Card
							key={item.label}
							className="p-6 shadow-sm hover:shadow-md transition-shadow border-[1.5px]"
						>
							<div
								className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
								style={{ backgroundColor: `${item.color}20` }}
							>
								<div style={{ color: item.color }}>{item.icon}</div>
							</div>
							<div className="text-sm text-muted-foreground mb-1">
								{item.label}
							</div>
							<div className="text-2xl font-semibold text-foreground">
								${item.amount.toLocaleString("es-CO")}
							</div>
						</Card>
					))}
				</div>

				{/* Total */}
				<Card
					className={`p-8 mb-6 shadow-md border-[2px] ${
						!isProfitable
							? "border-[#D4816A] bg-[#D4816A]/5"
							: "border-[#8B6F4E]"
					}`}
				>
					<div className="flex items-start justify-between">
						<div className="flex-1">
							<div className="flex items-center gap-3 mb-4">
								<h2 className="text-2xl font-semibold text-foreground">
									Costo Total
								</h2>
								{!isProfitable && (
									<AlertTriangle className="w-6 h-6 text-[#D4816A]" />
								)}
							</div>
							<div className="text-4xl font-bold text-foreground mb-4">
								${summary.totalCost.toLocaleString("es-CO")}
							</div>
							<div className="flex items-center gap-6 text-sm">
								<div>
									<span className="text-muted-foreground">Por unidad:</span>
									<span className="ml-2 font-medium text-foreground">
										${summary.costPerUnit.toLocaleString("es-CO")}
									</span>
								</div>
								<div>
									<span className="text-muted-foreground">
										Precio de venta sugerido:
									</span>
									<span className="ml-2 font-medium text-foreground">
										${SELLING_PRICE.toLocaleString("es-CO")}
									</span>
								</div>
							</div>

							{!isProfitable && (
								<div className="mt-4 p-4 bg-white rounded-lg border border-[#D4816A]">
									<div className="flex items-start gap-3">
										<AlertTriangle className="w-5 h-5 text-[#D4816A] mt-0.5" />
										<div>
											<p className="font-medium text-[#D4816A] mb-1">
												Alerta de rentabilidad
											</p>
											<p className="text-sm text-foreground">
												El costo por unidad (${summary.costPerUnit.toLocaleString("es-CO")})
												supera el precio de venta sugerido
												(${SELLING_PRICE.toLocaleString("es-CO")}). Se recomienda
												ajustar las tarifas o el precio de venta.
											</p>
										</div>
									</div>
								</div>
							)}
						</div>

						<div className="ml-6">
							<div
								className={`w-24 h-24 rounded-full flex items-center justify-center ${
									isProfitable
										? "bg-[#A8C5A0]/20"
										: "bg-[#D4816A]/20"
								}`}
							>
								<TrendingUp
									className={`w-12 h-12 ${
										isProfitable ? "text-[#A8C5A0]" : "text-[#D4816A]"
									}`}
									strokeWidth={1.5}
								/>
							</div>
						</div>
					</div>
				</Card>

				{/* Desglose */}
				<Card className="p-6 mb-8 shadow-sm border-[1.5px]">
					<h3 className="text-lg font-semibold text-foreground mb-4">
						Detalles del costeo
					</h3>
					<div className="space-y-3">
						<div className="flex justify-between items-center pb-3 border-b border-border">
							<span className="text-sm text-foreground">Ingredientes base</span>
							<span className="font-medium text-foreground">
								${summary.ingredientsCost.toLocaleString("es-CO")}
							</span>
						</div>
						<div className="flex justify-between items-center pb-3 border-b border-border">
							<span className="text-sm text-foreground">Agua (incluye % adicional)</span>
							<span className="font-medium text-foreground">
								${summary.services.waterCost.toLocaleString("es-CO")}
							</span>
						</div>
						<div className="flex justify-between items-center pb-3 border-b border-border">
							<span className="text-sm text-foreground">Gas</span>
							<span className="font-medium text-foreground">
								${summary.services.gasCost.toLocaleString("es-CO")}
							</span>
						</div>
						<div className="flex justify-between items-center pb-3 border-b border-border">
							<span className="text-sm text-foreground">Electricidad</span>
							<span className="font-medium text-foreground">
								${summary.services.electricityCost.toLocaleString("es-CO")}
							</span>
						</div>
						<div className="flex justify-between items-center pb-3 border-b border-border">
							<span className="text-sm text-muted-foreground">
								Subtotal servicios
							</span>
							<span className="font-medium text-muted-foreground">
								${summary.services.subtotalServicesCost.toLocaleString("es-CO")}
							</span>
						</div>
						<div className="flex justify-between items-center pt-2">
							<span className="font-semibold text-foreground">Total</span>
							<span className="text-xl font-bold text-foreground">
								${summary.totalCost.toLocaleString("es-CO")}
							</span>
						</div>
					</div>
				</Card>

				<div className="flex gap-4 justify-end">
					<Button
						variant="outline"
						size="lg"
						asChild
						className="border-[#8B6F4E] text-[#8B6F4E] hover:bg-[#8B6F4E]/10"
					>
						<Link href="/configuracion">Ajustar tarifas</Link>
					</Button>
					<Button
						size="lg"
						className="bg-[#8B6F4E] hover:bg-[#7A5F42] text-white px-8"
						onClick={loadCosts}
					>
						Recalcular costeo
					</Button>
				</div>
			</div>
		</div>
	);
}
