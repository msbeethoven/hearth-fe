import { render, screen, fireEvent } from "@testing-library/react";
import MonthDropdown from "./MonthDropdown";

test("changes the selected month on dropdown selection", () => {
  const handleChange = jest.fn();
  render(
    <MonthDropdown
      selectedMonth="January"
      setSelectedMonth={handleChange}
    />
  );

  fireEvent.change(screen.getByRole("combobox"), { target: { value: "February" } });
  expect(handleChange).toHaveBeenCalledWith("February");
});
