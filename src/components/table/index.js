import { getGridCellStyle } from "../../helper/grid";
import Cell from "./cell";
import "./table.css";

export default function Table({ titles, items }) {
  return (
    <div className="table">
      {titles.map((title, idx) => (
        <div
          key={title}
          style={getGridCellStyle(1, idx + 1)}
          className="table-head-item"
        >
          {title}
        </div>
      ))}
      {items.map((row, rowIdx) =>
        row.map((cell, cellIdx) => (
          <Cell
            row={rowIdx + 2}
            column={cellIdx + 1}
            isOdd={rowIdx % 2 === 0}
            key={rowIdx + "" + cellIdx}
          >
            {cell}
          </Cell>
        ))
      )}
    </div>
  );
}
