import type { Item } from './item';

export interface PublishResult {
  ID: string;
  FundingType: Item;
  Faction: string;
  ElectionCity: string;
  ElectionDate: string;
  FullName: string;
  Country: string;
  EntityCity: string;
  FundingDate: string;
  FundingAmount: number;
  LoanBalance?: number;
}
