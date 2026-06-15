import { describe, it, expect } from "vitest";
import { 
	calclNumberOfSets, 
	calcTimeInOven, 
	CalcHandlingTime, 
	calcFinalOvenTime,
	SetData
} from "../lib/portionCalcLogic"; 

describe("Oven Time Estimation Functions", () => {

	describe("calclNumberOfSets", () => {
		it("should correctly calculate required sets for a normal flow", () => {
			expect(calclNumberOfSets(50, 10, 2)).toBe(3);
		});

		it("should return 1 if units are less than or equal to the capacity per set", () => {
			expect(calclNumberOfSets(5, 10, 1)).toBe(1);
			expect(calclNumberOfSets(10, 10, 1)).toBe(1);
		});

		it("should return 0 if units are 0 (edge case)", () => {
			expect(calclNumberOfSets(0, 10, 2)).toBe(0);
		});

		it("should throw an error if capacity per set or oven number is less than or equal to 0", () => {
			expect(() => calclNumberOfSets(10, 0, 2)).toThrow();
			expect(() => calclNumberOfSets(10, 10, 0)).toThrow();
			expect(() => calclNumberOfSets(10, -5, 2)).toThrow();
		});
	});

	describe("calcTimeInOven", () => {
		it("should calculate total time by multiplying sets by oven time", () => {
			expect(calcTimeInOven(3, 45)).toBe(135);
		});

		it("should return 0 if sets are 0", () => {
			expect(calcTimeInOven(0, 45)).toBe(0);
		});

		it("should throw an error if oven time is negative", () => {
			expect(() => calcTimeInOven(2, -10)).toThrow();
		});
	});

	describe("CalcHandlingTime", () => {
		it("should calculate handling time by multiplying handling time by sets and ovens if sets > 1", () => {
			expect(CalcHandlingTime(5, 3, 2)).toBe(30);
		});

		it("should return exactly the handlingTime if there is only 1 set (edge case)", () => {
			expect(CalcHandlingTime(5, 1, 4)).toBe(5);
		});

		it("should return 0 if sets are 0", () => {
			expect(CalcHandlingTime(5, 0, 2)).toBe(0);
		});

		it("should throw an error if handling time is negative", () => {
			expect(() => CalcHandlingTime(-5, 2, 2)).toThrow();
		});
	});

	describe("calcFinalOvenTime (Orchestrator)", () => {
        
		it("Happy path: calculates full estimation with standard data", () => {
			const data: SetData = {
				units: 50,
				unitsPerSet: 10,
				ovenTime: 30,
				handlingTime: 5,
				ovenNumber: 2
			};

			const result = calcFinalOvenTime(data);
			expect(result.setNumber).toBe(3);
			expect(result.totalTimeOven).toBe(90);
			expect(result.totalHandlingTime).toBe(30);
			expect(result.finalTimeMinutes).toBe(120);
		});

		it("Edge case: when units are LESS than the batch capacity (1 single oven)", () => {
			const data: SetData = {
				units: 5,         
				unitsPerSet: 10,
				ovenTime: 60,
				handlingTime: 10,
				ovenNumber: 1
			};

			const result = calcFinalOvenTime(data);
			expect(result.setNumber).toBe(1);
			expect(result.totalTimeOven).toBe(60);
			expect(result.totalHandlingTime).toBe(10);
			expect(result.finalTimeMinutes).toBe(70);
		});

		it("Edge case: when units are MORE than the batch capacity using MULTIPLE ovens", () => {
			const data: SetData = {
				units: 35,        
				unitsPerSet: 10,
				ovenTime: 40,
				handlingTime: 5,
				ovenNumber: 3     
			};

			const result = calcFinalOvenTime(data);
			expect(result.setNumber).toBe(2);
			expect(result.totalTimeOven).toBe(80);
			expect(result.totalHandlingTime).toBe(30);
			expect(result.finalTimeMinutes).toBe(110);
		});

		it("Global edge case: when units are 0", () => {
			const data: SetData = {
				units: 0,
				unitsPerSet: 10,
				ovenTime: 30,
				handlingTime: 5,
				ovenNumber: 2
			};
			const result = calcFinalOvenTime(data);
			expect(result.finalTimeMinutes).toBe(0);
			expect(result.setNumber).toBe(0);
			expect(result.totalTimeOven).toBe(0);
			expect(result.totalHandlingTime).toBe(0);
		});

		it("should throw an error if any business parameter is negative", () => {
			const invalidData: SetData = {
				units: 10,
				unitsPerSet: -5, // Invalid
				ovenTime: 30,
				handlingTime: 5,
				ovenNumber: 2
			};
			expect(() => calcFinalOvenTime(invalidData)).toThrow();
		});
	});
});
