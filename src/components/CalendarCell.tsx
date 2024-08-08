import React from "react";
import { Cell, Holiday } from "../styles/CalendarCell.styles";


interface CalendarCellProps {
  date?: number;
  holidays?: any[];
  countryCode?: string;
  empty?: boolean;
}

function CalendarCell({ date, holidays, countryCode, empty = false }: CalendarCellProps) {

  return ( 
    <Cell empty={empty}>
      {date}

      {holidays && holidays.map((holiday, index) => (
        <Holiday key={index} color={ holiday.countryCode === countryCode ? 'red' : 'blue'}>
          {holiday.localName} 
        </Holiday>
      ))}
    </Cell>
  );
}

export default CalendarCell;
