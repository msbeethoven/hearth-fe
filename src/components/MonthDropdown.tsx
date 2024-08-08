import React from "react";
import { MONTH_ARRAY } from "../constants";
import { Select } from "../styles/MonthDropdown.styles";

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
