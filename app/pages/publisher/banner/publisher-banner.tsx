import { Button } from '@ui/button/button';
import { Image } from '@ui/image/image';
import { Flex } from '@ui/layout/flex/flex';
import { SideBySideCard } from '@ui/side-by-side-card/side-by-side-card';
import useAppForm from '~/hooks/use-app-form';
import { FundingTypeEnum } from '~/types/enums/funding-type';
import type { PublisherSearch } from '~/types/publisher-search';
import logo from '~/assets/images/LogoMevaker.png';
import type { DatePickerType } from '@app-types/date-types';
import { validateDateRange } from '~/utils/validators';
import { toDayjs } from '@utils/utils';

const validateFormDateRange = (fromDate: DatePickerType, toDate: DatePickerType) =>
  validateDateRange(fromDate, toDate) &&
  `יש לבחור בתאריך שווה או גדול מ${toDayjs(fromDate)?.toString()}`;

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
          <Flex direction="column">
            <form.AppField name="ElectionDate">
              {field => <field.DatePicker label="תאריך בחירות" inputReadOnly={false} />}
            </form.AppField>
            <form.AppField name="CityID">
              {field => <field.Select label="ישוב" options={[]} />}
            </form.AppField>
            <form.AppField name="EntityID">
              {field => <field.Select label="סיעה" options={[]} />}
            </form.AppField>
          </Flex>
        </SideBySideCard.Right>
        <SideBySideCard.Left>
          <h3>מאפייני התרומה/ הערבות/ ההלוואה</h3>
          <Flex>
            <Flex direction="column">
              <Flex>
                <form.AppField name="FullName">
                  {field => <field.Input label="שם מלא" />}
                </form.AppField>
                <form.AppField name="CityID">
                  {field => <field.Select label="ישוב" options={[]} />}
                </form.AppField>
                <form.AppField name="CountryID">
                  {field => <field.Select label="ארץ" options={[]} />}
                </form.AppField>
              </Flex>
              <Flex>
                <form.AppField
                  name="FromDate"
                  validators={{
                    onChangeListenTo: ['ToDate'],
                    onChange: ({ value, fieldApi }) =>
                      validateFormDateRange(value, fieldApi.form.getFieldValue('ToDate'))
                  }}
                >
                  {field => <field.DatePicker label="מתאריך" inputReadOnly={false} />}
                </form.AppField>
                <form.AppField
                  name="ToDate"
                  validators={{
                    onChangeListenTo: ['FromDate'],
                    onChange: ({ value, fieldApi }) =>
                      validateFormDateRange(fieldApi.form.getFieldValue('FromDate'), value)
                  }}
                >
                  {field => <field.DatePicker label="עד תאריך" inputReadOnly={false} />}
                </form.AppField>
              </Flex>
              <Flex>
                <form.AppField name="FromSum">
                  {field => <field.Number label="מסכום" />}
                </form.AppField>
                <form.AppField name="ToSum">
                  {field => <field.Number label="עד סכום" />}
                </form.AppField>
              </Flex>
            </Flex>
            <Flex>
              <Button>
                <Image src={logo} alt="search" />
                סינון
              </Button>
              <Button>נקה סינון</Button>
            </Flex>
          </Flex>
        </SideBySideCard.Left>
      </SideBySideCard>
    </form>
  );
};
export default PublisherBanner;
