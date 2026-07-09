import { NextResponse } from "next/server";
import { RegisterIngredientUseCase } from "@/services/ingredient/RegisterIngredient.usecase"; 
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json(); 
        const registerUseCase = new RegisterIngredientUseCase();
        const newIngredient = await registerUseCase.execute(body); 
        
        return NextResponse.json(newIngredient, { status: 201 });
   } catch (error: any) {
        console.error("🔥 ERROR EN POST:", error); 
        // Extraemos el mensaje de forma segura, sin importar cómo venga el error
        const errorMessage = error?.message || error || "Error desconocido al procesar la solicitud";
        
        return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
    }

export async function GET() {
    try {
        // 1. Buscamos el catálogo, incluimos la base, y DENTRO de la base, el artículo
        const ingredients = await prisma.catalogo_componente.findMany({
            where: { activo: true, tipo_componente: {
                    notIn: ["RECETA", "SUBRECETA"]
                } }, 
            
            include: { 
                ingrediente_base: {
                    include: {
                        articulo_proveedor: true // <-- Ahora sí está en su lugar correcto
                    }
                }
            }
        });
        
        // 2. Mapeamos navegando por la jerarquía correcta
        const formattedIngredients = ingredients.map(ing => {
            // Buscamos el artículo dentro de ingrediente_base (usamos ? por si está vacío)
            const articulo = ing.ingrediente_base?.articulo_proveedor?.[0]; 
            
            return {
                id_componente: ing.id_componente,
                nombre: ing.nombre,
                tipo_componente: ing.tipo_componente,
                unidad_medida: ing.unidad_medida,
                // Si existe el artículo, tomamos sus valores, si no, ponemos 0
                costo_por_gramo: Number(articulo?.costo_por_unidad || 0),
                porcentaje_humedad: Number(articulo?.porcentaje_agua || 0),
                porcentaje_grasa: Number(articulo?.porcentaje_grasa || 0),
                porcentaje_merma: Number(articulo?.porcentaje_merma_limpieza || 0),
            };
        });
        
        return NextResponse.json(formattedIngredients, { status: 200 });
    } catch (error) {
        console.error("🔥 ERROR REAL DE PRISMA:", error);
        return NextResponse.json({ error: "Error al obtener ingredientes" }, { status: 500 });
    }
}