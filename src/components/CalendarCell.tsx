import React from "react";
import { Cell, Holiday } from "../styles/CalendarCell.styles";

interface CalendarCellProps {
  date?: number;
  holidays?: any[];
  empty?: boolean;
}

function CalendarCell({ date, holidays, empty = false }: CalendarCellProps) {
  return (
    <Cell empty={empty}>
      {date}
      {holidays && holidays.map((holiday, index) => (
        <Holiday key={index} color={index === 0 ? 'red' : 'blue'}>
          {holiday.localName}
        </Holiday>
      ))}
    </Cell>
  );
}

export default CalendarCell;
