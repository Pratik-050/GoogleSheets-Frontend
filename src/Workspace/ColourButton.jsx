import React from "react";
import { useState } from "react";

const ColourButton = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const colourGuide = () => {};

  return (
    <div className="relative inline-block">
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        className="hover:bg-gray-300 bg-gray-200 p-1 mx-2 rounded-xl"
      >
        colour
      </button>

      <div
        hidden={isMenuOpen}
        className="absolute top-8 inset-x-0 left-0 w-32 z-10 shadow-xl bg-white"
      >
        <ul className="p-2">
          <li value="red">red</li>
          <li value="blue">blue</li>
          <li value="green">green</li>
          <li value="yellow">yellow</li>
        </ul>
      </div>
    </div>
  );
};

export default ColourButton;
