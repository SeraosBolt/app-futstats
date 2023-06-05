export interface ITimeInfo {
  team: Time;
  venue: Estadio;
}

interface Time {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
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
