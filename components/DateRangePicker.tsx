import React, { Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { stringToDate } from "../utils/utils";

type Props = {
  startDate: string;
  endDate: string;
  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
};

function DateRangePicker({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: Props) {
  const selectedStartDate = stringToDate(startDate);
  const selectedEndDate = stringToDate(endDate);
  return (
    <div className="flex flex-row">
      <p>From </p>
      <DatePicker
        placeholderText="Select From Date"
        selected={selectedStartDate}
        selectsStart
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        onChange={(date) => setStartDate(format(date!, "yyyy-MM-dd"))}
      />
      <p>To </p>
      <DatePicker
        placeholderText="Select To Date"
        selected={selectedEndDate}
        selectsEnd
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        minDate={selectedStartDate}
        onChange={(date) => setEndDate(format(date!, "yyyy-MM-dd"))}
      />
    </div>
  );
}

export default DateRangePicker;
