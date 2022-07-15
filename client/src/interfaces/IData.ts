import { ITimeInterval } from "./ITimeInterval";

export interface IData {
  approvedTime: string;
  referenceTime: string;
  coordinates: string;
  dates: string[];
  forecastsByDate: {
    [date: string]: ITimeInterval[];
  };
}
