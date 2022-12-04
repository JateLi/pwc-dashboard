import React, { Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { stringToDate } from "../../utils/utils";
import styles from "./DateRangePicker.module.css";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export type DatePickerProps = {
  startDate: string;
  endDate: string;
  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
};

const CalenderIcon = () => (
  <div>
    <IconContext.Provider
      value={{
        style: {
          fontSize: "20px",
          color: "rgb(0, 123, 255)",
          marginLeft: "5px",
        },
      }}
    >
      <BsFillCalendarWeekFill />
    </IconContext.Provider>
  </div>
);

const convertToFirstDayOfMonth = (date: Date) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  return format(firstDay, "yyyy-MM-dd");
};

function DateRangePicker({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: DatePickerProps) {
  const selectedStartDate = stringToDate(startDate);
  const selectedEndDate = stringToDate(endDate);

  return (
    <div className="flex flex-row items-center">
      <span className="pr-5">From</span>
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
      <CalenderIcon />
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
      <CalenderIcon />
    </div>
  );
}

export default DateRangePicker;
