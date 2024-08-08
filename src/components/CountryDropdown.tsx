// CountryDropdown.tsx
import React from "react";
import styled from "styled-components";

const Select = styled.select`
  height: 40px;
  width: 160px;
  font-size: 20px;
`;

interface Props {
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  countries: { code: string; name: string }[];
}

function CountryDropdown({ selectedCountry, setSelectedCountry, countries }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCountry(e.target.value);
  };

  return (
    <Select value={selectedCountry} onChange={handleChange}>
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </Select>
  );
}

export default CountryDropdown;
