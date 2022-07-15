import React from "react";
import { formatRelative, parseISO } from "date-fns";

interface IForecastIssuedProps {
  date: string;
}

export default function ForecastIssued(props: IForecastIssuedProps) {
    const approvedTime = parseISO(props.date)
  return (
    <p className="text-xs font-thin md:text-sm text-end">
      Forecast was issued {formatRelative(approvedTime, new Date())}
    </p>
  );
}
