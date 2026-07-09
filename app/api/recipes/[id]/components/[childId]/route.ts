// app/api/recipes/[id]/components/[childId]/route.ts
import { NextResponse } from "next/server";
import { RemoveComponentUseCase } from "@/services/recipes/RemoveComponent.usecase";
import { ModifyComponentUseCase } from "@/services/recipes/ModifyComponent.usecase";

export async function DELETE(
	request: Request,
	context: { params: Promise<{ id: string, childId: string }> }
) {
	try {
		const params = await context.params;
		const parentId = parseInt(params.id);
		const childId = parseInt(params.childId);

		const useCase = new RemoveComponentUseCase();
		await useCase.execute(parentId, childId);

		return NextResponse.json({ message: "Insumo eliminado." }, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 });
	}
}

export async function PUT(
	request: Request,
	context: { params: Promise<{ id: string, childId: string }> }
) {
	try {
		const params = await context.params;
		const parentId = parseInt(params.id);
		const childId = parseInt(params.childId);
        
		const body = await request.json(); // { quantity, unit, aportaABase }

		const useCase = new ModifyComponentUseCase();
		const result = await useCase.execute(parentId, childId, {
			childComponentId: childId,
			quantity: body.quantity,
			unit: body.unit,
			aportaABase: body.aportaABase
		});

		return NextResponse.json(result, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 });
	}
}
