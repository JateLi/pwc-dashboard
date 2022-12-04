import "@testing-library/jest-dom";
import { calculateAverageNum } from "../utils/utils";

const emptyArray = [];

const numberArray = [1, 2, 3, 4, 5, 7, 8, 9];

test("Calculate average number of an array", () => {
  expect(calculateAverageNum(emptyArray)).toBe(0);
  expect(calculateAverageNum(numberArray)).toBe(4.875);
});
