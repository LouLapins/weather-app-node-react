import React from "react";
import { addDays, toDate } from "date-fns";
import DayLink from "./DayLink";


export default function Days() {
  let today = new Date();
  let tenDaysFromToday = addDays(today, 10);

  let days = [];
  let day = today;

  while (day <= tenDaysFromToday) {
    days.push(toDate(day));
    day = addDays(day, 1);
  }

  return (
<div>
 {days.map((day, index:number) => {
  return <DayLink key={index} date={day}></DayLink>
 })}
</div>
  );
}
