import React from "react";
import { useState } from "react";

const ColourButton = (props) => {
  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    props.onColourChange(selectedColor);
  };

  return (
    <div className="relative inline-block mx-2 ">
      <select className="p-2 rounded-lg" onChange={handleColorChange}>
        <option value="white">white</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
      </select>
    </div>
  );
};

export default ColourButton;
