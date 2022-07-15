import React, { useState } from "react";
import { parse } from "date-fns";
import { IData } from "../../../interfaces/IData";
import BookmarkButton from "./BookmarkButton";
import ForecastIssued from "./ForecastIssued";
import TabGroup from "../../../components/tabs/TabGroup";

interface IForecastProps {
  data: IData;
}

export default function Forecast(props: IForecastProps) {
  const dateStrings = props.data.dates;

  const dates = dateStrings.map((date) =>
    parse(date, "yyyy-MM-dd", new Date())
  );

  const storedDate = localStorage.getItem("storedDate");
  const [selectedDate, setSelectedDate] = useState(dateStrings[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
      alert("Sorry! The forecast you bookmarked is no longer available from the API.");
    }
  }

  return (
    <>
      <div className="flex justify-between my-4 bg-white rounded-md md:my-0 md:bg-transparent md:flex-col bg-opacity-20">
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
        <TabGroup
          onChange={changeDate}
          selectedIndex={selectedIndex}
          selectedDate={selectedDate}
          dates={dates}
          forecasts={props.data.forecastsByDate}
        />
      </div>
      <ForecastIssued date={props.data.approvedTime} />
    </>
  );
}
