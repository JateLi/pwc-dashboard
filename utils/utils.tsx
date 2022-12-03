import { format, parse } from "date-fns";

export const stringToDate = (stringDate: string) =>
  parse(stringDate, "yyyy-MM-dd", new Date());
