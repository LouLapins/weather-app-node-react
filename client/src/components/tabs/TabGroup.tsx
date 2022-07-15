import { Tab } from "@headlessui/react";
import { format } from "date-fns";
import React from "react";
import { IForecasts } from "../../interfaces/IForecasts";
import { ITimeInterval } from "../../interfaces/ITimeInterval";
import WeatherIcon from "../icons/WeatherIcon";
import Table from "../table/Table";
import TableRow from "../table/TableRow";
import TabButtons from "./TabButtons";
import TabPanels from "./TabPanels";

interface ITabGroupProps {
    onChange: (index: number) => void;
    selectedIndex: number;
    selectedDate: string;
    dates: Date[];
    forecasts: IForecasts;
}

export default function TabGroup(props: ITabGroupProps) {
  return (
    <Tab.Group selectedIndex={props.selectedIndex} onChange={props.onChange}>
      <TabButtons tabArray={props.dates}>
        {(tab: Date) => (
          <span>
            {format(tab, "EEEE")}
            <span className="block text-sm font-light md:ml-4 md:inline">
              {format(tab, "d MMM")}
            </span>
          </span>
        )}
      </TabButtons>
      <TabPanels tabArray={props.dates}>
        <Table theaders={["Time", "Weather", "Celsius", "Precipitation"]}>
          {props.forecasts[props.selectedDate].map((row: ITimeInterval) => (
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
    </Tab.Group>
  );
}
