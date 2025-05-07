import { Button } from '@ui/button/button';
import { Card } from '@ui/card/card';
import { Image } from '@ui/image/image';
import logo from '~/assets/images/logo-mevaker.png';
import useAppForm, { useStore } from '@hooks/use-app-form';
import './component-dashboard.css';
import type { DatePickerType } from '@app-types/date-type';
import { useState } from 'react';
import type { Option } from '@app-types/option-type';
import { useAppMutation } from '@hooks/use-app-mutation';
import { useAppQuery } from '@hooks/use-app-query';
import { Flex } from '@ui/layout/flex/flex';
import { validateDateRange } from '@validators/range-validators';

interface ComponentDashboardFormValues {
  city: string;
  firstName: string;
  lastName?: string;
  number?: string;
  fromDate?: DatePickerType;
  toDate?: DatePickerType;
  validateFromDate?: DatePickerType;
  validateToDate?: DatePickerType;
  agreeToTerms?: boolean;
}

export const ComponentDashboardPage = () => {
  const [response, setResponse] = useState<string | null>(null);

  // Fetching options
  const optionsQuery = useAppQuery<Option[]>({
    url: 'api/options/getOptions'
  });

  // Mutation for adding a new option
  const addOptionMutation = useAppMutation<Option>({
    url: 'api/options/createOption',
    method: 'POST',
    mutationOptions: {
      onSuccess: () => optionsQuery.refetch()
    }
  });

  const addOption = (newOption: Option) => {
    addOptionMutation.mutateAsync({
      requestData: { label: newOption.label }
    });
  };

  const getUserApi = useAppMutation({
    url: 'https://reqres.in/api/users',
    method: 'POST', // Specify POST method
    mutationOptions: {
      onSuccess: data => console.log('Mutation successful:', data),
      onError: error => console.error('Mutation failed:', error)
    }
  });

  const todoApi = useAppQuery({ url: 'https://jsonplaceholder.typicode.com/todos/1' });
  const todoApiFuture = useAppQuery({
    url: 'https://jsonplaceholder.typicode.com/todos/3',
    isRunNow: false
  });

  const form = useAppForm({
    defaultValues: {
      city: 'option1',
      firstName: 'אבי',
      fromDate: '05/03/2025',
      toDate: '25/03/2025'
    } as ComponentDashboardFormValues,
    validators: {
      onChange: ({ value }) =>
        value.firstName === value.lastName && 'FirstName and LastName may not be the same'
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value));
      todoApiFuture.refetch();

      // Example of triggering the mutation with POST data
      getUserApi.mutate({
        requestData: {
          name: 'John', // Data to be sent in the POST request body
          job: 'developer'
        }
      });
    }
  });

  const fromDate = useStore(form.store, state => state.values.fromDate);
  const toDate = useStore(form.store, state => state.values.toDate);

  const formOptions = useAppForm({
    defaultValues: {} as Option,
    onSubmit: ({ value }) => {
      handleSubmit(value);
    }
  });

  const handleSubmit = (option: Option) => {
    addOption(option);
    formOptions.reset();
    setResponse('Option added successfully!');
  };

  if (optionsQuery.isLoading) return <p>Loading options data...</p>;
  if (optionsQuery.error) return <p>Error loading options data</p>;

  const validateFormDateRange = (fromDate: DatePickerType, toDate: DatePickerType) =>
    validateDateRange(fromDate, toDate) && '"מתאריך" חייב להיות מוקדם מ"עד תאריך"';

  return (
    <main>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <div>
          <Card>
            <div>Publisher Query is pending: {todoApi?.isPending.toString()}</div>
            <div>
              <Button type="submit">Click the Mevaker</Button>
            </div>
            <Image src={logo} alt="mevaker" />
            <Flex direction="column">
              <div>test</div>
              <div>test</div>
              <div>test</div>
              <div>test</div>
            </Flex>

            {optionsQuery.data && (
              <form.AppField name="city">
                {field => <field.Select label="ערים" options={optionsQuery.data || []} />}
              </form.AppField>
            )}

            {optionsQuery.data && (
              <form.AppField name="city">
                {field => <field.CheckBoxGroup label="ערים" options={optionsQuery.data || []} />}
              </form.AppField>
            )}

            {optionsQuery.data && (
              <form.AppField name="city">
                {field => <field.RadioButton label="ערים" options={optionsQuery.data || []} />}
              </form.AppField>
            )}
            <form.AppField name="firstName">
              {field => <field.Input label="שם פרטי" />}
            </form.AppField>
            <form.AppField
              name="lastName"
              validators={{
                onChange: ({ value }) => !value && 'שדה חובה'
              }}
            >
              {field => <field.Input label="שם משפחה" />}
            </form.AppField>
            <form.AppField name="number">
              {field => <field.Number label="מספר" max={2} />}
            </form.AppField>
            <form.AppField name="fromDate">
              {field => <field.DatePicker label="מתאריך" maxDate={toDate} />}
            </form.AppField>
            <form.AppField name="toDate">
              {field => (
                <field.DatePicker label="עד תאריך" inputReadOnly={false} minDate={fromDate} />
              )}
            </form.AppField>
            <form.AppField
              name="validateFromDate"
              validators={{
                onChangeListenTo: ['validateToDate'],
                onChange: ({ value, fieldApi }) =>
                  validateFormDateRange(value, fieldApi.form.getFieldValue('validateToDate'))
              }}
            >
              {field => <field.DatePicker label="מתאריך - ולידציה" />}
            </form.AppField>
            <form.AppField
              name="validateToDate"
              validators={{
                onChangeListenTo: ['validateFromDate'],
                onChange: ({ value, fieldApi }) =>
                  validateFormDateRange(fieldApi.form.getFieldValue('validateFromDate'), value)
              }}
            >
              {field => <field.DatePicker label="עד תאריך - ולידציה" inputReadOnly={false} />}
            </form.AppField>
            <form.AppField name="agreeToTerms">
              {field => <field.CheckBox label="מסכים לתנאים" />}
            </form.AppField>
          </Card>
        </div>
      </form>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          formOptions.handleSubmit();
        }}
      >
        <Card>
          <formOptions.AppField
            name="label"
            validators={{
              onChange: ({ value }) => !value && 'שדה חובה'
            }}
          >
            {field => <field.Input label="label" />}
          </formOptions.AppField>
          <Button type="submit">Submit Option</Button>
        </Card>
      </form>
      {response && <p>{response}</p>}
    </main>
  );
};

export default ComponentDashboardPage;
