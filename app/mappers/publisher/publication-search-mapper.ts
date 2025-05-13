import { DividerTypeEnum } from '@app-types/enums/divider-type';
import { PublicationSearchEnum } from '~/types/enums/publication-search';
import type { PublisherResultSummaryData } from '~/types/publisher/publisher-summary-result-type';
import type { LocalPublicationResults } from '~/types/publisher/publisher-search-results-type';
import { PublicationSearchTitles } from '~/utils/constants/publisher/publication-search';
import { formatHebrewNumber } from '~/shared/utils/number-utils';

export const mapperSummaryData = (
  result?: LocalPublicationResults
): PublisherResultSummaryData[] => {
  const buildTitleWithCount = (label: string, count: number) =>
    `סה"כ ${formatHebrewNumber(count)} ${label}`;
  const summaryData: PublisherResultSummaryData[] = result
    ? [
        {
          publicationSearchType: PublicationSearchEnum.Donation,
          sumTitle: PublicationSearchTitles[PublicationSearchEnum.Donation].plural,
          count: result.numDonations,
          sum: parseFloat(result.sumDonations),
          dividerAfter: DividerTypeEnum.Line
        },
        {
          publicationSearchType: PublicationSearchEnum.Guarantee,
          sumTitle: PublicationSearchTitles[PublicationSearchEnum.Guarantee].plural,
          count: result.numGuarantees,
          sum: parseFloat(result.sumGuarantees),
          dividerAfter: DividerTypeEnum.Line
        },
        {
          publicationSearchType: PublicationSearchEnum.Loan,
          sumTitle: PublicationSearchTitles[PublicationSearchEnum.Loan].plural,
          count: result.numLoans,
          sum: parseFloat(result.sumLoans),
          dividerAfter: DividerTypeEnum.Arrow
        },
        {
          publicationSearchType: PublicationSearchEnum.All,
          sumTitle: buildTitleWithCount(
            PublicationSearchTitles[PublicationSearchEnum.All].plural,
            result.numLoans + result.numGuarantees + result.numDonations
          ),
          sum:
            parseFloat(result.sumDonations) +
            parseFloat(result.sumGuarantees) +
            parseFloat(result.sumLoans),
          titleIncludesCount: true
        }
      ]
    : [];
  return summaryData;
};
