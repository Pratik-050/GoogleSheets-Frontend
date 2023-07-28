import React, { useState } from "react";
import Column from "../Column/Column";
import Row from "../Row/Row";
import AxisCell from "../AxisCell/AxisCell";
import Cell, { CELL_HEIGHT, CELL_WIDTH } from "../Cell/Cell";
import "./Sheet.css";
import { useRecoilValue } from "recoil";
import { SheetSizeState } from "../../store/SheetSizeState";
import { numberToChar } from "../../utils/numberToChar";
// import { CellColorState } from "../../store/CellColorState";
import Menu from "../Menu/Menu";

const Sheet = (props) => {
  const sheetSize = useRecoilValue(SheetSizeState);
  // const cellColor = useRecoilValue(CellColorState);
  const [cellColors, setCellColors] = useState({});
  const [cellTextColors, setCellTextColors] = useState({});
  const [boldCells, setBoldCells] = useState({});
  const [underlinedCells, setUnderlinedCells] = useState({});
  const [italicCells, setItalicCells] = useState({});
  const [selectedCell, setSelectedCell] = useState({
    cellId: null,
    cellColor: "white",
  });

  const handleColorChange = (color) => {
    setCellColors((prevCellColors) => {
      return { ...prevCellColors, [selectedCell]: color };
    });
  };

  const handleTextColorChange = (color) => {
    setCellTextColors((prevCellTextColors) => {
      return { ...prevCellTextColors, [selectedCell]: color };
    });
  };

  const handleCellSelect = (cellId) => {
    setSelectedCell(cellId);
  };

  const handleBoldButtonClick = () => {
    setBoldCells((prevBoldCells) => {
      if (prevBoldCells[selectedCell] === "bold") {
        return { ...prevBoldCells, [selectedCell]: "normal" };
      }
      return { ...prevBoldCells, [selectedCell]: "bold" };
    });
  };

  const handleUnderlineButtonClick = () => {
    setUnderlinedCells((prevUnderlinedCells) => {
      return prevUnderlinedCells[selectedCell] === "underline"
        ? { ...prevUnderlinedCells, [selectedCell]: "none" }
        : { ...prevUnderlinedCells, [selectedCell]: "underline" };
    });
  };

  const handleItalicButtonClick = () => {
    setItalicCells((prevItalicCells) => {
      return prevItalicCells[selectedCell] === "italic"
        ? { ...prevItalicCells, [selectedCell]: "normal" }
        : { ...prevItalicCells, [selectedCell]: "italic" };
    });
  };

  const numberOfColumns = Math.ceil(sheetSize.width / CELL_WIDTH);
  const numberOfRows = Math.ceil(sheetSize.height / CELL_HEIGHT);

  return (
    <div>
      <Menu
        onColorChange={handleColorChange}
        onTextColorChange={handleTextColorChange}
        onBoldButtonClick={handleBoldButtonClick}
        onUnderlineClick={handleUnderlineButtonClick}
        onItalicClick={handleItalicButtonClick}
      />
      <div className="SheetWrapper">
        <table className="Sheet">
          <tbody>
            <Row>
              {[...Array(numberOfColumns + 1)].map((column, columnIndex) =>
                columnIndex !== 0 ? (
                  <AxisCell key={columnIndex}>
                    {numberToChar(columnIndex - 1)}
                  </AxisCell>
                ) : (
                  <AxisCell key={columnIndex} />
                )
              )}
            </Row>
            {[...Array(numberOfRows)].map((row, rowIndex) => (
              <Row key={rowIndex}>
                <AxisCell>{rowIndex + 1}</AxisCell>
                {[...Array(numberOfColumns)].map((column, columnIndex) => (
                  <Column key={columnIndex}>
                    <Cell
                      cellId={`${rowIndex},${columnIndex}`}
                      cellColor={
                        cellColors[`${rowIndex},${columnIndex}`] || "white"
                      }
                      textColor={
                        cellTextColors[`${rowIndex},${columnIndex}`] || "black"
                      }
                      textBold={
                        boldCells[`${rowIndex},${columnIndex}`] || "normal"
                      }
                      textUnderline={
                        underlinedCells[`${rowIndex},${columnIndex}`] || "none"
                      }
                      textItalic={
                        italicCells[`${rowIndex},${columnIndex}`] || "normal"
                      }
                      onCellSelect={handleCellSelect}
                    />
                  </Column>
                ))}
              </Row>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sheet;
