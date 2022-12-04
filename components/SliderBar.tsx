import React, { Dispatch, SetStateAction, useMemo } from "react";

type SliderBarProps = {
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
    <div>
      <input
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
    </div>
  );
}

export default SliderBar;
