export interface SquadResponse {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
}

export interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
  team: string;
}

export interface Response {
  team: Team;
  players: Player[];
}

export interface Player {
  id: number;
  name: string;
  age: number;
  number: number | null;
  position: Position;
  photo: string;
}

export enum Position {
  Attacker = 'Attacker',
  Defender = 'Defender',
  Goalkeeper = 'Goalkeeper',
  Midfielder = 'Midfielder',
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface StatisticsDTO {
  teamId: string;
  leagueId: string;
  seasonId: number;
}

// STATISTICS

export interface StatisticsResponse {
  errors: any[];
  get: string;
  paging: Paging;
  parameters: Parameters;
  response: Response;
  results: number;
}

export interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
  league: string;
  season: string;
  team: string;
}

export interface Response {
  biggest: Biggest;
  cards: Cards;
  clean_sheet: CleanSheet;
  failed_to_score: CleanSheet;
  fixtures: Fixtures;
  form: string;
  goals: ResponseGoals;
  league: League;
  lineups: Lineup[];
  penalty: Penalty;
  team: Team;
}

export interface Biggest {
  goals: BiggestGoals;
  loses: Loses;
  streak: Streak;
  wins: Loses;
}

export interface BiggestGoals {
  against: PurpleAgainst;
  for: PurpleAgainst;
}

export interface PurpleAgainst {
  away: number;
  home: number;
}

export interface Loses {
  away: null | string;
  home: string;
}

export interface Streak {
  draws: number;
  loses: number;
  wins: number;
}

export interface Cards {
  red: { [key: string]: Missed };
  yellow: { [key: string]: Missed };
}

export interface Missed {
  percentage: null | string;
  total: number | null;
}

export interface CleanSheet {
  away: number;
  home: number;
  total: number;
}

export interface Fixtures {
  draws: CleanSheet;
  loses: CleanSheet;
  played: CleanSheet;
  wins: CleanSheet;
}

export interface ResponseGoals {
  against: FluffyAgainst;
  for: FluffyAgainst;
}

export interface FluffyAgainst {
  average: Average;
  minute: { [key: string]: Missed };
  total: CleanSheet;
}

export interface Average {
  away: string;
  home: string;
  total: string;
}

export interface League {
  country: string;
  flag: string;
  id: number;
  logo: string;
  name: string;
  season: number;
}

export interface Lineup {
  formation: string;
  played: number;
}

export interface Penalty {
  missed: Missed;
  scored: Missed;
  total: number;
}

export interface Team {
  id: number;
  logo: string;
  name: string;
}
