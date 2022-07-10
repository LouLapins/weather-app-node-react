import React from "react";

interface ITimeIntervalProps {
  date: string;
  time: string;
  temperature: number;
  precipitation: number;
}

export default function TimeInterval(props: ITimeIntervalProps) {
  return (
    <div className="flex p-8 m-1 border-black border">
      <p className="mx-16">{props.date}</p>
      <p className="mx-16">{props.time}</p>
      <p className="mx-16">{props.temperature}</p>
      <p className="mx-16">{props.precipitation} mm/h</p>
    </div>
  );
}
