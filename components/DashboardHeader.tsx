import React from "react";
import DateRangePicker, {
  DatePickerProps,
} from "./DateRangePicker/DateRangePicker";
import SliderBar, { SliderBarProps } from "./SliderBar";

type Props = DatePickerProps & SliderBarProps;

function DashboardHeader({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  scaleValue,
  setScaleValue,
}: Props) {
  return (
    <div
      className={
        "flex flex-row justify-evenly items-center py-5 border-b-2 border-black"
      }
    >
      <div>
        <p className="text-3xl font-bold">Economic Dashboard </p>
      </div>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <SliderBar scaleValue={scaleValue} setScaleValue={setScaleValue} />
    </div>
  );
}

export default DashboardHeader;
