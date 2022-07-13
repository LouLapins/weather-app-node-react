import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { format } from "date-fns";
import { IData } from "../../interfaces/IData";
import { addDays, toDate } from "date-fns";
import Table from "../table/Table";
import TableRow from "../table/TableRow";
import WeatherIcon from "../icons/WeatherIcon";
import TabButtons from "./TabButtons";
import TabPanels from "./TabPanels";

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
      <div className="flex min-h-screen pt-4 md:p-16">
        <TabButtons tabArray={days}>
          <span>{format(day, "EEEE")}</span>
          <span className="block text-sm font-light md:ml-4 md:inline">
            {format(day, "d MMM")}
          </span>
        </TabButtons>
        <TabPanels tabArray={days}>
          <Table theaders={["Time", "Weather", "Celsius", "Precipitation"]}>
            {props.data.groupedByDate[dateString].map((row) => (
              <TableRow key={row.time}>
                <td>{row.time}</td>
                <td>
                  <WeatherIcon value={row.weatherSymbol} />
                </td>
                <td>{row.temperatureCelsius}&#176;</td>
                <td>
                  {row.precipitation} <span className="text-xs">mm/h</span>
                </td>
              </TableRow>
            ))}
          </Table>
        </TabPanels>
      </div>
    </Tab.Group>
  );
}
