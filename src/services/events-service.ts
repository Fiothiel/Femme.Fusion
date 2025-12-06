import eventsData from "@/public/data/events.json";
import { EventType, SIGNUP } from "@/constants";
import type { IEvent } from "@/types/IEvent";

export const useEvents = () => {
  function getEvents(): IEvent[] {
    const localEvents = eventsData as IEvent[];

    const events: IEvent[] = localEvents.map(mapLocal);

    const now = new Date();
    const upcomingEvents = events.filter(
      (event) => new Date(event.startDate) >= now
    );

    return upcomingEvents.sort(sort);
  }

  function sort(a: IEvent, b: IEvent): number {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateA.getTime() - dateB.getTime();
  }

  function getType(s: string): EventType {
    return s === EventType.Show ? EventType.Show : EventType.Course;
  }

  function mapLocal(d: IEvent): IEvent {
    return {
      id: d.id ?? null,
      title: d.title,
      shortDescription: d.shortDescription ?? "",
      longDescription: d.longDescription ?? null,
      level: d.level,
      address: d.address,
      startDate: d.startDate,
      endDate: d.endDate,
      day: d.day,
      dayAndTimeInfo: d.dayAndTimeInfo,
      numOccasions: d.numOccasions,
      url: d.url,
      type: getType(d.type as string),
      price: d.price,
      buttonText: d.buttonText ?? SIGNUP,
      image: d.image ?? null,
    };
  }

  function getCourses(limit?: number): IEvent[] {
    const all = getEvents();
    const list = all.filter((e) => e.type === EventType.Course);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }

  function getShows(limit?: number): IEvent[] {
    const all = getEvents();
    const list = all.filter((e) => e.type === EventType.Show);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }

  function getById(id: string): IEvent | undefined {
    const all = getEvents();
    return (all as IEvent[]).find((e) => e.id === id);
}

  return {
    getEvents,
    getCourses,
    getShows,
    getById,
  };
};
