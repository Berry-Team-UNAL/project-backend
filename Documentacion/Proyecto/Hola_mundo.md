# Hola Mundo — Banetton
## Tutorial: Next.js + Prisma + PostgreSQL (Supabase) + Docker

**Universidad Nacional de Colombia — Sede Bogotá**  
**Facultad de Ingeniería — Ingeniería de Sistemas y Computación**  
**Curso: Ingeniería de Software**

---

## 1. Tecnologías utilizadas

| Componente | Tecnología | Versión |
|---|---|---|
| Lenguaje | TypeScript | 5.x |
| Framework | Next.js (App Router) | 16.x |
| ORM | Prisma | 7.x |
| Base de datos | PostgreSQL (Supabase) | 16 |
| Contenedores | Docker + Docker Compose | — |
| Estilos | Tailwind CSS | 4.x |

---

## 2. Requisitos previos

Antes de comenzar, verificar que estén instalados:

```bash
node --version    # Node.js 18+
npm --version     # npm 9+
docker --version  # Docker 24+
```

---

## 3. Crear el proyecto Next.js

```bash
npx create-next-app@latest banetton \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*"

cd banetton
```

Este comando genera la estructura base con:
- App Router (`app/`)
- TypeScript configurado
- Tailwind CSS listo
- ESLint integrado

---

## 4. Instalar Prisma y dependencias

```bash
npm install prisma @prisma/client @prisma/adapter-pg pg @types/pg
npx prisma init --datasource-provider postgresql
```

`prisma init` genera dos archivos clave:
- `prisma/schema.prisma` — define el esquema de la base de datos
- `prisma.config.ts` — configuración del datasource (Prisma 7+)

---

## 5. Configurar variables de entorno

Crear el archivo `.env` en la raíz del proyecto:

```env
DATABASE_URL="postgresql://USUARIO:PASSWORD@HOST:5432/postgres"
```

> **Nota:** Para Supabase, la URL se obtiene en:  
> Dashboard → Settings → Database → Connection string → Session pooler

Agregar `.env` al `.gitignore` para no exponer credenciales:

```bash
echo ".env" >> .gitignore
```

---

## 6. Configurar el datasource (Prisma 7+)

En Prisma 7, la URL de conexión se declara en `prisma.config.ts`:

```typescript
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
```

Y en `prisma/schema.prisma`, el datasource **no** incluye la URL:

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
}

datasource db {
  provider = "postgresql"
}

// Entidad de ejemplo: Producto
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  price       Float
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt     @map("updated_at")

  @@map("products")
}
```

---

## 7. Aplicar el esquema a la base de datos

```bash
npx prisma db push
```

Salida esperada:
```
🚀  Your database is now in sync with your Prisma schema. Done in 3.21s
```

Generar el cliente Prisma:

```bash
npx prisma generate
```

---

## 8. Crear el singleton de Prisma

Archivo `lib/prisma.ts` — evita múltiples conexiones en desarrollo:

```typescript
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

---

## 9. Crear la API REST

Archivo `app/api/products/route.ts`:

```typescript
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/products
export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ ok: true, data: products });
}

// POST /api/products
export async function POST(request: Request) {
  const { name, description, price } = await request.json();
  const product = await prisma.product.create({
    data: { name, description, price: Number(price) },
  });
  return NextResponse.json({ ok: true, data: product }, { status: 201 });
}
```

---

## 10. Levantar la base de datos con Docker

Archivo `docker-compose.yml`:

```yaml
services:
  postgres:
    image: postgres:16-alpine
    container_name: banetton_db
    restart: unless-stopped
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: PASSWORD
      POSTGRES_DB: banetton
    ports:
      - "5432:5432"
    volumes:
      - banetton_pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  banetton_pgdata:
    name: banetton_pgdata
```

Levantar el contenedor:

```bash
docker compose up -d
```

Verificar que está corriendo:

```bash
docker ps -a
```

Salida esperada:
```
CONTAINER ID   IMAGE               COMMAND                  STATUS         PORTS                    NAMES
01106ce1a2d9   postgres:16-alpine  "docker-entrypoint.s…"  Up 10 seconds  0.0.0.0:5432->5432/tcp   banetton_db
```

---

## 11. Ejecutar el proyecto

```bash
npm run dev
```

Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

---

## 12. Prueba desde Postman

### GET — Listar productos

| Campo | Valor |
|---|---|
| Método | `GET` |
| URL | `http://localhost:3000/api/products` |

**Respuesta esperada:**
```json
{
  "ok": true,
  "data": []
}
```

---

### POST — Crear un producto

| Campo | Valor |
|---|---|
| Método | `POST` |
| URL | `http://localhost:3000/api/products` |
| Headers | `Content-Type: application/json` |

**Body (raw JSON):**
```json
{
  "name": "Camiseta Banetton",
  "description": "Producto de prueba",
  "price": 49.99
}
```

**Respuesta esperada:**
```json
{
  "ok": true,
  "data": {
    "id": 1,
    "name": "Camiseta Banetton",
    "description": "Producto de prueba",
    "price": 49.99,
    "createdAt": "2026-05-08T00:19:57.474Z",
    "updatedAt": "2026-05-08T00:19:57.474Z"
  }
}
```

---

## 13. Estructura final del proyecto

```
banetton/
├── app/
│   ├── api/
│   │   └── products/
│   │       └── route.ts       # API REST: GET y POST
│   ├── layout.tsx
│   └── page.tsx               # Página de inicio
├── lib/
│   └── prisma.ts              # Singleton Prisma
├── prisma/
│   └── schema.prisma          # Modelo de datos
├── Documentacion/
│   ├── Proyecto/
│   │   └── Hola_mundo.pdf     # Este tutorial
│   └── Diagramas/
│       └── Arquitectura.png   # Diagrama de arquitectura
├── Asignaciones/
│   └── docker-compose.png     # Evidencia docker ps -a
├── docker-compose.yml         # BD en Docker
├── setup.sh                   # Script Linux/Mac
├── setup.bat                  # Script Windows
├── prisma.config.ts           # Config Prisma 7
└── .env.example               # Plantilla de variables
```
