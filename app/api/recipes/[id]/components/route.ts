import { NextResponse } from "next/server";
import { AddComponentUseCase } from "@/services/recipes/AddComponent.usecase";

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const params = await context.params;
        const parentId = parseInt(params.id);
        if (isNaN(parentId)) throw new Error("ID inválido");

        const body = await request.json();
        const useCase = new AddComponentUseCase();
        const result = await useCase.execute(parentId, body);

        return NextResponse.json(result, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error?.message || "Error al agregar componente" }, { status: 400 });
    }
}