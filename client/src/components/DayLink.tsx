import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface IDayLinkProps {
  date: Date;
}

export default function Day(props: IDayLinkProps) {
  return (
    <Link to={`/${format(props.date, "yyyy-MM-dd")}`}>
      {format(props.date, "EEEE d MMM")}
    </Link>
  );
}
