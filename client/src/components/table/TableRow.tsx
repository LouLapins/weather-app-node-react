import React from "react";

interface ITableRowProps {
  children?: React.ReactNode;
}

export default function TableRow(props: ITableRowProps) {
  return (
    <tr className="h-10 text-sm border-b border-zinc-700">
        {props.children}
    </tr>
  );
}