import React from "react";
import { Tab } from "@headlessui/react";

interface ITabButtonsProps {
  tabArray: Date[] | string[] | number[];
  children?: React.ReactNode;
}

export default function TabButtons(props: ITabButtonsProps) {
  return (
    <Tab.List className="w-1/4 min-h-screen md:pr-8 md:border-white md:border-r md:w-1/3">
      {props.tabArray.map((tab, index: number) => (
        <Tab
          key={index}
          className={({ selected }) =>
            `${
              selected
                ? "bg-white text-sky-700 shadow"
                : "text-white hover:bg-white/[0.12] hover:text-white"
            } w-full rounded-lg md:text-lg mb-1 md:mb-4 py-2 px-2 md:px-4 text-left md:text-right text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2  ring-offset-sky-400 focus:outline-none focus:ring-2`
          }
        >
          {props.children}
        </Tab>
      ))}
    </Tab.List>
  );
}
