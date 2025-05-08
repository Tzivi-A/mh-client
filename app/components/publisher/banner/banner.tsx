import { useEffect } from 'react';
import { Button } from '@ui/button/button';
import { Image } from '@ui/image/image';
import { Flex } from '@ui/layout/flex/flex';
import { SideBySideCard } from '@ui/side-by-side-card/side-by-side-card';
import useAppForm, { useStore } from '@hooks/use-app-form';
import {
  useCitiesByElectionId,
  useFactions,
  usePublisherBannerQueries
} from '~/hooks/api/queries/publisher/banner';
import type { PublisherSearch } from '~/types/publisher/publisher-search-type';
import searchIcon from '~/assets/images/search-icon.svg';
import * as rangeValidators from '~/validators/common/range-validators';
import { validateAtLeastOneExtraField } from '~/validators/common/form-validators';
import Section from '@ui/section/section';
import { PublicationSearchEnum } from '~/types/enums/publication-search';
import { isCheckBoxGroupRequired } from '~/validators/common/requierd-validators';

export const PublisherBanner = () => {
  const queries = usePublisherBannerQueries();

  const form = useAppForm({
    defaultValues: {
      electionDate: queries.elections.data?.find(e => e.value !== '')?.value ?? '',
      publicationSearchType: [
        PublicationSearchEnum.Donation,
        PublicationSearchEnum.Guarantee,
        PublicationSearchEnum.Loan
      ]
    } as PublisherSearch,
    validators: {
      onSubmit: ({ value }) => validateAtLeastOneExtraField(value, ['publicationSearchType'])
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value));
    }
  });

  const selectedElectionId = useStore(form.store, state => state.values.electionDate);
  const selectedCityId = useStore(form.store, state => state.values.electionCityID);
  const formErrorMap = useStore(form.store, state => state.errorMap);

  queries.citiesByElectionId = useCitiesByElectionId(selectedElectionId);
  queries.factions = useFactions(selectedCityId);

  const isFormReady =
    queries.elections.data?.length && (!selectedElectionId || selectedElectionId !== '');

  useEffect(() => {
    if (isFormReady) {
      form.setFieldValue('electionCityID', undefined);
    }
  }, [selectedElectionId]);

  useEffect(() => {
    if (isFormReady) {
      form.setFieldValue('entityID', undefined);
    }
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
          <Section header="מאפייני התרומה/ הערבות/ ההלוואה" error={formErrorMap.onSubmit}>
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
                        rangeValidators.validateFromDateRange(
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
                        rangeValidators.validateToDateRange(
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
                        rangeValidators.validateFromSumRange(
                          value,
                          fieldApi.form.getFieldValue('toSum')
                        )
                    }}
                  >
                    {field => <field.Number label="מסכום" />}
                  </form.AppField>
                  <form.AppField
                    name="toSum"
                    validators={{
                      onChangeListenTo: ['fromSum'],
                      onChange: ({ value, fieldApi }) =>
                        rangeValidators.validateToSumRange(
                          fieldApi.form.getFieldValue('fromSum'),
                          value
                        )
                    }}
                  >
                    {field => <field.Number label="עד סכום" />}
                  </form.AppField>
                </Flex>
              </Flex>
              <Flex direction="column">
                <Flex>
                  <form.AppField
                    name="publicationSearchType"
                    validators={{
                      onChange: ({ value }) => isCheckBoxGroupRequired(value)
                    }}
                  >
                    {field => (
                      <field.CheckBoxGroup
                        label="סוג חיפוש"
                        isRequired={true}
                        options={queries.publicationSearch.data || []}
                      />
                    )}
                  </form.AppField>
                </Flex>
                <Flex>
                  <Button type="submit">
                    <Image src={searchIcon} alt="search" />
                    חפש
                  </Button>
                  <Button
                    onClick={() => {
                      form.reset(undefined, {
                        keepDefaultValues: true
                      });
                    }}
                    variant="text"
                  >
                    נקה מאפייני חיפוש
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Section>
        </SideBySideCard.Left>
      </SideBySideCard>
    </form>
  );
};
export default PublisherBanner;
