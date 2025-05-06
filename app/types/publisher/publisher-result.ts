import type { CodeEntity } from '../code-entity';

export interface PublishResult {
  ID: string;
  FundingType: CodeEntity;
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
