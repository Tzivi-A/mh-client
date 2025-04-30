import { Button } from '@ui/button/button';
import { Image } from '@ui/image/image';
import { Flex } from '@ui/layout/flex/flex';
import { SideBySideCard } from '@ui/side-by-side-card/side-by-side-card';
import useAppForm from '~/hooks/use-app-form';
import { FundingTypeEnum } from '~/types/enums/funding-type';
import type { PublisherSearch } from '~/types/publisher-search';
import logo from '~/assets/images/LogoMevaker.png';
import * as validators from '~/validators/pages/publisher-validators';
import { useAppQuery } from '~/hooks/use-app-query';
import type { Option } from '@app-types/options';
import { mapperCodeEntityToOption } from '~/mappers/select-mapper';
import type { CodeEntity } from '~/types/code-entity';
import { useStore } from '@tanstack/react-form';

export const PublisherBanner = () => {
  const elections = useAppQuery<CodeEntity[], Option[]>({
    url: 'api/election/activeLocalElections',
    mapResponse: mapperCodeEntityToOption
  });

  const form = useAppForm({
    defaultValues: {
      publicationSearchType: FundingTypeEnum.Donation,
      electionDate: elections.data?.[0]?.value ?? ''
    } as PublisherSearch,
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value));
    }
  });

  const selectedElectionId = useStore(form.store, state => state.values.electionDate);
  const selectedCityId = useStore(form.store, state => state.values.cityID);

  const cities = useAppQuery<CodeEntity[], Option[]>({
    url: 'api/faction/cities',
    isRunNow: !!selectedElectionId,
    queryData: {
      queryStringData: { electionId: selectedElectionId ?? '' }
    },
    mapResponse: mapperCodeEntityToOption
  });

  const factions = useAppQuery<CodeEntity[], Option[]>({
    url: 'api/faction/factions',
    isRunNow: !!selectedCityId,
    queryData: {
      queryStringData: { cityId: selectedCityId ?? '' }
    },
    mapResponse: mapperCodeEntityToOption
  });

  if (elections.isLoading) return <p>Loading elections data...</p>;
  if (elections.error) return <p>Error loading elections data</p>;
  if (cities.isLoading) return <p>Loading cities data...</p>;
  if (cities.error) return <p>Error loading cities data</p>;
  if (factions.isLoading) return <p>Loading cities data...</p>;
  if (factions.error) return <p>Error loading cities data</p>;

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
            <form.AppField name="electionDate">
              {field => <field.Select label="תאריך בחירות" options={elections.data || []} />}
            </form.AppField>

            <form.AppField name="cityID">
              {field => <field.Select label="ישוב" options={cities.data || []} />}
            </form.AppField>
            <form.AppField name="entityID">
              {field => <field.Select label="סיעה" options={factions.data || []} />}
            </form.AppField>
          </Flex>
        </SideBySideCard.Right>
        <SideBySideCard.Left>
          <h3>מאפייני התרומה/ הערבות/ ההלוואה</h3>
          <Flex>
            <Flex direction="column">
              <Flex>
                <form.AppField name="fullName">
                  {field => <field.Input label="שם מלא" />}
                </form.AppField>
                <form.AppField name="cityID">
                  {field => <field.Select label="ישוב" options={[]} />}
                </form.AppField>
                <form.AppField name="countryID">
                  {field => <field.Select label="ארץ" options={[]} />}
                </form.AppField>
              </Flex>
              <Flex>
                <form.AppField
                  name="fromDate"
                  validators={{
                    onChangeListenTo: ['toDate'],
                    onChange: ({ value, fieldApi }) =>
                      validators.validateFromDateRange(value, fieldApi.form.getFieldValue('toDate'))
                  }}
                >
                  {field => <field.DatePicker label="מתאריך" inputReadOnly={false} />}
                </form.AppField>
                <form.AppField
                  name="toDate"
                  validators={{
                    onChangeListenTo: ['fromDate'],
                    onChange: ({ value, fieldApi }) =>
                      validators.validateToDateRange(fieldApi.form.getFieldValue('fromDate'), value)
                  }}
                >
                  {field => <field.DatePicker label="עד תאריך" inputReadOnly={false} />}
                </form.AppField>
              </Flex>
              <Flex>
                <form.AppField
                  name="fromSum"
                  validators={{
                    onChangeListenTo: ['toSum'],
                    onChange: ({ value, fieldApi }) =>
                      validators.validateFromSumRange(value, fieldApi.form.getFieldValue('toSum'))
                  }}
                >
                  {field => <field.Number label="מסכום" />}
                </form.AppField>
                <form.AppField
                  name="toSum"
                  validators={{
                    onChangeListenTo: ['fromSum'],
                    onChange: ({ value, fieldApi }) =>
                      validators.validateToSumRange(fieldApi.form.getFieldValue('fromSum'), value)
                  }}
                >
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
