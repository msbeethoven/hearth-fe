import { render, screen } from "@testing-library/react";
import Calendar from './Calendar';

test.skip("renders the Calendar component with the correct month and countries", () => {
  render(
    <Calendar
      selectedMonth="October"
      country1="FR"
      country2="VE"
    />
  );

  expect(screen.getByText("October")).toBeInTheDocument();
  expect(screen.getByText("Sunday")).toBeInTheDocument();
  expect(screen.getByText("Monday")).toBeInTheDocument();
});
