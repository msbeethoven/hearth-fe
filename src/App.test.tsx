import { render, screen } from "@testing-library/react";
import App from "./App";

test.skip("renders App component with calendar", () => {
  render(<App />);

  // Dropdowns
  expect(screen.getByRole("combobox", { name: /month/i })).toBeInTheDocument();
  expect(screen.getByRole("combobox", { name: /country/i })).toBeInTheDocument();

  // Grid
  expect(screen.getByText("Sunday")).toBeInTheDocument();
  expect(screen.getByText("Monday")).toBeInTheDocument();
});
