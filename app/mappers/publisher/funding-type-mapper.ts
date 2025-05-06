import { DividerTypeEnum } from '@app-types/enums/divider-type';
import { FundingTypeEnum } from '~/types/enums/funding-type';
import type { PublisherResultSummaryData } from '~/types/publisher/publisher-summary-result';
import type { LocalGuarantyDonationSearch } from '~/types/publisher/publisher-search-results';
import { FundingTypeIcons, FundingTypeTitles } from '~/utils/consts/publisher/funding-type';
import SummaryIcon from '~/assets/images/publisher/summary.svg';

export const mapperSummaryData = (
  result: LocalGuarantyDonationSearch
): PublisherResultSummaryData[] => {
  const summaryData: PublisherResultSummaryData[] = result
    ? [
        {
          fundingType: FundingTypeEnum.Donation,
          title: FundingTypeTitles[FundingTypeEnum.Donation].plural,
          count: result.numDonations,
          sum: parseFloat(result.sumDonations),
          iconSrc: FundingTypeIcons[FundingTypeEnum.Donation],
          dividerAfter: DividerTypeEnum.Line
        },
        {
          fundingType: FundingTypeEnum.Guarantee,
          title: FundingTypeTitles[FundingTypeEnum.Guarantee].plural,
          count: result.numGuarantees,
          sum: parseFloat(result.sumGuarantees),
          iconSrc: FundingTypeIcons[FundingTypeEnum.Guarantee],
          dividerAfter: DividerTypeEnum.Line
        },
        {
          fundingType: FundingTypeEnum.Loan,
          title: FundingTypeTitles[FundingTypeEnum.Loan].plural,
          count: result.numLoans,
          sum: parseFloat(result.sumLoans),
          iconSrc: FundingTypeIcons[FundingTypeEnum.Loan],
          dividerAfter: DividerTypeEnum.Arrow
        },
        {
          title: 'רשומות',
          count: result.numLoans + result.numGuarantees + result.numDonations,
          sum: parseFloat(result.sumLoans + result.sumGuarantees + result.sumDonations),
          iconSrc: SummaryIcon
        }
      ]
    : [];
  return summaryData;
};
