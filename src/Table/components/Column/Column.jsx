import React from "react";
import "./Column.css";
function Column(props) {
  return <td className="Column">{props.children}</td>;
}

export default Column;
