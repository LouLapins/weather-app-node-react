import { ITimeInterval } from "./ITimeInterval";

export interface IData {
  approvedTime: string;
  referenceTime: string;
  coordinates: string;
  timeIntervals: [ITimeInterval];
}
