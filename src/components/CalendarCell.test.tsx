import { render, screen } from "@testing-library/react";
import CalendarCell from "./CalendarCell";

test("renders CalendarCell with holidays", () => {
  const holidays = [
    { localName: "Holiday 1", countryCode: "FR", date: "2024-1-1" },
    { localName: "Holiday 2", countryCode: "VE", date: "2024-1-1" },
  ];

  render(
    <CalendarCell
      date={1}
      holidays={holidays}
    />
  );

  expect(screen.getByText("Holiday 1")).toHaveStyle("color: red");
  expect(screen.getByText("Holiday 2")).toHaveStyle("color: blue");
});
