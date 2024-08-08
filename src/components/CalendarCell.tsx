// CalendarCell.tsx
import React from "react";
import styled from "styled-components";

interface CalendarCellProps {
  date?: number;
  holidays?: any[];
  empty?: boolean;
}

const Cell = styled.div<{ empty: boolean }>`
  padding: 8px;
  background-color: ${(props) => (props.empty ? "#f0f0f0" : "#fff")};
  border: 1px solid #ddd;
  height: 100px;
  overflow: auto;
`;

const Holiday = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;

function CalendarCell({ date, holidays, empty = false }: CalendarCellProps) {
  return (
    <Cell empty={empty}>
      {date}
      {/* {console.log('nanette', holidays[0])} */}
      {holidays && holidays.map((holiday, index) => (
        <Holiday key={index} color={index === 0 ? 'red' : 'blue'}>
          {holiday.localName}
        </Holiday>
      ))}
    </Cell>
  );
}

export default CalendarCell;
