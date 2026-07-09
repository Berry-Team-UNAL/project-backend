import { prisma } from "@/domain/prisma";
import { computeIngredientRealCost } from "@/domain/ingredientLogic";

export interface RegisterIngredientCommand {
    nombre: string;
    tipo_componente: string;
    unidad_medida: string;
    aporta_a_base_panadera?: boolean;
    costo_por_unidad: number;
    porcentaje_agua: number;
    porcentaje_grasa: number;
    porcentaje_merma: number;
}

export class RegisterIngredientUseCase {
    async execute(data: RegisterIngredientCommand) {
        try {
            computeIngredientRealCost({
                costPerGram: data.costo_por_unidad,
                lossPercentage: data.porcentaje_merma
            });

            if (data.porcentaje_agua < 0 || data.porcentaje_agua > 100) {
                throw new Error("La humedad debe estar entre 0 y 100%");
            }
            if (data.porcentaje_grasa < 0 || data.porcentaje_grasa > 100) {
                throw new Error("La grasa debe estar entre 0 y 100%");
            }

            const existe = await prisma.catalogo_componente.findFirst({
                where: { nombre: data.nombre }
            });

            if (existe) {
                throw new Error(`El ingrediente '${data.nombre}' ya existe en el catálogo.`);
            }

            const newIngredient = await prisma.catalogo_componente.create({
                data: {
                    nombre: data.nombre,
                    tipo_componente: data.tipo_componente,
                    unidad_medida: data.unidad_medida,

                    ingrediente_base: {
                        create: {
                            aporta_a_base_panadera: data.aporta_a_base_panadera ?? false,

                            articulo_proveedor: {
                                create: {
                                    costo_por_unidad: data.costo_por_unidad,
                                    porcentaje_agua: data.porcentaje_agua,
                                    porcentaje_grasa: data.porcentaje_grasa,
                                    porcentaje_merma_limpieza: data.porcentaje_merma,
                                    es_predeterminado: true,
                                    proveedor: {
                                        connectOrCreate: {
                                            where: { id_proveedor: 1 },
                                            create: {
                                                nombre_proveedor: "Proveedor Interno (General)",
                                                activo: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                include: {
                    ingrediente_base: {
                        include: { articulo_proveedor: true }
                    }
                }
            });

            return newIngredient;
        } catch (error) {
            throw error;
        }
    }
}