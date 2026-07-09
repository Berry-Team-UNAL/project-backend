import { NextRequest, NextResponse } from "next/server";
import { findSubstituteOptions } from "../../../../../domain/data/ingredients";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;
	const articleIdStr = request.nextUrl.searchParams.get("articleId");
	if (!articleIdStr) {
		return NextResponse.json(
			{ error: "articleId es requerido como query param" },
			{ status: 400 },
		);
	}
	const articleId = parseInt(articleIdStr, 10);
	if (isNaN(articleId)) {
		return NextResponse.json({ error: "articleId debe ser num&eacute;rico" }, { status: 400 });
	}

	const options = await findSubstituteOptions(articleId);
	// note: `id` (sessionId) is reserved for future session-scoped validation
	void id;
	return NextResponse.json({ currentArticleId: articleId, options });
}
