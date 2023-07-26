import { ITeam } from './timeInfoInterface';

export interface ITimeInfo {
  team: Time;
  venue: Estadio;
}

export interface Time extends ITeam {
  code?: string;
  country?: string;
  founded?: number;
  national?: boolean;
}

interface Estadio {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}
