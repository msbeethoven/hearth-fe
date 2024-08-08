import React, { useEffect, useState } from "react";
import axios from "axios";
import { DAYS_OF_WEEK, DAYS_IN_MONTH, MONTH_ARRAY } from "../constants";
import CalendarCell from "./CalendarCell";
import styled from "styled-components";

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

interface CalendarProps {
  selectedMonth: string;
  country1: string;
  country2: string;
}

function Calendar({ selectedMonth, country1, country2 }: CalendarProps) {
  const [holidays, setHolidays] = useState<{ [key: number]: any[] }>({});

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get(`https://date.nager.at/api/v3/publicholidays/2024/${country1}`),
          axios.get(`https://date.nager.at/api/v3/publicholidays/2024/${country2}`),
        ]);

        const data1 = response1.data;
        const data2 = response2.data;
        const allHolidays = [...data1, ...data2];
        const selectedMonthIndex = MONTH_ARRAY.indexOf(selectedMonth);
        const filteredHolidays: { [key: number]: any[] } = {};

        allHolidays.forEach((holiday: any) => {
          const holidayDate = new Date(holiday.date);
          const utcDate = new Date(Date.UTC(
            holidayDate.getUTCFullYear(),
            holidayDate.getUTCMonth(),
            holidayDate.getUTCDate()
          ));

          if (utcDate.getUTCMonth() === selectedMonthIndex) {
            const day = utcDate.getUTCDate();
            if (!filteredHolidays[day]) filteredHolidays[day] = [];
            filteredHolidays[day].push(holiday);
          }
        });

        setHolidays(filteredHolidays);

        // Log the holidays object
        console.log("Filtered holidays:", filteredHolidays);
      } catch (error) {
        console.error("Error fetching holidays", error);
      }
    };

    fetchHolidays();
  }, [selectedMonth, country1, country2]);

  // Correctly determine the first day of the month
  const monthIndex = MONTH_ARRAY.indexOf(selectedMonth);
  const year = 2024; // Ensure this is the correct year
  let firstDay = new Date(Date.UTC(year, monthIndex, 1)).getDay(); // Get the day of the week

  // Log the first day value to check
  console.log("First day of the month (index) before adjustment:", firstDay); // Index of the week (0-6)

  // Manually adjust the first day (push back by one day)
  firstDay = (firstDay + 1) % 7; // Shift forward by one day and wrap around if needed
  console.log("First day of the month (index) after adjustment:", firstDay);

  const daysInMonth = DAYS_IN_MONTH[selectedMonth];

  const cells = [];
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    cells.push(<CalendarCell key={`empty-${i}`} empty />);
  }

  // Add cells for each day in the month
  for (let date = 1; date <= daysInMonth; date++) {
    cells.push(<CalendarCell key={date} date={date} holidays={holidays[date]} />);
  }

  return (
    <div>
      <CalendarGrid>
        {DAYS_OF_WEEK.map((day) => (
          <div key={day}>{day}</div>
        ))}
        {cells}
      </CalendarGrid>
    </div>
  );
}

export default Calendar;




