import eventsData from "@/public/data/events.json";
import { EventType, SIGNUP } from "@/constants";
import type { IEvent } from "@/types/IEvent";

export const useEvents = () => {
  function getAllEvents(): IEvent[] {
    const localEvents = eventsData as IEvent[];
    return localEvents.map(mapLocal);
  }

  function getEvents(): IEvent[] {
    const events: IEvent[] = getAllEvents();
    const now = new Date();

    const upcomingEvents = events.filter((event) => {
      const end = new Date(event.endDate ?? event.startDate);
      return end >= now;
    });

    return upcomingEvents.sort(sort);
  }

  function getPastEvents(): IEvent[] {
    const events: IEvent[] = getAllEvents();
    const now = new Date();

    const pastEvents = events.filter((event) => {
      const end = new Date(event.endDate ?? event.startDate);
      return end < now;
    });

    return pastEvents.sort((a, b) => sort(b, a));
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

  function getPastCourses(limit?: number): IEvent[] {
    const all = getPastEvents();
    const list = all.filter((e) => e.type === EventType.Course);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }

  function getShows(limit?: number): IEvent[] {
    const all = getEvents();
    const list = all.filter((e) => e.type === EventType.Show);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }

  function getById(id: string): IEvent | undefined {
    const all = getAllEvents();
    return (all as IEvent[]).find((e) => e.id === id);
  }

  return {
    getAllEvents,
    getEvents,
    getPastEvents,
    getCourses,
    getPastCourses,
    getShows,
    getById,
  };
};
