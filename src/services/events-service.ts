import axios from 'axios';
import { IDansarnaEvent, IDansarnaResponse } from '../interfaces/IDansResponse';
import { DANSARNA_ID, EventType } from '../constants';
import IEvent from '../interfaces/IEvent';

export const useEvents = () => {
  
  async function getEvents(): Promise<IEvent[]> {
    try {
      const dansarnaEvents = await getDansarnaEvents();
      let events: IEvent[] = [];
    
      dansarnaEvents.forEach((d: IDansarnaEvent) => {
        let event: IEvent = {
          title: d.name,
          description: d.longdescription,
          level: d.requirements.levelLong,
          address: d.place,
          startDate: formatDateTime(d.schedule.start.date, d.schedule.start.time),
          endDate: formatDateTime(d.schedule.end.date, d.schedule.end.time),
          day: d.schedule.start.dayOfWeek,
          url: d.source,
          type: EventType.Course
        };
        events.push(event);
      });
      
      // Assuming sort is defined somewhere and is a boolean or function
      return events.sort(sort);
    } catch (error) {
      console.error('Failed to fetch or process events:', error);
      // Handle or throw the error as needed
      return [];
    }
  }

    const getDansarnaEvents = (): Promise<IDansarnaEvent[]> => {
      return fetchDansarnaEvents().then(data => {
        const arr: IDansarnaEvent[] = data.events.filter((event: IDansarnaEvent) => {
            return event.creator.id === DANSARNA_ID;
        });
        
        // Return the filtered array wrapped in a new promise to resolve the original function's promise
        return Promise.resolve(arr);
    }).catch(error => {
        console.error('Failed to fetch events:', error);
        // Optionally, rethrow the error if you want the caller to handle it
        throw error;
    });
    }

    async function fetchDansarnaEvents(): Promise<IDansarnaResponse> {
        try {
          const response = await axios.get<IDansarnaResponse>('https://dans.se/api/public/events/?org=3836&verbose=1');
          return response.data;
        } catch (error) {
          console.error('Error fetching events:', error);
          throw error;
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
      }; 


    return {
        getDansarnaEvents,
        getEvents
    }
}