import React from "react";
import Column from "../Column/Column";
import Row from "../Row/Row";
import AxisCell from "../AxisCell/AxisCell";
import Cell, { CELL_HEIGHT, CELL_WIDTH } from "../Cell/Cell";
import "./Sheet.css";
import { useRecoilValue } from "recoil";
import { SheetSizeState } from "../../store/SheetSizeState";
import { numberToChar } from "../../utils/numberToChar";
import { CellColorState } from "../../store/CellColorState";

const Sheet = (props) => {
  const sheetSize = useRecoilValue(SheetSizeState);
  const cellColor = useRecoilValue(CellColorState);

  const numberOfColumns = Math.ceil(sheetSize.width / CELL_WIDTH);
  const numberOfRows = Math.ceil(sheetSize.height / CELL_HEIGHT);

  return (
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
                    cellColor={cellColor}
                  />
                </Column>
              ))}
            </Row>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sheet;
