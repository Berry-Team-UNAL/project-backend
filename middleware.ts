import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ROLES_PERMITIDOS_POR_RUTA: Record<string, string[]> = {
	"/recetas": ["admin", "editor"],
	"/ingredientes": ["admin", "editor"],
	"/produccion": ["admin"],
	"/scale": ["admin", "editor"],
	"/calculadora": ["admin", "editor", "panadero"],
	"/check": ["admin", "editor", "panadero"]
};

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const cookieSesion = request.cookies.get("session_role");
	const rolUsuario = cookieSesion?.value ? cookieSesion.value.toLowerCase() : null;

	// 1. Redirección en la raíz pura ("/")
	if (pathname === "/") {
		if (rolUsuario) {
			return NextResponse.redirect(new URL("/dashboard", request.url));
		}
		return NextResponse.redirect(new URL("/login", request.url));
	}

	// 🌟 2. BLOQUEO EXCLUSIVO PARA EL DASHBOARD: Si intentan entrar a /dashboard sin sesión
	if (pathname.startsWith("/dashboard")) {
		if (!rolUsuario) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}

	// 3. Control de accesos por roles para el resto de rutas de la panadería
	for (const [rutaBase, rolesPermitidos] of Object.entries(ROLES_PERMITIDOS_POR_RUTA)) {
		if (pathname.startsWith(rutaBase)) {
			if (!rolUsuario || !rolesPermitidos.includes(rolUsuario)) {
				const urlRedireccion = rolUsuario 
					? new URL("/dashboard?error=no-autorizado", request.url)
					: new URL("/login", request.url);
				
				return NextResponse.redirect(urlRedireccion);
			}
		}
	}

	// Anti-caché para peticiones válidas
	const respuesta = NextResponse.next();
	respuesta.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
	respuesta.cookies.set("x-middleware-cache-buster", Date.now().toString(), {
		path: "/",
		httpOnly: true,
		sameSite: "lax"
	});

	return respuesta;
}

export const config = {
	// 🎛️ El escudo protector ahora cubre absolutamente todo el ecosistema de Banneton
	matcher: [
		"/",
		"/dashboard",
		"/dashboard/:path*",
		"/recetas",
		"/recetas/:path*",
		"/ingredientes",
		"/ingredientes/:path*",
		"/produccion",
		"/produccion/:path*",
		"/scale",
		"/scale/:path*",
		"/calculadora",
		"/calculadora/:path*",
		"/check",
		"/check/:path*"
	],
};
