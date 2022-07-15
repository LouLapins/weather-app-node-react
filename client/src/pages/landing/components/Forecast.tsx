import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { format, parse } from "date-fns";
import { IData } from "../../../interfaces/IData";
import Table from "../../../components/table/Table";
import TableRow from "../../../components/table/TableRow";
import WeatherIcon from "../../../components/icons/WeatherIcon";
import TabButtons from "../../../components/tabs/TabButtons";
import TabPanels from "../../../components/tabs/TabPanels";
import BookmarkButton from "./BookmarkButton";

interface ITabGroupProps {
  data: IData;
}

export default function TabGroup(props: ITabGroupProps) {
  const dateStrings = props.data.dates;

  const dates = dateStrings.map((date) =>
    parse(date, "yyyy-MM-dd", new Date())
  );

  const [selectedDate, setSelectedDate] = useState(dateStrings[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const storedDate = localStorage.getItem("storedDate");
  const [bookmarkedDate, setBookmarkedDate] = useState(storedDate);

  function changeDate(index: number) {
    setSelectedDate(dateStrings[index]);
    setSelectedIndex(index);
  }

  function saveBookmark() {
    setBookmarkedDate(selectedDate);
    localStorage.setItem("storedDate", selectedDate);
  }

  function getBookmark() {
    if (!storedDate || storedDate === null) {
      alert("You have no bookmarks.");
    }
    if (storedDate && dateStrings.includes(storedDate)) {
      const index = dateStrings.indexOf(storedDate);
      changeDate(index);
    } else {
      alert(
        "Sorry! The forecast you bookmarked is no longer available from the API."
      );
    }
  }

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={changeDate}>
      <div className="flex justify-between my-3 bg-white rounded-md md:bg-transparent md:flex-col bg-opacity-20">
        <BookmarkButton
          hasBookmark={bookmarkedDate}
          title="Save date"
          onClick={saveBookmark}
        />
        {bookmarkedDate && (
          <BookmarkButton
            hasBookmark={bookmarkedDate}
            title="Open saved"
            onClick={getBookmark}
          />
        )}
      </div>
      <div className="flex min-h-screen md:pt-8">
        <TabButtons tabArray={dates}>
          {(tab: Date) => (
            <span>
              {format(tab, "EEEE")}
              <span className="block text-sm font-light md:ml-4 md:inline">
                {format(tab, "d MMM")}
              </span>
            </span>
          )}
        </TabButtons>
        <TabPanels tabArray={dates}>
          <Table theaders={["Time", "Weather", "Celsius", "Precipitation"]}>
            {props.data.forecastsByDate[selectedDate].map((row) => (
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
