import { render, screen } from "@testing-library/react";
import CalendarCell from "./CalendarCell";

test("renders CalendarCell with holidays", () => {
  const holidays = [
    { localName: "Holiday 1", countryCode: "FR" },
    { localName: "Holiday 2", countryCode: "VE" },
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
