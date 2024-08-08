// import React from "react";
// import { Select } from "../styles/CountryDropdown.styles";

// interface Props {
//   selectedCountry: string;
//   setSelectedCountry: (value: string) => void;
//   countries: { code: string; name: string }[];
// }

// function CountryDropdown({ selectedCountry, setSelectedCountry, countries }: Props) {
//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
//     setSelectedCountry(e.target.value);
//   };

//   return (
//     <Select
//       value={selectedCountry}
//       onChange={handleChange}
//       aria-label="Country"
//     >
//       {countries.map((country) => (
//         <option key={country.code} value={country.code}>
//           {country.name}
//         </option>
//       ))}
//     </Select>
//   );
// }

// export default CountryDropdown;

import React from "react";
import { Select } from "../styles/CountryDropdown.styles";

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
    <Select
      aria-label="Country"
      value={selectedCountry}
      onChange={handleChange}
    >
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </Select>
  );
}

export default CountryDropdown;
