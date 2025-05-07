import type { CodeEntity } from '~/types/code-entity';

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
