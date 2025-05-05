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
} from '~/api/queries/publisher/publisher-banner-queries';
import type { PublisherSearch } from '~/types/publisher-search';
import searchIcon from '~/assets/images/search-icon.svg';

import Section from '@ui/section/section';
import type { PublishBannerQueries } from '~/types/queries/publisher/publisher-banner-queries';

export const PublisherBanner = () => {
  const queries: PublishBannerQueries = PublisherBannerQueries();

  const form = useAppForm({
    defaultValues: {
      electionDate: queries.elections.data?.find(e => e.value !== '')?.value ?? ''
    } as PublisherSearch,
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value));
    }
  });

  const selectedElectionId = useStore(form.store, state => state.values.electionDate);
  const selectedCityId = useStore(form.store, state => state.values.electionCityID);

  queries.citiesByElectionId = CitiesByElectionId(selectedElectionId);
  queries.factions = Factions(selectedCityId);

  const isFormReady =
    queries.elections.data?.length && (!selectedElectionId || selectedElectionId !== '');

  useEffect(() => {
    if (isFormReady) form.setFieldValue('electionCityID', undefined);
  }, [selectedElectionId]);

  useEffect(() => {
    if (isFormReady) form.setFieldValue('entityID', undefined);
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
                  <form.AppField name="fromDate">
                    {field => <field.DatePicker label="מתאריך" inputReadOnly={false} />}
                  </form.AppField>
                  <form.AppField name="toDate">
                    {field => <field.DatePicker label="עד תאריך" inputReadOnly={false} />}
                  </form.AppField>
                </Flex>
                <Flex>
                  <form.AppField name="fromSum">
                    {field => <field.Number label="מסכום" />}
                  </form.AppField>
                  <form.AppField name="toSum">
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
