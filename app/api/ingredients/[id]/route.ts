import { NextResponse } from "next/server";
import { DeleteIngredientUseCase } from "@/services/ingredient/DeleteIngredient.usecase";
import { ModifyIngredientUseCase } from "@/services/ingredient/ModifyIngredient.usecase";

// ==========================================
// DELETE: ELIMINAR (Desactivar) UN INGREDIENTE
// ==========================================
export async function DELETE(
	request: Request, 
	context: { params: Promise<{ id: string }> } // <-- Cambio: Definimos params como Promesa
) {
	try {
		const params = await context.params; // <-- Cambio: Usamos await para leer los params
		const id = parseInt(params.id);
        
		if (isNaN(id)) {throw new Error("ID inválido");}

		const useCase = new DeleteIngredientUseCase();
		const result = await useCase.execute(id);
        
		return NextResponse.json(result, { status: 200 });
	} catch (error: any) {
		console.error("🔥 ERROR EN DELETE:", error);
		return NextResponse.json({ error: error?.message || "Error interno al eliminar" }, { status: 400 });
	}
}

// ==========================================
// PUT: ACTUALIZAR UN INGREDIENTE
// ==========================================
export async function PUT(
	request: Request, 
	context: { params: Promise<{ id: string }> } // <-- Cambio: Definimos params como Promesa
) {
	try {
		const params = await context.params; // <-- Cambio: Usamos await para leer los params
		const id = parseInt(params.id);
        
		if (isNaN(id)) {throw new Error("ID inválido");}
        
		const body = await request.json();
        
		const useCase = new ModifyIngredientUseCase();
		const result = await useCase.execute(id, body);
        
		return NextResponse.json(result, { status: 200 });
	} catch (error: any) {
		console.error("🔥 ERROR EN PUT:", error);
		return NextResponse.json({ error: error?.message || "Error interno al modificar" }, { status: 400 });
	}
}
