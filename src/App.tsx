// App.tsx
import React, { useState } from "react";
import styled from "styled-components";
import MonthDropdown from "./components/MonthDropdown";
import CountryDropdown from "./components/CountryDropdown";
import Calendar from "./components/Calendar";
import { MONTH_ARRAY, COUNTRIES } from "./constants";

const Container = styled.div`
  margin: 32px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const CURRENT_DATE = new Date();
const CURRENT_MONTH_IDX = CURRENT_DATE.getMonth();
const CURRENT_MONTH = MONTH_ARRAY[CURRENT_MONTH_IDX];

function App() {
  const [selectedMonth, setSelectedMonth] = useState<string>(CURRENT_MONTH);
  const [selectedCountry1, setSelectedCountry1] = useState<string>("US");
  const [selectedCountry2, setSelectedCountry2] = useState<string>("FR");

  return (
    <Container>
      <Flex>
        <MonthDropdown
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <b>2024</b>
      </Flex>
      <Flex>
        <CountryDropdown
          selectedCountry={selectedCountry1}
          setSelectedCountry={setSelectedCountry1}
          countries={COUNTRIES}
        />
        <CountryDropdown
          selectedCountry={selectedCountry2}
          setSelectedCountry={setSelectedCountry2}
          countries={COUNTRIES}
        />
      </Flex>
      <Calendar 
        selectedMonth={selectedMonth}
        country1={selectedCountry1}
        country2={selectedCountry2}
      />
    </Container>
  );
}

export default App;
