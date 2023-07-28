import React, { useState } from "react";

function ColorText(props) {
  const [textColor, setTextColor] = useState("black");
  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setTextColor(selectedColor);
    props.onTextColorChange(selectedColor);
  };
  return (
    <div className="relative inline-block mx-2 ">
      <select
        className="p-2 rounded-lg"
        value={textColor}
        onChange={handleColorChange}
      >
        <option value="black">black</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
      </select>
    </div>
  );
}

export default ColorText;
