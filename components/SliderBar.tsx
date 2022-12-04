import React, { Dispatch, SetStateAction, useCallback, useMemo } from "react";

export type SliderBarProps = {
  scaleValue: number;
  setScaleValue: Dispatch<SetStateAction<number>>;
};

// Convert slider changed value to scale value.
const covertToScaleValue = (sliderValue: number) => (sliderValue - 1) * 0.5 + 1;

function SliderBar({ scaleValue, setScaleValue }: SliderBarProps) {
  // Convert scale value to slider value.
  const sliderValue = useMemo(() => (scaleValue - 1) / 0.5 + 1, [scaleValue]);

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value);
      setScaleValue(covertToScaleValue(value));
    },
    []
  );

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
          onChange={handleOnChange}
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
