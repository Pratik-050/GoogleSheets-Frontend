import { cellIdtoMatrixIndices } from "./cellIdtoMatrixIndices";
import { CellValueState } from "../store/CellValueState";

export const getEquationExpressionFromState = (
  getState,
  expression,
  notAllowedCellsIds = []
) => {
  const filterFoundCells = notAllowedCellsIds.filter((cellId) =>
    expression.includes(cellId)
  );

  if (filterFoundCells.length) {
    return "!ERROR";
  }

  const cellValues = [...Array.from(expression.matchAll(/[A-Z]+[0-9]+/gi))]
    .map((regrexOutput) => regrexOutput[0])
    .map((cellId) => {
      const { row, column } = cellIdtoMatrixIndices(cellId);

      let value = "";

      try {
        value = getState(CellValueState(`${row},${column}`)) || 0;

        if (value.startsWith("=")) {
          notAllowedCellsIds.push(cellId);
          value = getEquationExpressionFromState(
            getState,
            value.slice(1),
            notAllowedCellsIds
          );
        }
      } catch {}

      return {
        cellId,
        value,
      };
    });

  const evaluatedExpression = cellValues.reduce(
    (finalExpression, cellValue) =>
      finalExpression.replaceAll(cellValue.cellId, cellValue.value.toString()),
    expression
  );

  return `(${evaluatedExpression})`;
};
