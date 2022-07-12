import { IDay } from "./IDay";

export interface IData {
  approvedTime: string;
  referenceTime: string;
  coordinates: string;
  groupedByDate: [IDay];
}
