
export interface IDansarnaResponse {
  events: IDansarnaEvent[];
}

interface ICreator {
  id: number;
  name: string;
}

interface IPricing {
  currency: string;
  basePriceInclVat: number;
}

interface IRegistration {
  url: string;
}

interface IOccasion {
  length: number;
  startDateTime: string;
  startDayOfWeek: string;
  endDateTime: string;
}

interface ISchedule {
  dayAndTimeInfo: string;
  start: {
    date: string;
    time: string;
    dayOfWeek: string;
  };
  end: {
    date: string;
    time: string;
    dayOfWeek: string;
  };
  numberOfPlannedOccasions: number;
  numberOfScheduledOccasions: number;
  occasions: IOccasion[];
}

interface IStatistics {
  accepted?: number;
  inQueue?: number;
}

interface IRequirements {
  levelLong: string;
  maxParticipants: number;
}

export interface IDansarnaEvent {
  id: number;
  key: string;
  created: string;
  creator: ICreator;
  code: string;
  uid: string;
  source: string;
  name: string;
  place: string;
  pricing: IPricing;
  registration: IRegistration;
  schedule: ISchedule;
  statistics: IStatistics;
  requirements: IRequirements;
  instructorsName: string;
  longdescription: string;
}
