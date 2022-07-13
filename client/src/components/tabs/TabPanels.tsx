import React from "react";
import { Tab } from "@headlessui/react";

interface ITabButtonsProps {
  tabArray: Date[] | string[] | number[];
  children?: React.ReactNode;
}

export default function TabPanels(props: ITabButtonsProps) {
  return (
    <Tab.Panels className="w-4/5 md:w-2/3">
      {props.tabArray.map((tab, index: number) => (
        <Tab.Panel key={index} className="w-full m-auto">
          {props.children}
        </Tab.Panel>
      ))}
    </Tab.Panels>
  );
}
