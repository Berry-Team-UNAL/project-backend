import { defineConfig } from "@prisma/config"; // Asegúrate de que sea @prisma/config

export default defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "prisma/migrations",
	},
	datasource: {
		// Ponemos la URL directamente aquí para saltarnos el problema del .env en la terminal
		url: process.env.DATABASE_URL,
	},
});
