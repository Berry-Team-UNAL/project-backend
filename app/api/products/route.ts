import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/products — Lista todos los productos
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ ok: true, data: products });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Error al obtener productos" },
      { status: 500 }
    );
  }
}

// POST /api/products — Crea un nuevo producto
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, price } = body;

    if (!name || price === undefined) {
      return NextResponse.json(
        { ok: false, error: "name y price son requeridos" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: { name, description, price: Number(price) },
    });

    return NextResponse.json({ ok: true, data: product }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Error al crear producto" },
      { status: 500 }
    );
  }
}
