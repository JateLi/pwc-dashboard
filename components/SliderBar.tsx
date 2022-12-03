import React from "react";

type SliderBarProps = {
  scaleValue: number;
};

function SliderBar({ scaleValue }: SliderBarProps) {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="2"
        value={scaleValue}
        id="myRange"
        onChange={(e) => {
          const value = parseInt(e.target.value);
        }}
      />
    </div>
  );
}

export default SliderBar;
