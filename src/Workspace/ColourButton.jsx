import React from "react";
import { useRecoilState } from "recoil";
import { CellColorState } from "../Table/store/CellColorState";

const ColourButton = (props) => {
  const [cellColor, setCellColor] = useRecoilState(CellColorState);
  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setCellColor(selectedColor);
  };

  return (
    <div className="relative inline-block mx-2 ">
      <select
        className="p-2 rounded-lg"
        value={cellColor}
        onChange={handleColorChange}
      >
        <option value="white">white</option>
        <option value="#ffcccb">red</option>
        <option value="#87ceeb">blue</option>
        <option value="#90ee90">green</option>
        <option value="yellow">yellow</option>
      </select>
    </div>
  );
};

export default ColourButton;
