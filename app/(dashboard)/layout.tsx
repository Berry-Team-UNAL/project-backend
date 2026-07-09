"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BookOpen, Croissant, ClipboardCheck, ClipboardList, Circle, Calculator, Wheat, LogOut } from "lucide-react";
import Cookies from "js-cookie";

const navItems = [
	{ path: "/recetas", label: "Recetas", icon: BookOpen },
	{ path: "/ingredientes", label: "Ingredientes", icon: Wheat },
	{ path: "/produccion", label: "Producción", icon: ClipboardList },
	{ path: "/scale", label: "Escalar", icon: Circle },
	{ path: "/calculadora", label: "Calculadora", icon: Calculator },
	{ path: "/check", label: "CheckList", icon: ClipboardCheck },
];

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const router = useRouter();
	const isActive = (path: string) => pathname === path;

	// 🚪 Función para cerrar sesión desde el menú lateral
	const handleLogout = () => {
		Cookies.remove("session_role_display", { path: "/" });
		Cookies.remove("session_email", { path: "/" });
		
		router.push("/login");
		router.refresh();
	};

	return (
		<div className="flex h-screen bg-background overflow-hidden">
			{/* Sidebar Fijo */}
			<aside className="w-60 bg-[#8B6F4E] text-white flex flex-col shadow-lg shrink-0">
				
				{/* Logo de Banneton */}
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

				{/* Menú de Navegación principal */}
				<nav className="p-4 space-y-1">
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

				{/* 🎯 BOTÓN DE CERRAR SESIÓN EN LA BASE DEL MENU (mt-auto lo empuja hasta abajo) */}
				<div className="mt-auto p-4 border-t border-white/10">
					<button
						onClick={handleLogout}
						className="flex items-center gap-3 w-full px-4 py-3 text-white/80 hover:bg-red-500/20 hover:text-red-200 rounded-xl transition-all font-medium cursor-pointer"
					>
						<LogOut className="w-5 h-5" strokeWidth={1.5} />
						<span>Cerrar sesión</span>
					</button>
				</div>

			</aside>

			{/* Contenido de las páginas del sistema */}
			<main className="flex-1 overflow-auto bg-background">
				{children}
			</main>
		</div>
	);
}
