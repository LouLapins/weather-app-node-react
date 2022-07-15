import { ITimeInterval } from "./ITimeInterval";

export interface IForecasts {
  [date: string]: ITimeInterval[];
}
