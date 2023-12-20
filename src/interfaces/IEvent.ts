import { eventType } from "../constants";

export default interface IEvent {
  title: string;
  startdate: Date;
  enddate: Date;
  url: string;
  type: eventType;
};