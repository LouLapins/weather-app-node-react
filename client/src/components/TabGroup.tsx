import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { format, formatISO } from "date-fns";
import { ITimeInterval } from "../interfaces/ITimeInterval";
import TimeInterval from "./TimeInterval";
import { IData } from "../interfaces/IData";
import { addDays, toDate } from "date-fns";

interface ITabGroupProps {
  data: IData;
}

export default function TabGroup(props: ITabGroupProps) {
  let today = new Date();
  let tenDaysFromToday = addDays(today, 10);

  let days: Date[] = [];
  let day = today;

  while (day <= tenDaysFromToday) {
    days.push(toDate(day));
    day = addDays(day, 1);
  }
  const [chosenDay, setChosenDay] = useState(days[0]);

  function changeDate(index: number) {
    setChosenDay(days[index]);
  }

  let dateString = format(chosenDay, "yyyy-MM-dd");

  return (
    <Tab.Group onChange={changeDate}>
      <Tab.List className="flex p-1 space-x-1 rounded-xl bg-blue-900/20">
        {days.map((day) => {
          return <Tab key={formatISO(day)}
          className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">
            <span className="block">{format(day, "EEEE")}</span>
            <span>{format(day, "d MMM")}</span>
            </Tab>;
        })}
      </Tab.List>
      <Tab.Panels>
        {days.map((day) => {
          return (
            <Tab.Panel key={formatISO(day)}>
              {props.data.groupedByDate[dateString].map((t: ITimeInterval) => {
                return (
                  <TimeInterval
                    key={t.time}
                    date={t.date}
                    time={t.time}
                    temperature={t.temperatureCelsius}
                    precipitation={t.precipitation}
                  ></TimeInterval>
                );
              })}
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
}
