import { EventType } from "@/constants";

export type IEventImage = {
  src: string;
  alt: string;
  photographer?: string;
};

export type IEvent = {
  id: string | null;
  title: string;
  shortDescription: string;
  longDescription: string | null;
  soldOut?: boolean;
  level: string | null;
  address: string;
  startDate: string;
  endDate: string;
  day: string;
  url: string;
  type: EventType;
  numOccasions: number;
  dayAndTimeInfo: string;
  price: number | string | null;
  buttonText: string;
  image: IEventImage | null;
};
