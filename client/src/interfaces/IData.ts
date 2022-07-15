import { IForecasts } from "./IForecasts";

export interface IData {
  approvedTime: string;
  dates: string[];
  forecastsByDate: IForecasts;
}
