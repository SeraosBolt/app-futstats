export interface ILeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

export interface ITeam {
  id: number;
  name: string;
  logo: string;
}

export interface IEncontros {
  played: IInfo;
  wins: IInfo;
  draws: IInfo;
  loses: IInfo;
}

interface IInfo {
  home: number | string;
  away: number | string;
  total?: number | string;
}

export interface IGols {
  for: IGolsInfo;
  against: IGolsInfo;
}

interface IGolsInfo {
  total: IInfo;
  average: IInfo;
  minute: IMinutosInfo;
}

interface IMinutosInfo {
  '0-15': IPercents;
  '16-30': IPercents;
  '31-45': IPercents;
  '46-60': IPercents;
  '61-75': IPercents;
  '76-90': IPercents;
  '91-105': IPercents;
  '106-120': IPercents;
}

interface IPercents {
  total: number | null;
  percentage: string | null;
}

export interface IRecords {
  streak: ISequencia;
  wins: IInfo;
  loses: IInfo;
  goals: {
    for: IInfo;
    against: IInfo;
  };
}

interface ISequencia {
  wins: number;
  draws: number;
  loses: number;
}

export interface IPenalty {
  scored: IPercents;
  missed: IPercents;
  total: number;
}

export interface IFormacao {
  formation: string;
  played: number;
}

export interface ICartoes {
  yellow: IMinutosInfo;
  red: IMinutosInfo;
}

export interface ILeagueInfo {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

export interface ITimeStats {
  league: ILeagueInfo;
  team: ITeam;
  form: string;
  fixtures: IEncontros;
  goals: IGols;
  biggest: IRecords;
  clean_sheet: IInfo;
  failed_to_score: IInfo;
  penalty: IPenalty;
  lineups?: IFormacao[];
  cards: ICartoes;
}
