export interface PlayerAlternateStat {
  playerName: string
  playerId: number
  statType: string
  statTypeId: number
  line: number
  underOdds: number
  overOdds: number
  pushOdds: number
}

export interface PlayerPropStat {
  playerName: string
  playerId: number
  teamId: number
  teamNickname: string
  teamAbbr: string
  statType: string
  statTypeId: number
  position: string
  marketSuspended: number
  line: number
}

export interface MergedTableData {
  rowId: string
  highLine: number
  isMarketOpen: boolean
  line: number
  lowLine: number
  marketSuspended: number
  playerId: number
  playerName: string
  position: string
  statType: string
  statTypeId: number
  teamAbbr: string
  teamId: number
  teamNickname: string
}

export interface ResponseData {
  propsResponse: PlayerPropStat[]
  alternatesResponse: PlayerAlternateStat[]
}

export enum RequestStatus {
  pending = 'PENDING',
  success = 'SUCCESS',
  failed = 'FAILED',
}

export enum NbaPosition {
  PG = 'PG',
  SF = 'SF',
  PF = 'PF',
  SG = 'SG',
  C = 'C',
}

export enum NbaMarket {
  Assists = 'assists',
  Rebounds = 'rebounds',
  Points = 'points',
  Steals = 'steals',
}

export enum MarketStatus {
  Open = 'open',
  Suspended = 'suspended',
}

export interface TableFilters {
  search: string
  market: string
  position: string
  status: string
}
