import { parse } from "date-fns";

export const stringToDate = (stringDate: string) =>
  parse(stringDate, "yyyy-MM-dd", new Date());

//Calculate the average value of the number array.
export const calculateAverageNum = (arr: number[]) => {
  if (arr.length < 1) return 0;
  return Number((arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(4)) * 1;
};

//Calculate the difference between last and first number of an array.
export const calculateGrowthValue = (arr: number[]) => {
  if (arr.length < 1) return 0;
  return arr[arr.length - 1] - arr[0];
};
