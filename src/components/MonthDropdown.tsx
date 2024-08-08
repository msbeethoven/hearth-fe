//MonthDropdown.tsx
import React from "react";
import styled from "styled-components";
import { MONTH_ARRAY } from "../constants";

const Select = styled.select`
  height: 40px;
  width: 160px;
  font-size: 20px;
`;

interface Props {
  selectedMonth: string;
  setSelectedMonth: (value: string) => void;
}

function MonthDropdown({ selectedMonth, setSelectedMonth }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedMonth(e.target.value);
  };

  return (
    <Select value={selectedMonth} onChange={handleChange}>
      {MONTH_ARRAY.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </Select>
  );
}

export default MonthDropdown;
