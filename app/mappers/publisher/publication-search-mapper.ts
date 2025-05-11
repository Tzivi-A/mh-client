import { DividerTypeEnum } from '@app-types/enums/divider-type';
import { PublicationSearchEnum } from '~/types/enums/publication-search';
import type { PublisherResultSummaryData } from '~/types/publisher/publisher-summary-result-type';
import type { localPublicationSearch } from '~/types/publisher/publisher-search-results-type';
import {
  PublicationSearchIcons,
  PublicationSearchTitles
} from '~/utils/constants/publisher/publication-search';
import { pareseNumber } from '~/shared/utils/number-utils';

export const mapperSummaryData = (result: localPublicationSearch): PublisherResultSummaryData[] => {
  const summaryData: PublisherResultSummaryData[] = result
    ? [
        {
          publicationSearchType: PublicationSearchEnum.Donation,
          title: PublicationSearchTitles[PublicationSearchEnum.Donation].plural,
          count: result.numDonations,
          sum: parseFloat(result.sumDonations),
          iconSrc: PublicationSearchIcons[PublicationSearchEnum.Donation],
          dividerAfter: DividerTypeEnum.Line
        },
        {
          publicationSearchType: PublicationSearchEnum.Guarantee,
          title: PublicationSearchTitles[PublicationSearchEnum.Guarantee].plural,
          count: result.numGuarantees,
          sum: parseFloat(result.sumGuarantees),
          iconSrc: PublicationSearchIcons[PublicationSearchEnum.Guarantee],
          dividerAfter: DividerTypeEnum.Line
        },
        {
          publicationSearchType: PublicationSearchEnum.Loan,
          title: PublicationSearchTitles[PublicationSearchEnum.Loan].plural,
          count: result.numLoans,
          sum: parseFloat(result.sumLoans),
          iconSrc: PublicationSearchIcons[PublicationSearchEnum.Loan],
          dividerAfter: DividerTypeEnum.Arrow
        },
        {
          title: PublicationSearchTitles[PublicationSearchEnum.All].plural,
          count: result.numLoans + result.numGuarantees + result.numDonations,
          sum:
            pareseNumber(result.sumLoans) +
            pareseNumber(result.sumGuarantees) +
            pareseNumber(result.sumDonations),
          iconSrc: PublicationSearchIcons[PublicationSearchEnum.All]
        }
      ]
    : [];
  return summaryData;
};
