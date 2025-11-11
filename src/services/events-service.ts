import axios from "axios";
import type { IDansarnaEvent, IDansarnaResponse } from "@/types/IDansResponse";
import {
  DANSARNA_API_ORG,
  DANSARNA_API_URL,
  DANSARNA_ID,
  EventType,
  SIGNUP,
} from "@/constants";
import type { IEvent } from "@/types/IEvent";

// TODO: Dansarna Service

// Local events service

// Event service

export const useEvents = () => {
  async function getEvents(): Promise<IEvent[]> {
    try {
      const [dansarnaEvents, localEvents] = await Promise.all([
        getDansarnaEvents(),
        getLocalEvents(),
      ]);

      const events: IEvent[] = [
        ...dansarnaEvents.map(mapDansarna),
        ...localEvents.map(mapLocal),
      ];

      const now = new Date(); // Get the current date and time
      const upcomingEvents = events.filter(
        (event) => new Date(event.startDate) >= now
      );

      return upcomingEvents.sort(sort);
    } catch (error) {
      console.error("Failed to fetch or process events:", error);
      // Handle or throw the error as needed
      return [];
    }
  }

  const getDansarnaEvents = (): Promise<IDansarnaEvent[]> => {
    return fetchDansarnaEvents()
      .then((data) => {
        const arr: IDansarnaEvent[] = data.events.filter(
          (event: IDansarnaEvent) => {
            return event.creator.id === DANSARNA_ID;
          }
        );

        // Return the filtered array wrapped in a new promise to resolve the original function's promise
        return Promise.resolve(arr);
      })
      .catch((error) => {
        console.error("Failed to fetch events:", error);
        // Optionally, rethrow the error if you want the caller to handle it
        throw error;
      });
  };

  async function fetchDansarnaEvents(): Promise<IDansarnaResponse> {
    try {
      const response = await axios.get<IDansarnaResponse>(
        `${DANSARNA_API_URL}/events/?org=${DANSARNA_API_ORG}&verbose=1`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  }

  async function getLocalEvents(): Promise<IEvent[]> {
    try {
      return await $fetch<IEvent[]>("/data/events.json", {
        query: { v: Date.now() }, // optional cache-buster
      });
    } catch (e) {
      console.error("Failed to load local events.json", e);
      return [];
    }
  }

  function formatDateTime(date: string, time: string): string {
    return `${date}T${time}`;
  }

  function sort(a: IEvent, b: IEvent) {
    // Assuming startdate is a property of IEvent
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);

    // Compare dates and return a number
    if (dateA < dateB) {
      return -1; // indicates that a comes before b
    } else if (dateA > dateB) {
      return 1; // indicates that a comes after b
    } else {
      return 0; // indicates that a and b are equal in terms of order
    }
  }

  // Because ugly
  function extractTitleFromSpanString(spanString: string): string | null {
    // This regex matches the title attribute value within a span element
    const regex = /title="([^"]*)"/;
    const match = spanString.match(regex);

    // If a match is found, return the captured group; otherwise, return null
    return match ? match[1] : "";
  }

  function getType(s: string): EventType {
    return s === EventType.Show ? EventType.Show : EventType.Course;
  }

  function mapDansarna(d: IDansarnaEvent): IEvent {
    return {
      title: d.name,
      description: d.longdescription,
      price: d.pricing.basePriceInclVat,
      level: extractTitleFromSpanString(d.requirements.levelLong),
      address: d.place,
      startDate: `${d.schedule.start.date}T${d.schedule.start.time}`,
      endDate: `${d.schedule.end.date}T${d.schedule.end.time}`,
      day: d.schedule.start.dayOfWeek,
      dayAndTimeInfo: d.schedule.dayAndTimeInfo,
      numOccasions: d.schedule.numberOfPlannedOccasions,
      url: d.source,
      type: EventType.Course,
      buttonText: SIGNUP,
    };
  }

  function mapLocal(d: IEvent): IEvent {
    return {
      title: d.title,
      description: d.description ?? "",
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
    getDansarnaEvents,
    getEvents,
    getCourses,
    getShows
  };
};
