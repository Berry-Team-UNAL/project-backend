import { NextRequest, NextResponse } from "next/server";
import { getRecipeWithComponents } from "../../../../services/recipeService";

export async function GET(
	_request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;
	const result = await getRecipeWithComponents(id);
	if (result.error) {
		return NextResponse.json({ error: result.error }, { status: 404 });
	}
	return NextResponse.json(result);
}
