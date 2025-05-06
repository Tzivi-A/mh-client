import { DividerType } from "@app-types/enums/divider-type";
import { FundingTypeEnum } from "~/types/enums/funding-type";
import type { SummaryResultData } from "~/types/publish-summary-result";
import type { LocalGuarantyDonationSearch } from "~/types/publisher-search-results";
import { FundingTypeIcons, FundingTypeTitles } from "~/utils/consts/funding-type";
import SummaryIcon from '~/assets/images/SummaryIcon.svg';

export const mapperSummaryData = (result: LocalGuarantyDonationSearch): SummaryResultData[] => {
    const summaryData: SummaryResultData[] = result
        ? [
            {
                fundingType: FundingTypeEnum.Donation,
                title: FundingTypeTitles[FundingTypeEnum.Donation].plural,
                count: result.numDonations,
                sum: parseFloat(result.sumDonations),
                iconSrc: FundingTypeIcons[FundingTypeEnum.Donation],
                dividerAfter: DividerType.Line,
            },
            {
                fundingType: FundingTypeEnum.Guarantee,
                title: FundingTypeTitles[FundingTypeEnum.Guarantee].plural,
                count: result.numGuarantees,
                sum: parseFloat(result.sumGuarantees),
                iconSrc: FundingTypeIcons[FundingTypeEnum.Guarantee],
                dividerAfter: DividerType.Line,
            },
            {
                fundingType: FundingTypeEnum.Loan,
                title: FundingTypeTitles[FundingTypeEnum.Loan].plural,
                count: result.numLoans,
                sum: parseFloat(result.sumLoans),
                iconSrc: FundingTypeIcons[FundingTypeEnum.Loan],
                dividerAfter: DividerType.Arrow,
            },
            {
                title: 'רשומות',
                count: result.numLoans + result.numGuarantees + result.numDonations,
                sum: parseFloat(result.sumLoans + result.sumGuarantees + result.sumDonations),
                iconSrc: SummaryIcon
            },
        ]
        : [];
    return summaryData;
}