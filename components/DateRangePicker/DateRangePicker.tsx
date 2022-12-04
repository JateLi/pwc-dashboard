import React, { Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { stringToDate } from "../../utils/utils";
import styles from "./DateRangePicker.module.css";

export type DatePickerProps = {
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
}: DatePickerProps) {
  const selectedStartDate = stringToDate(startDate);
  const selectedEndDate = stringToDate(endDate);

  const convertToFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return format(firstDay, "yyyy-MM-dd");
  };

  return (
    <div className="flex flex-row">
      <span className="pr-5">From</span>
      <div>
        <DatePicker
          placeholderText="Select From Date"
          selected={selectedStartDate}
          selectsStart
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          className={styles.datePicker}
          dateFormat="dd/MM/yyyy"
          showMonthYearPicker
          onChange={(date) => setStartDate(convertToFirstDayOfMonth(date!))}
        />
      </div>
      <span className="px-5">To</span>
      <DatePicker
        placeholderText="Select To Date"
        selected={selectedEndDate}
        selectsEnd
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        minDate={selectedStartDate}
        className={styles.datePicker}
        dateFormat="dd/MM/yyyy"
        showMonthYearPicker
        onChange={(date) => setEndDate(convertToFirstDayOfMonth(date!))}
      />
    </div>
  );
}

export default DateRangePicker;
