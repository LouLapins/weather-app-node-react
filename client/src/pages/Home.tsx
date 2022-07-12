import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { addDays, toDate, format } from "date-fns";
import { ITimeInterval } from "../interfaces/ITimeInterval";
import { Tab } from "@headlessui/react";
import TimeInterval from "../components/TimeInterval";

export default function Home() {
  let today = new Date();
  let tenDaysFromToday = addDays(today, 10);

  let days: Date[] = [];
  let day = today;

  while (day <= tenDaysFromToday) {
    days.push(toDate(day));
    day = addDays(day, 1);
  }

  const [chosenDay, setChosenDay] = useState(days[0]);

  const { data, error, loading } = useFetch("/weather/all");

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;

  function changeDate(index: number) {
    setChosenDay(days[index]);
  }

  return (
    <div>
      <Tab.Group onChange={changeDate}>
        <Tab.List>
          {days.map((day, index: number) => {
            return <Tab key={index}>{format(day, "EEEE d MMM")}</Tab>;
          })}
        </Tab.List>
        <Tab.Panels>
          {days.map((day, index: number) => {
            return <Tab.Panel key={index}>
              {data && data.groupedByDate[format(chosenDay, "yyyy-MM-dd")].map((t: ITimeInterval, index: number) => {
                return <TimeInterval key={index} date={t.date} time={t.time} temperature={t.temperatureCelsius} precipitation={t.precipitation}></TimeInterval>
              })}
            </Tab.Panel>;
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
