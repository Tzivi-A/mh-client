export interface LocalGuarantyDonationSearchRow {
  guaranteeOrDonation: string;
  publisherTypeID?: number;
  fundingName: string;
  city: string;
  country: string;
  fundingSum: string;
  sumInCurrency: string;
  fundingDate?: string;
  electionDate?: string;
  electionCity: string;
  electionFaction: string;
  loanReturnSum: string;
}

export interface LocalGuarantyDonationSearch {
  results: LocalGuarantyDonationSearchRow[];
  numDonations: number;
  numGuarantees: number;
  numLoans: number;
  sumDonations: string;
  sumGuarantees: string;
  sumLoans: string;
  isNumRecordsGreaterThanMaxParameter: number;
}
