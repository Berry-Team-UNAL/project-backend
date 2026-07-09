 
import { PrismaClient } from "@prisma/client";
import { computeIngredientRealCost } from "@/domain/ingredientLogic";

const prisma = new PrismaClient();

export interface UpdateIngredientDTO {
	nombre: string;
	tipo_componente: string;
	unidad_medida: string;
	costo_por_gramo: number;
	porcentaje_merma: number;
	porcentaje_humedad: number;
	porcentaje_grasa: number;
}

export class ModifyIngredientUseCase {
	async execute(id: number, data: UpdateIngredientDTO) {
		try {
			// 1. REGLAS DE NEGOCIO (Matemáticas)
			computeIngredientRealCost({
				costPerGram: data.costo_por_gramo,
				lossPercentage: data.porcentaje_merma
			});

			if (data.porcentaje_humedad < 0 || data.porcentaje_humedad > 100) {
				throw new Error("La humedad debe estar entre 0 y 100%");
			}
			if (data.porcentaje_grasa < 0 || data.porcentaje_grasa > 100) {
				throw new Error("La grasa debe estar entre 0 y 100%");
			}

			// 2. BUSCAR EXISTENCIA Y DUPLICADOS
			const existing = await prisma.catalogo_componente.findUnique({
				where: { id_componente: id },
				include: { ingrediente_base: { include: { articulo_proveedor: true } } } 
			});

			if (!existing) {throw new Error(`No se encontró el ingrediente con ID ${id}`);}

			const duplicado = await prisma.catalogo_componente.findFirst({
				where: { nombre: data.nombre, id_componente: { not: id } }
			});
			if (duplicado) {throw new Error(`El ingrediente '${data.nombre}' ya existe en el catálogo.`);}

			// 3. ACTUALIZACIÓN ARQUITECTÓNICA
			// A. Actualizar el catálogo (datos genéricos)
			await prisma.catalogo_componente.update({
				where: { id_componente: id },
				data: {
					nombre: data.nombre,
					tipo_componente: data.tipo_componente,
					unidad_medida: data.unidad_medida,
				}
			});

			// B. Actualizar el artículo (datos técnicos)
			const idArticulo = existing.ingrediente_base?.articulo_proveedor?.[0]?.id_articulo;
			if (idArticulo) {
				await prisma.articulo_proveedor.update({
					where: { id_articulo: idArticulo },
					data: {
						costo_por_unidad: data.costo_por_gramo,
						porcentaje_agua: data.porcentaje_humedad,
						porcentaje_grasa: data.porcentaje_grasa,
						porcentaje_merma_limpieza: data.porcentaje_merma,
					}
				});
			}

			return { message: "Ingrediente actualizado correctamente" };
		} catch (error) {
			throw error;
		}
	}
}
