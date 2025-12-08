import { EventType, SIGNUP } from "@/constants";
import type { IEvent } from "@/types/IEvent";

export const useEvents = () => {
  async function getEvents(): Promise<IEvent[]> {
    try {
      const localEvents = await getLocalEvents();

      const events: IEvent[] = localEvents.map(mapLocal);

      const now = new Date();
      const upcomingEvents = events.filter(
        (event) => new Date(event.startDate) >= now
      );

      return upcomingEvents.sort(sort);
    } catch (error) {
      console.error("Failed to fetch or process events:", error);
      return [];
    }
  }

  async function getLocalEvents(): Promise<IEvent[]> {
    try {
      return await $fetch<IEvent[]>("/data/events.json", {
        query: { v: Date.now() }, // cache-buster
      });
    } catch (e) {
      console.error("Failed to load local events.json", e);
      return [];
    }
  }

  function sort(a: IEvent, b: IEvent) {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);

    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    return 0;
  }

  function getType(s: string): EventType {
    return s === EventType.Show ? EventType.Show : EventType.Course;
  }

  function mapLocal(d: IEvent): IEvent {
    return {
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

  async function getCourses(limit?: number): Promise<IEvent[]> {
    const all = await getEvents();
    const list = all.filter((e) => e.type === EventType.Course);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }

  async function getShows(limit?: number): Promise<IEvent[]> {
    const all = await getEvents();
    const list = all.filter((e) => e.type === EventType.Show);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }

  return {
    getEvents,
    getCourses,
    getShows,
  };
};
