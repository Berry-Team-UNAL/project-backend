"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Wheat } from "lucide-react";

export function Sidebar() {
	const pathname = usePathname();

	const links = [
		{ name: "Dashboard", href: "/", icon: LayoutDashboard },
		{ name: "Fichas Técnicas", href: "/recipes", icon: BookOpen },
		{ name: "Ingredientes", href: "/ingredients", icon: Wheat }, // Ajusta si tu ruta se llama /ingredientes
	];

	return (
		<aside className="w-64 min-h-screen bg-[#FDF6EE] border-r border-[#8B6F4E]/20 p-4 flex flex-col gap-2">
			<div className="mb-8 px-4">
				<h2 className="text-2xl font-extrabold text-[#8B6F4E] tracking-tight">Banneton</h2>
			</div>

			<nav className="flex flex-col gap-1">
				{links.map((link) => {
					const isActive = pathname === link.href;
					const Icon = link.icon;

					return (
						<Link 
							key={link.name} 
							href={link.href}
							className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${
								isActive 
									? "bg-[#8B6F4E] text-white shadow-md" 
									: "text-[#3D3229] hover:bg-[#8B6F4E]/10"
							}`}
						>
							<Icon className="w-5 h-5" />
							{link.name}
						</Link>
					);
				})}
			</nav>
		</aside>
	);
}
