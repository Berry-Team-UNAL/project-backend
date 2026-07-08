import { IEnvironmentalInput } from './types/environmentalTypes';

export class AmbientalLogic {
  static getHumidityFactor(humidity: number): number {
    if (humidity > 70) {
      const reduction = (humidity - 70) * 0.005;
      return 1 - reduction;
    }
    return 1;
  }

  static getPressureFactor(pressure: number): number {
    const standardPressure = 1013;
    if (pressure < standardPressure) {
      const difference = standardPressure - pressure;
      return 1 + difference / 2000;
    }
    return 1;
  }

  static applyEnvironmentalCorrection(
    baseAmount: number,
    input: IEnvironmentalInput,
  ): { adjustedAmount: number; humidityFactor: number; pressureFactor: number } {
    const humidityFactor = this.getHumidityFactor(input.humidity);
    const pressureFactor = this.getPressureFactor(input.pressure);
    const avgFactor = (humidityFactor + pressureFactor) / 2;

    return {
      adjustedAmount: baseAmount * avgFactor,
      humidityFactor,
      pressureFactor,
    };
  }
}