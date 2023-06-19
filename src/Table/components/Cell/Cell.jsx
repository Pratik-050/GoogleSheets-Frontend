import React, { useState, useRef, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CellValueState } from "../../store/CellValueState";
import classes from "./Cell.module.css";
import { EvaluatedCellValueState } from "../../store/EvaluatedCellValueState";

export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 25;

function Cell(props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [cellValue, setCellValue] = useRecoilState(
    CellValueState(props.cellId)
  );
  const inputRef = useRef(null);

  const changeLabelToInput = () => setIsEditMode(true);
  const changeInputToLabel = () => setIsEditMode(false);

  const evaluatedCellValueState = useRecoilValue(
    EvaluatedCellValueState(props.cellId)
  );

  const onClickOutsideInputHandler = (event) => {
    if (event.target?.dataset?.cellId !== props.cellId) {
      changeInputToLabel();
    }
  };

  const updateCellValueState = (event) => setCellValue(event.target.value);

  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);

    return () => {
      document.removeEventListener("click", onClickOutsideInputHandler);
    };
  });

  return isEditMode ? (
    <input
      className={classes.CellInput}
      ref={inputRef}
      value={cellValue}
      data-cell-id={props.cellId}
      onChange={updateCellValueState}
    />
  ) : (
    <div
      className={classes.CellLabel}
      onClick={changeLabelToInput}
      data-cell-id={props.cellId}
    >
      {evaluatedCellValueState}
    </div>
  );
}

export default Cell;
