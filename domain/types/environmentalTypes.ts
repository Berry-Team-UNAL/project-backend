export interface IEnvironmentalInput {
  humidity: number;
  temp: number;
  altitude: number;
  pressure: number;
}

export interface IAdjustedIngredient {
  idDetalle: number;
  originalAmount: number;
  adjustedAmount: number;
  humidityFactor: number;
  pressureFactor: number;
  formulaUsed: string;
}