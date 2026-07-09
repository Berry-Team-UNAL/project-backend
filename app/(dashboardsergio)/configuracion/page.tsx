"use client";

import { useState, useEffect, useCallback } from "react";
import { Droplet, Flame, Zap, Info, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

interface ServiceRates {
	waterRate: string;
	waterAdditional: string;
	gasRate: string;
	electricityRate: string;
	ovenPower: string;
	electricityFixed: string;
}

const EMPTY_RATES: ServiceRates = {
	waterRate: "",
	waterAdditional: "",
	gasRate: "",
	electricityRate: "",
	ovenPower: "",
	electricityFixed: "",
};

// Mapeo field backend -> state field UI
const FIELD_TO_STATE: Record<string, keyof ServiceRates> = {
	"water.pricePerLiter": "waterRate",
	"water.additionalUsagePercentage": "waterAdditional",
	"gas.pricePerHour": "gasRate",
	"electricity.pricePerKwh": "electricityRate",
	"electricity.ovenPowerKw": "ovenPower",
	"electricity.fixedSurcharge": "electricityFixed",
};

function isValidLocal(field: keyof ServiceRates, value: string): boolean {
	const num = parseFloat(value);
	if (isNaN(num)) {return false;}
	// ovenPowerKw debe ser > 0 (estricto); el resto permite >= 0
	if (field === "ovenPower") {return num > 0;}
	return num >= 0;
}

export default function ConfiguracionPage() {
	const [rates, setRates] = useState<ServiceRates>(EMPTY_RATES);
	const [errors, setErrors] = useState<Partial<Record<keyof ServiceRates, string>>>({});
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);

	const loadTariffs = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch("/api/tarifas");
			if (!res.ok) {
				toast.error("Error al cargar tarifas");
				return;
			}
			const data = await res.json();
			const t = data.tariffs;
			setRates({
				waterRate: String(t.water.pricePerLiter),
				waterAdditional: String(t.water.additionalUsagePercentage),
				gasRate: String(t.gas.pricePerHour),
				electricityRate: String(t.electricity.pricePerKwh),
				ovenPower: String(t.electricity.ovenPowerKw),
				electricityFixed: String(t.electricity.fixedSurcharge),
			});
		} catch {
			toast.error("Error de red al cargar tarifas");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		loadTariffs();
	}, [loadTariffs]);

	const handleChange = (field: keyof ServiceRates, value: string) => {
		setRates((prev) => ({ ...prev, [field]: value }));
		if (value === "" || !isValidLocal(field, value)) {
			const msg =
				field === "ovenPower"
					? "Debe ser un n&uacute;mero mayor a 0"
					: "Debe ser un n&uacute;mero positivo";
			setErrors((prev) => ({ ...prev, [field]: msg }));
		} else {
			setErrors((prev) => {
				const next = { ...prev };
				delete next[field];
				return next;
			});
		}
	};

	const handleSave = async () => {
		// Verificaci&oacute;n local antes de enviar
		const fields = Object.keys(rates) as (keyof ServiceRates)[];
		const localErrors: Partial<Record<keyof ServiceRates, string>> = {};
		for (const f of fields) {
			if (rates[f] === "" || !isValidLocal(f, rates[f])) {
				localErrors[f] =
					f === "ovenPower"
						? "Debe ser un n&uacute;mero mayor a 0"
						: "Debe ser un n&uacute;mero positivo";
			}
		}
		if (Object.keys(localErrors).length > 0) {
			setErrors(localErrors);
			return;
		}

		setSaving(true);
		setErrors({});
		try {
			const body = {
				tariffs: {
					water: {
						pricePerLiter: Number(rates.waterRate),
						additionalUsagePercentage: Number(rates.waterAdditional),
					},
					gas: { pricePerHour: Number(rates.gasRate) },
					electricity: {
						pricePerKwh: Number(rates.electricityRate),
						ovenPowerKw: Number(rates.ovenPower),
						fixedSurcharge: Number(rates.electricityFixed),
					},
				},
			};
			const res = await fetch("/api/tarifas", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			if (res.status === 422) {
				const data = await res.json();
				const serverErrors: Partial<Record<keyof ServiceRates, string>> = {};
				for (const e of data.errors ?? []) {
					const stateField = FIELD_TO_STATE[e.field as string];
					if (stateField) {
						serverErrors[stateField] = e.message as string;
					}
				}
				setErrors(serverErrors);
				toast.error("Se encontraron errores de validaci&oacute;n", {
					description: "Revisa los campos resaltados",
					duration: 4000,
				});
				return;
			}
			if (!res.ok) {
				toast.error("Error al guardar configuraci&oacute;n");
				return;
			}
			toast.success("Configuraci&oacute;n guardada correctamente", {
				description: "Los costos fijos han sido actualizados",
				duration: 3000,
				style: {
					background: "#A8C5A0",
					color: "#3D3229",
					border: "none",
				},
			});
			// Recargar valores confirmados
			await loadTariffs();
		} catch {
			toast.error("Error de red al guardar");
		} finally {
			setSaving(false);
		}
	};

	const inputProps = (field: keyof ServiceRates, id: string, step: string) => ({
		id,
		type: "number" as const,
		step,
		value: rates[field],
		onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
			handleChange(field, e.target.value),
		disabled: loading || saving,
		className: `mt-2 ${errors[field] ? "border-[#D4816A] border-2" : ""}`,
	});

	return (
		<div className="min-h-screen p-8 bg-background">
			<Toaster />
			<div className="max-w-4xl mx-auto">
				<Breadcrumb className="mb-6">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/configuracion">
								Configuraci&oacute;n
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Servicios y Costos Fijos</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<div className="mb-8">
					<h1 className="text-3xl font-semibold text-foreground mb-2">
						Configuraci&oacute;n de Servicios
					</h1>
					<p className="text-sm text-muted-foreground">
						Define las tarifas de servicios b&aacute;sicos para calcular costos de
						producci&oacute;n
					</p>
				</div>

				{loading && (
					<div className="flex items-center justify-center py-12">
						<Loader2 className="w-8 h-8 animate-spin text-[#8B6F4E]" />
						<span className="ml-3 text-muted-foreground">
							Cargando tarifas actuales...
						</span>
					</div>
				)}

				{!loading && (
					<>
						{/* Agua */}
						<Card className="p-6 mb-6 bg-white shadow-sm border-[1.5px]">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-12 rounded-xl bg-[#A8C5A0]/20 flex items-center justify-center">
									<Droplet className="w-6 h-6 text-[#A8C5A0]" strokeWidth={1.5} />
								</div>
								<div>
									<h2 className="text-xl font-semibold text-foreground">Agua</h2>
									<p className="text-sm text-muted-foreground">
										Consumo de agua en la producci&oacute;n
									</p>
								</div>
							</div>

							<div className="space-y-4">
								<div>
									<Label htmlFor="waterRate">Tarifa ($/litro)</Label>
									<Input {...inputProps("waterRate", "waterRate", "0.01")} />
									{errors.waterRate && (
										<p className="text-sm text-[#D4816A] mt-1">
											{errors.waterRate}
										</p>
									)}
								</div>

								<div>
									<div className="flex items-center gap-2 mb-2">
										<Label htmlFor="waterAdditional">
											% adicional por otros usos
										</Label>
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger>
													<Info className="w-4 h-4 text-muted-foreground" />
												</TooltipTrigger>
												<TooltipContent>
													<p className="max-w-xs">
														Incluye limpieza, lavado de utensilios y otros usos
														indirectos del agua en el proceso de producci&oacute;n
													</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</div>
									<Input {...inputProps("waterAdditional", "waterAdditional", "1")} />
									{errors.waterAdditional && (
										<p className="text-sm text-[#D4816A] mt-1">
											{errors.waterAdditional}
										</p>
									)}
								</div>
							</div>
						</Card>

						{/* Gas */}
						<Card className="p-6 mb-6 bg-white shadow-sm border-[1.5px]">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-12 rounded-xl bg-[#D4816A]/20 flex items-center justify-center">
									<Flame className="w-6 h-6 text-[#D4816A]" strokeWidth={1.5} />
								</div>
								<div>
									<h2 className="text-xl font-semibold text-foreground">Gas</h2>
									<p className="text-sm text-muted-foreground">
										Consumo de gas para hornos
									</p>
								</div>
							</div>

							<div>
								<Label htmlFor="gasRate">Tarifa ($/hora de horno)</Label>
								<Input {...inputProps("gasRate", "gasRate", "0.01")} />
								{errors.gasRate && (
									<p className="text-sm text-[#D4816A] mt-1">
										{errors.gasRate}
									</p>
								)}
							</div>
						</Card>

						{/* Electricidad */}
						<Card className="p-6 mb-8 bg-white shadow-sm border-[1.5px]">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-12 rounded-xl bg-[#E8B86D]/20 flex items-center justify-center">
									<Zap className="w-6 h-6 text-[#E8B86D]" strokeWidth={1.5} />
								</div>
								<div>
									<h2 className="text-xl font-semibold text-foreground">
										Electricidad
									</h2>
									<p className="text-sm text-muted-foreground">
										Consumo el&eacute;ctrico de equipos
									</p>
								</div>
							</div>

							<div className="space-y-4">
								<div>
									<Label htmlFor="electricityRate">Tarifa ($/kWh)</Label>
									<Input
										{...inputProps("electricityRate", "electricityRate", "0.01")}
									/>
									{errors.electricityRate && (
										<p className="text-sm text-[#D4816A] mt-1">
											{errors.electricityRate}
										</p>
									)}
								</div>

								<div>
									<Label htmlFor="ovenPower">Potencia del horno (kW)</Label>
									<Input {...inputProps("ovenPower", "ovenPower", "0.1")} />
									{errors.ovenPower && (
										<p className="text-sm text-[#D4816A] mt-1">
											{errors.ovenPower}
										</p>
									)}
								</div>

								<div>
									<Label htmlFor="electricityFixed">Valor agregado fijo ($)</Label>
									<Input
										{...inputProps(
											"electricityFixed",
											"electricityFixed",
											"1",
										)}
									/>
									{errors.electricityFixed && (
										<p className="text-sm text-[#D4816A] mt-1">
											{errors.electricityFixed}
										</p>
									)}
								</div>
							</div>
						</Card>

						<div className="flex justify-center">
							<Button
								size="lg"
								onClick={handleSave}
								disabled={
									Object.keys(errors).length > 0 || saving || loading
								}
								className="bg-[#8B6F4E] hover:bg-[#7A5F42] text-white px-12"
							>
								{saving ? (
									<Loader2 className="w-5 h-5 mr-2 animate-spin" />
								) : (
									<CheckCircle2 className="w-5 h-5 mr-2" />
								)}
								Guardar configuraci&oacute;n
							</Button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
