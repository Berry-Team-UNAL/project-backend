"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Valida las credenciales de correo y contraseña e inicia la sesión del usuario.
 */
export async function ejecutarLogin(formData: FormData) {
	const emailInput = formData.get("email") as string;
	const passwordInput = formData.get("password") as string;

	if (!emailInput || !passwordInput) {
		redirect("/login?error=invalid");
	}

	// Buscamos el usuario e incluimos su rol asociado de la BD
	const usuarioEncontrado = await prisma.usuario.findUnique({
		where: { email: emailInput },
		include: { rol: true }
	});

	// Validación contra el campo password
	if (!usuarioEncontrado || !usuarioEncontrado.activo || usuarioEncontrado.password !== passwordInput) {
		redirect("/login?error=invalid");
	}
 
	const cookieStore = await cookies();
	const nombreRol = usuarioEncontrado.rol.nombre_rol.toLowerCase();

	// 1. Cookie oculta y segura para el Middleware (Nivel de Servidor)
	cookieStore.set("session_role", nombreRol, {
		path: "/",
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 8 // 8 horas de jornada
	});

	// 🌟 2. Cookie pública para mostrar el Rol en la interfaz (Nivel de Cliente)
	cookieStore.set("session_role_display", nombreRol, {
		path: "/",
		httpOnly: false,
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 8
	});

	// 🌟 3. Cookie pública para mostrar el Email en la interfaz (Nivel de Cliente)
	cookieStore.set("session_email", emailInput, {
		path: "/",
		httpOnly: false,
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 8
	});

	// 🎯 Todos los usuarios caen estrictamente en la misma DashboardPage
	redirect("/dashboard");
}
