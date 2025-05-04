import { useEffect } from 'react';
import { useStore } from '@tanstack/react-form';
import { Button } from '@ui/button/button';
import { Image } from '@ui/image/image';
import { Flex } from '@ui/layout/flex/flex';
import { SideBySideCard } from '@ui/side-by-side-card/side-by-side-card';
import useAppForm from '~/hooks/use-app-form';
import { usePublisherBannerQueries } from '~/hooks/queries/use-publisher-banner-queries';
import type { PublisherSearch } from '~/types/publisher-search';
import logo from '~/assets/images/LogoMevaker.png';
import * as validators from '~/validators/pages/publisher-validators';

export const PublisherBanner = () => {
  let queries = usePublisherBannerQueries();

  const form = useAppForm({
    defaultValues: {
      electionDate: queries.elections.data?.[0]?.value ?? ''
    } as PublisherSearch,
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value));
    }
  });

  const selectedElectionId = useStore(form.store, state => state.values.electionDate);
  const selectedCityId = useStore(form.store, state => state.values.electionCityID);

  useEffect(() => {
    if (selectedElectionId) {
      form.setFieldValue('electionCityID', undefined);
    }
  }, [selectedElectionId, form]);

  queries = usePublisherBannerQueries(selectedElectionId, selectedCityId);

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
          <h3>מאפייני הבחירות</h3>
          <Flex direction="column">
            <form.AppField name="electionDate">
              {field => (
                <field.Select label="תאריך בחירות" options={queries.elections.data || []} />
              )}
            </form.AppField>

            <form.AppField name="electionCityID">
              {field => (
                <field.Select
                  label="ישוב"
                  options={selectedElectionId ? queries.citiesByElectionId.data || [] : []}
                />
              )}
            </form.AppField>
            <form.AppField name="entityID">
              {field => (
                <field.Select
                  label="סיעה"
                  options={selectedCityId ? queries.factions.data || [] : []}
                />
              )}
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
              <Button type="submit">
                <Image src={logo} alt="search" />
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
        </SideBySideCard.Left>
      </SideBySideCard>
    </form>
  );
};
export default PublisherBanner;
