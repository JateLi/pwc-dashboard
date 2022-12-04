import React, { Dispatch, SetStateAction, useMemo } from "react";

export type SliderBarProps = {
  scaleValue: number;
  setScaleValue: Dispatch<SetStateAction<number>>;
};

function SliderBar({ scaleValue, setScaleValue }: SliderBarProps) {
  // Convert scale value to slider value.
  const sliderValue = useMemo(() => (scaleValue - 1) / 0.5 + 1, [scaleValue]);

  // Convert slider changed value to scale value.
  const covertToScaleValue = (sliderValue: number) =>
    (sliderValue - 1) * 0.5 + 1;

  return (
    <div className="flex flex-row mx-5">
      <span className="pr-2">Scale</span>
      <div>
        <input
          className="w-30"
          type="range"
          min="1"
          max="3"
          value={sliderValue}
          id="myRange"
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setScaleValue(covertToScaleValue(value));
          }}
        />
        <div className="flex flex-row justify-between w-30 -mt-2">
          <div>
            <span>1</span>
          </div>
          <div>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderBar;
