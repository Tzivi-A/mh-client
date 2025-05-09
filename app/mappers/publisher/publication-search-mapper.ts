import { DividerTypeEnum } from '@app-types/enums/divider-type';
import { PublicationSearchEnum } from '~/types/enums/publication-search';
import type { PublisherResultSummaryData } from '~/types/publisher/publisher-summary-result-type';
import type { LocalGuarantyDonationSearch } from '~/types/publisher/publisher-search-results-type';
import {
  PublicationSearchIcons,
  PublicationSearchTitles
} from '~/utils/constants/publisher/publication-search';

export const mapperSummaryData = (
  result: LocalGuarantyDonationSearch | undefined
): PublisherResultSummaryData[] => {
  const buildTitleWithCount = (label: string, count: number) => `סה"כ ${count} ${label}`;
  const summaryData: PublisherResultSummaryData[] = result
    ? [
        {
          publicationSearchType: PublicationSearchEnum.Donation,
          title: PublicationSearchTitles[PublicationSearchEnum.Donation].plural,
          count: result.numDonations,
          sum: parseFloat(result.sumDonations),
          iconSrc: PublicationSearchIcons[PublicationSearchEnum.Donation],
          zeroIconSrc: PublicationSearchIcons[PublicationSearchEnum.Donation],
          dividerAfter: DividerTypeEnum.Line
        },
        {
          publicationSearchType: PublicationSearchEnum.Guarantee,
          title: PublicationSearchTitles[PublicationSearchEnum.Guarantee].plural,
          count: result.numGuarantees,
          sum: parseFloat(result.sumGuarantees),
          iconSrc: PublicationSearchIcons[PublicationSearchEnum.Guarantee],
          zeroIconSrc: PublicationSearchIcons[PublicationSearchEnum.Guarantee],
          dividerAfter: DividerTypeEnum.Line
        },
        {
          publicationSearchType: PublicationSearchEnum.Loan,
          title: PublicationSearchTitles[PublicationSearchEnum.Loan].plural,
          count: result.numLoans,
          sum: parseFloat(result.sumLoans),
          iconSrc: PublicationSearchIcons[PublicationSearchEnum.Loan],
          zeroIconSrc: PublicationSearchIcons[PublicationSearchEnum.Loan],
          dividerAfter: DividerTypeEnum.Arrow
        },
        {
          title: buildTitleWithCount(
            PublicationSearchTitles[PublicationSearchEnum.All].plural,
            result.numLoans + result.numGuarantees + result.numDonations
          ),
          sum: parseFloat(result.sumLoans + result.sumGuarantees + result.sumDonations),
          iconSrc: PublicationSearchIcons[PublicationSearchEnum.All],
          titleIncludesCount: true
        }
      ]
    : [];
  return summaryData;
};
