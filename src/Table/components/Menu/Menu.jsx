import React from "react";
import ColorCell from "./ColorCell";
import ColorText from "./ColorText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";

function Menu(props) {
  const handleColorChange = (color) => {
    props.onColorChange(color);
  };
  const handleTextColor = (color) => {
    props.onTextColorChange(color);
  };

  return (
    <div className="flex mt-24 w-[2626px] z-10 top-24 sticky border-y border-black bg-white p-2 ">
      <div className="mt-1 font-bold">background:</div>
      <ColorCell onColorChange={handleColorChange} />
      <div className="mt-1 font-bold">font:</div>
      <ColorText onTextColorChange={handleTextColor} />
      <div className="mt-1 ml-4 font-bold text-gray-400">|</div>
      <button
        className="font-bold text-lg mx-4 hover:bg-blue-400 px-2"
        onClick={props.onBoldButtonClick}
      >
        B
      </button>
      <button
        className="font-bold text-lg hover:bg-blue-400 px-2 underline"
        onClick={props.onUnderlineClick}
      >
        U
      </button>
      <button
        className="font-bold text-lg mx-2 italic hover:bg-blue-400 px-2"
        onClick={props.onItalicClick}
      >
        I
      </button>
      <div className="mt-1 ml-4 font-bold text-gray-400">|</div>
      <button onClick={() => props.onTextAlignChange("left")} className="mx-4 ">
        <FontAwesomeIcon icon={faAlignLeft} size="lg" />
      </button>
      <button
        className="mx-2"
        onClick={() => props.onTextAlignChange("center")}
      >
        <FontAwesomeIcon icon={faAlignCenter} size="lg" />
      </button>
      <button className="mx-4" onClick={() => props.onTextAlignChange("right")}>
        <FontAwesomeIcon icon={faAlignRight} size="lg" />
      </button>
    </div>
  );
}

export default Menu;
