import { IForecasts } from "./IForecasts";

export interface IData {
  approvedTime: string;
  referenceTime: string;
  coordinates: string;
  dates: string[];
  forecastsByDate: IForecasts;
}
