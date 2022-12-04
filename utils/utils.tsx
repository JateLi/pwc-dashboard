import { parse } from "date-fns";

export const stringToDate = (stringDate: string) =>
  parse(stringDate, "yyyy-MM-dd", new Date());

export const calculateAverageNum = (arr: number[]) => {
  if (arr.length < 1) return 0;
  return (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(4);
};

export const calculateGrowthValue = (arr: number[]) => {
  if (arr.length < 1) return 0;
  return arr[arr.length - 1] - arr[0];
};
