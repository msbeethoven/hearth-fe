import { render, screen, fireEvent } from "@testing-library/react";
import CountryDropdown from "./CountryDropdown";

test("changes the selected country on dropdown selection", () => {
  const handleChange = jest.fn();
  render(
    <CountryDropdown
      selectedCountry="FR"
      setSelectedCountry={handleChange}
      countries={[{ code: "FR", name: "France" }, { code: "VE", name: "Venezuela" }]}
    />
  );

  fireEvent.change(screen.getByRole("combobox"), { target: { value: "VE" } });
  expect(handleChange).toHaveBeenCalledWith("VE");
});
