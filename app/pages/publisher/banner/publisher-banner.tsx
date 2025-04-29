import { SideBySideCard } from '@ui/side-by-side-card/side-by-side-card';
import useAppForm from '~/hooks/use-app-form';
import { FundingTypeEnum } from '~/types/enums/funding-type';
import type { PublisherSearch } from '~/types/publisher-search';

export const PublisherBanner = () => {
  const form = useAppForm({
    defaultValues: {
      PublicationSearchType: FundingTypeEnum.Donation
    } as PublisherSearch,
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value));
    }
  });

  return (
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <SideBySideCard>
        <SideBySideCard.Right>
          <h3>מאפייני הבחירות</h3>
          <form.AppField
            name="ElectionDate"
            children={field => <field.DatePicker label="תאריך בחירות" />}
          />
        </SideBySideCard.Right>
        <SideBySideCard.Left>
          <div>Left</div>
        </SideBySideCard.Left>
      </SideBySideCard>
    </form>
  );
};
export default PublisherBanner;
