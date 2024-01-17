import { EventType } from "../constants";

export default interface IEvent {
  title: string;
  description: string;
  address: string;
  startdate: string;
  enddate: string;
  url: string;
  type: EventType;
};