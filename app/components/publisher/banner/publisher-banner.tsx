import { useEffect } from 'react';
import { useStore } from '@tanstack/react-form';
import { Button } from '@ui/button/button';
import { Image } from '@ui/image/image';
import { Flex } from '@ui/layout/flex/flex';
import { SideBySideCard } from '@ui/side-by-side-card/side-by-side-card';
import useAppForm from '~/hooks/use-app-form';
import {
  CitiesByElectionId,
  Factions,
  PublisherBannerQueries
} from '~/api/queries/publisher-banner-queries';
import type { PublisherSearch } from '~/types/publisher-search';
import searchIcon from '~/assets/images/search-icon.svg';
import * as validators from '~/validators/pages/publisher-validators';
import Section from '@ui/section/section';
import type { PublishBannerQueries } from '~/types/queries/publish-banner-queries';
import { useAppQuery } from '~/hooks/use-app-query';
import type { CodeEntity } from '~/types/code-entity';
import type { Option } from '@app-types/options';
import { mapperCodeEntityToOption } from '~/mappers/select-mapper';

export const PublisherBanner = () => {
  const elections = useAppQuery<CodeEntity[], Option[]>({
    url: 'api/election/activeLocalElections',
    mapResponse: mapperCodeEntityToOption
  });

  const queries: PublishBannerQueries = PublisherBannerQueries();
  const form = useAppForm({
    defaultValues: {
      fullName: 'ddd',
      electionDate: elections.data?.[0]?.value ?? ''
    } as PublisherSearch,
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value));
    }
  });

  const selectedElectionId = useStore(form.store, state => state.values.electionDate);
  const selectedCityId = useStore(form.store, state => state.values.electionCityID);

  queries.citiesByElectionId = CitiesByElectionId(selectedElectionId);
  queries.factions = Factions(selectedCityId);

  useEffect(() => {
    form.setFieldValue('electionCityID', undefined);
  }, [selectedElectionId]);

  useEffect(() => {
    form.setFieldValue('entityID', undefined);
  }, [selectedCityId]);

  const isLoading = Object.values(queries).some(query => query.isLoading);
  const hasError = Object.values(queries).some(query => query.error);

  if (isLoading) return <p>Loading data...</p>;
  if (hasError) return <p>Error loading data</p>;

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
          <Section header="מאפייני הבחירות">
            <Flex direction="column">
              <form.AppField name="electionDate">
                {field => (
                  <field.Select label="תאריך בחירות" options={queries.elections.data || []} />
                )}
              </form.AppField>

              <form.AppField name="electionCityID">
                {field => (
                  <field.Select
                    disabled={!selectedElectionId}
                    label="ישוב"
                    options={selectedElectionId ? queries.citiesByElectionId?.data || [] : []}
                  />
                )}
              </form.AppField>
              <form.AppField name="entityID">
                {field => (
                  <field.Select
                    disabled={!selectedCityId}
                    label="סיעה"
                    options={selectedCityId ? queries.factions?.data || [] : []}
                  />
                )}
              </form.AppField>
            </Flex>
          </Section>
        </SideBySideCard.Right>
        <SideBySideCard.Left>
          <Section header="מאפייני התרומה/ הערבות/ ההלוואה">
            <Flex>
              <Flex direction="column">
                <Flex>
                  <form.AppField name="fullName">
                    {field => <field.Input label="שם מלא" />}
                  </form.AppField>
                  <form.AppField name="cityID">
                    {field => <field.Select label="ישוב" options={queries.cities.data || []} />}
                  </form.AppField>
                  <form.AppField name="countryID">
                    {field => <field.Select label="ארץ" options={queries.countries.data || []} />}
                  </form.AppField>
                </Flex>
                <Flex>
                  <form.AppField
                    name="fromDate"
                    validators={{
                      onChangeListenTo: ['toDate'],
                      onChange: ({ value, fieldApi }) =>
                        validators.validateFromDateRange(
                          value,
                          fieldApi.form.getFieldValue('toDate')
                        )
                    }}
                  >
                    {field => <field.DatePicker label="מתאריך" inputReadOnly={false} />}
                  </form.AppField>
                  <form.AppField
                    name="toDate"
                    validators={{
                      onChangeListenTo: ['fromDate'],
                      onChange: ({ value, fieldApi }) =>
                        validators.validateToDateRange(
                          fieldApi.form.getFieldValue('fromDate'),
                          value
                        )
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
                <Button type="submit">
                  <Image src={searchIcon} alt="search" />
                  סינון
                </Button>
                <Button
                  onClick={() => {
                    form.reset(undefined, {
                      keepDefaultValues: true
                    });
                  }}
                >
                  נקה סינון
                </Button>
              </Flex>
            </Flex>
          </Section>
        </SideBySideCard.Left>
      </SideBySideCard>
    </form>
  );
};
export default PublisherBanner;
