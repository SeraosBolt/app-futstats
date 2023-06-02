export interface Liga {
  id: number;
  name: string;
  type: string;
  logo: string;
}
export interface Pais {
  name: string;
  code: string | null;
  flag: string | null;
}
export interface Temporada {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: Cobertura;
}

interface Cobertura {
  fixtures: Encontros;
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  top_cards: boolean;
  injuries: boolean;
  predictions: boolean;
  odds: boolean;
}

interface Encontros {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
}

export interface LigaInfo{
  league: Liga;
  country: Pais;
  seasons: Temporada[];
}
