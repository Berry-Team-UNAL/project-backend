"use client";

export const dynamic = "force-dynamic";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Croissant, AlertTriangle, LogOut, User, Shield } from "lucide-react";
import Cookies from "js-cookie";

export default function DashboardPage() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const error = searchParams.get("error");

	// Estados para guardar los datos del usuario conectado
	const [userEmail, setUserEmail] = useState("Cargando...");
	const [userRole, setUserRole] = useState("Cargando...");

	useEffect(() => {
		// Leemos las cookies públicas inyectadas en el login
		const email = Cookies.get("session_email") || "usuario@banneton.com";
		const role = Cookies.get("session_role_display") || "panadero";

		setUserEmail(email);
		setUserRole(role.toUpperCase());
	}, []);

	// 🚪 Función para borrar las cookies y mandar al Login limpio
	const handleLogout = () => {
		Cookies.remove("session_role_display", { path: "/" });
		Cookies.remove("session_email", { path: "/" });
		
		router.push("/login");
		router.refresh();
	};

	return (
		<div className="p-8 max-w-4xl mx-auto space-y-6">
			{/* Mensaje de error por falta de permisos si el middleware rebota al usuario */}
			{error === "no-autorizado" && (
				<div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl shadow-sm">
					<AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
					<p className="text-sm font-medium">
						No tienes los permisos necesarios para acceder a esta sección.
					</p>
				</div>
			)}

			{/* Tarjeta de Bienvenida Principal Centrada */}
			<div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center gap-6">
				
				{/* Icono decorativo de Croissant */}
				<div className="w-16 h-16 bg-[#8B6F4E]/10 text-[#8B6F4E]/90 rounded-2xl flex items-center justify-center shrink-0">
					<Croissant className="w-10 h-10" strokeWidth={1.5} />
				</div>

				{/* Textos Informativos */}
				<div className="space-y-3">
					<h2 className="text-2xl font-bold text-zinc-950">¡Te damos la bienvenida a Banneton!</h2>
					
					{/* Badges de información en vivo */}
					<div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-600">
						<div className="flex items-center gap-1.5 bg-zinc-100 px-3 py-1 rounded-lg">
							<User className="w-4 h-4 text-zinc-500" />
							<span>{userEmail}</span>
						</div>
						<div className="flex items-center gap-1.5 bg-[#8B6F4E]/10 text-[#8B6F4E] font-medium px-3 py-1 rounded-lg">
							<Shield className="w-4 h-4" />
							<span>Rol: {userRole}</span>
						</div>
					</div>
				</div>

				{/* Separador estético */}
				<div className="w-full h-px bg-zinc-100 my-2" />

				{/* Botón de Cerrar Sesión en la base */}
				<button
					onClick={handleLogout}
					className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-6 py-2.5 rounded-xl transition-colors shadow-sm justify-center w-full sm:w-auto cursor-pointer"
				>
					<LogOut className="w-4 h-4" />
					<span>Cerrar sesión</span>
				</button>
			</div>
		</div>
	);
}
