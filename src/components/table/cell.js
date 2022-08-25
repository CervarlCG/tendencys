import { getGridCellStyle } from "../../helper/grid";

export default function Cell({ row, column, isOdd, children }) {
  return (
    <div
      style={getGridCellStyle(row, column)}
      className={"table-cell " + (isOdd ? "cell-odd" : "cell-even")}
    >
      {children}
    </div>
  );
}
