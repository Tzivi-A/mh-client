export interface LocalPublicationSearchRow {
  guaranteeOrDonation: string;
  publisherTypeID?: number;
  publicationSearchName: string;
  city: string;
  country: string;
  publicationSearchSum: string;
  sumInCurrency: string;
  publicationSearchDate?: string;
  electionDate?: string;
  electionCity: string;
  electionFaction: string;
  loanReturnSum: string;
}

export interface LocalPublicationSearch {
  results: LocalPublicationSearchRow[];
  numDonations: number;
  numGuarantees: number;
  numLoans: number;
  sumDonations: string;
  sumGuarantees: string;
  sumLoans: string;
  isNumRecordsGreaterThanMaxParameter: number;
}
