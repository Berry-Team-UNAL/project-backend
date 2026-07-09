"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Settings, DollarSign, BarChart3, Croissant, ClipboardCheck, CloudSun, ClipboardList, Circle, Calculator, Wheat } from "lucide-react";
import {
} from "@/components/ui/select";

// Agregamos "Ingredientes" a tu lista de navegación para cumplir con tu Roadmap
const navItems = [
	{ path: "/recetas", label: "Recetas", icon: BookOpen },
	{ path: "/ingredientes", label: "Ingredientes", icon: Wheat },
	{ path: "/taller", label: "Modo Taller", icon: ClipboardCheck },
	{ path: "/produccion", label: "Producción", icon: ClipboardList },
	//{ path: "/ambiente", label: "Ambiente", icon: CloudSun },
	//{ path: "/configuracion", label: "Configuración", icon: Settings },
	//{ path: "/costos", label: "Costos", icon: DollarSign },
	//{ path: "/reportes", label: "Reportes", icon: BarChart3 },
	{ path: "/scale", label: "Escalar", icon: Circle },
	{ path: "/calculadora-porciones", label: "Calculadora", icon: Calculator },
	{ path: "/check", label: "CheckList", icon: Circle },
];

export default function DashboardLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	const pathname = usePathname();

	const isActive = (path: string) => pathname === path;

	return (
		<div className="flex h-screen bg-background overflow-hidden">
			{/* Sidebar */}
			<aside className="w-60 bg-[#8B6F4E] text-white flex flex-col shadow-lg shrink-0">
				{/* Logo */}
				<div className="p-6 border-b border-white/10">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
							<Croissant className="w-6 h-6" />
						</div>
						<div>
							<h1 className="text-xl font-semibold text-white">Banneton</h1>
							<p className="text-xs text-white/70">Gestión Artesanal</p>
						</div>
					</div>
				</div>

				{/* Navigation */}
				<nav className="flex-1 p-4 space-y-1">
					{navItems.map((item) => {
						const Icon = item.icon;
						return (
							<Link
								key={item.path}
								href={item.path}
								className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
									isActive(item.path)
										? "bg-white/20 text-white shadow-sm"
										: "text-white/80 hover:bg-white/10 hover:text-white"
								}`}
							>
								<Icon className="w-5 h-5" strokeWidth={1.5} />
								<span className="font-medium">{item.label}</span>
							</Link>
						);
					})}
				</nav>
			</aside>

			{/* Main Content */}
			<main className="flex-1 overflow-auto bg-background">
				{children}
			</main>
		</div>
	);
}
