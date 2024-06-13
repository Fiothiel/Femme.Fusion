import { EventType } from "../constants";

export default interface IEvent {
  title: string;
  description: string;
  level: string;
  address: string;
  startDate: string;
  endDate: string;
  day: string;
  url: string;
  type: EventType;
  numOccasions: number;
  dayAndTimeInfo: string;
  
};