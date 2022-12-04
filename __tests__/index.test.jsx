import "@testing-library/jest-dom";
import { calculateAverageNum, calculateGrowthValue } from "../utils/utils";

const emptyArray = [];

const numberArray = [1, 2, 3, 4, 5, 7, 8, 9];

const negativeNumberArray = [-1, -2, -3, -4, -5, -7, -8, -9];

test("Calculate average number of an array", () => {
  expect(calculateAverageNum(emptyArray)).toBe(0);
  expect(calculateAverageNum(numberArray)).toBe(4.875);
  expect(calculateAverageNum(negativeNumberArray)).toBe(-4.875);
});

test("Calculate growth value from a number array", () => {
  expect(calculateGrowthValue(emptyArray)).toBe(0);
  expect(calculateGrowthValue(numberArray)).toBe(8);
  expect(calculateGrowthValue(negativeNumberArray)).toBe(-8);
});
