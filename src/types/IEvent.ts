import { EventType } from "@/constants";

export type IEvent = {
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
  price: number;
  buttonText: string;
};