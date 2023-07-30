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

  const changeLabelToInput = () => {
    setIsEditMode(true);
    props.onCellSelect(props.cellId);
  };

  const changeInputToLabel = () => {
    setIsEditMode(false);
  };

  const evaluatedCellValueState = useRecoilValue(
    EvaluatedCellValueState(props.cellId)
  );

  const onClickOutsideInputHandler = (event) => {
    if (event.target?.dataset?.cellId !== props.cellId) {
      changeInputToLabel();
    }
  };

  const updateCellValueState = (event) => setCellValue(event.target.value);

  // const handleKeyDown = (event) => {
  //   console.log(event.key);
  //   if (
  //     event.key === "ArrowUp" ||
  //     event.key === "ArrowDown" ||
  //     event.key === "Enter"
  //   ) {
  //     event.preventDefault();
  //     changeInputToLabel();
  //     const nextCellId = getNextCellId(event.key);
  //     if (nextCellId) {
  //       const nextCell = document.querySelector(
  //         `[data-cell-id="${nextCellId}"]`
  //       );
  //       if (nextCell) {
  //         nextCell.click();
  //       }
  //     }
  //   }
  // };

  // const getNextCellId = (key) => {
  //   const currentCellId = props.cellId;
  //   const currentCellRow = parseInt(currentCellId.split(",")[0]);
  //   const currentCellColumn = parseInt(currentCellId.split(",")[1]);

  //   let nextCellRow = currentCellRow;
  //   let nextCellColumn = currentCellColumn;

  //   const maxRow = 31;
  //   const maxColumn = 25;

  //   if (key === "ArrowUp") {
  //     nextCellRow = Math.max(currentCellRow - 1, 0);
  //   } else if (key === "ArrowDown") {
  //     nextCellRow = Math.min(currentCellRow + 1, maxRow);
  //   } else if (key === "Enter") {
  //     nextCellColumn = Math.min(currentCellColumn + 1, maxColumn);
  //   }

  //   const nextCellId = `${nextCellRow},${nextCellColumn}`;
  //   const nextCell = document.querySelector(`[data-cell-id="${nextCellId}"]`);
  //   if (nextCell) {
  //     return nextCellId;
  //   }

  //   return null;
  // };

  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);
    // document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", onClickOutsideInputHandler);
      // document.removeEventListener("keydown", handleKeyDown);
    };
  });

  // useEffect(() => {
  //   if (isEditMode && inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, [isEditMode]);

  return isEditMode ? (
    <input
      className={classes.CellInput}
      ref={inputRef}
      value={cellValue}
      data-cell-id={props.cellId}
      onChange={updateCellValueState}
      // onKeyDown={handleKeyDown}
      style={{
        backgroundColor: props.cellColor,
        color: props.textColor,
        fontWeight: props.textBold,
        textDecoration: props.textUnderline,
        fontStyle: props.textItalic,
        textAlign: props.textAlign,
      }}
    />
  ) : (
    <div
      className={classes.CellLabel}
      onClick={changeLabelToInput}
      data-cell-id={props.cellId}
      style={{
        backgroundColor: props.cellColor,
        color: props.textColor,
        fontWeight: props.textBold,
        textDecoration: props.textUnderline,
        fontStyle: props.textItalic,
        textAlign: props.textAlign,
      }}
    >
      {evaluatedCellValueState}
    </div>
  );
}

export default Cell;
