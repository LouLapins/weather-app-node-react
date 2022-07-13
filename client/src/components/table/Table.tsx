import React from "react";

interface ITableProps {
  theaders: string[];
  children?: React.ReactNode;
}

export default function Table(props: ITableProps) {
  return (
    <table className="mt-2 ml-4 text-left md:ml-16">
      <thead>
        <tr >
          {props.theaders.map((theading) => (
            <th className="w-1/4 pr-4 m-auto text-xs font-light" 
            key={theading}>
                {theading}
                </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}
