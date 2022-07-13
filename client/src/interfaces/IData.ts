import { ITimeInterval } from "./ITimeInterval";

export interface IData {
  approvedTime: string;
  referenceTime: string;
  coordinates: string;
  groupedByDate: {
    [date: string]: ITimeInterval[];
  };
}
