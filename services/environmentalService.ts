import { prisma } from "@/domain/prisma";
import { AmbientalLogic } from "@/domain/ambientalLogic";
import { IEnvironmentalInput, IAdjustedIngredient } from "@/domain/types/environmentalTypes";

export async function registerAndCalculate(
  input: IEnvironmentalInput,
  idReceta: number,
): Promise<{ condicion?: any; ajustes?: IAdjustedIngredient[]; error?: string }> {
  const condicion = await prisma.condicion_ambiental.create({
    data: {
      humedad: input.humidity,
      temperatura: input.temp,
      altitud: input.altitude,
      presion_barometrica: input.pressure,
    },
  });

  const ingredientes = await prisma.detalle_formulacion.findMany({
    where: { id_receta_padre: idReceta },
  });

  if (ingredientes.length === 0) {
    return { condicion, error: `No hay ingredientes para la receta ${idReceta}` };
  }

  const ajustes: IAdjustedIngredient[] = ingredientes.map((ing) => {
    const original = Number(ing.cantidad_usada);
    const { adjustedAmount, humidityFactor, pressureFactor } =
      AmbientalLogic.applyEnvironmentalCorrection(original, input);

    return {
      idDetalle: ing.id_detalle,
      originalAmount: original,
      adjustedAmount,
      humidityFactor,
      pressureFactor,
      formulaUsed: "env_ambiental_correction_promedio",
    };
  });

  return { condicion, ajustes };
}