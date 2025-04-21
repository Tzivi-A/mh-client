import { Button } from '~/components/button/button';
import { Card } from '~/components/card/card';
import { Image } from '~/components/image/image';
import logo from '~/assets/images/LogoMevaker.png';
import useAppForm from '~/hooks/use-app-form';
import './registration.css';
import type { DatePickerType } from '~/types/date-types';
import { useState } from 'react';
import type { SelectOption } from '~/types/select-option';
import { useStore } from '@tanstack/react-form';
import { validateDateRange } from '~/utils/validators';
import { useAppMutation } from '~/hooks/use-app-mutation';
import { useAppQuery } from '~/hooks/use-app-query';

interface RegistrationFormValues {
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

export const RegistrationPage = () => {
  const [response, setResponse] = useState<string | null>(null);

  // Fetching options
  const optionsQuery = useAppQuery<SelectOption[]>({
    url: 'api/options/getOptions',
    queryData: {}
  });

  // Mutation for adding a new option
  const addOptionMutation = useAppMutation<SelectOption>({
    url: 'api/options/createOption',
    method: 'POST',
    mutationOptions: {
      onSuccess: () => optionsQuery.refetch()
    }
  });

  const addOption = (newOption: SelectOption) => {
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

  const todoApi = useAppQuery({ url: 'todos/1' });
  const todoApiFuture = useAppQuery({ url: 'todos/3', isRunNow: false });

  const form = useAppForm({
    defaultValues: {
      city: 'option1',
      firstName: 'אבי',
      fromDate: '05/03/2025',
      toDate: '25/03/2025'
    } as RegistrationFormValues,
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
    defaultValues: {} as SelectOption,
    onSubmit: ({ value }) => {
      handleSubmit(value);
    }
  });

  const handleSubmit = (option: SelectOption) => {
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

            {optionsQuery.data && (
              <form.AppField name="city">
                {field => <field.Select label="ערים" options={optionsQuery.data || []} />}
              </form.AppField>
            )}
            <form.AppField name="firstName" children={field => <field.Input label="שם פרטי" />} />
            <form.AppField
              name="lastName"
              validators={{
                onChange: ({ value }) => !value && 'שדה חובה'
              }}
              children={field => <field.Input label="שם משפחה" />}
            />
            <form.AppField
              name="number"
              children={field => <field.Number label="מספר" max={2} />}
            />
            <form.AppField
              name="fromDate"
              children={field => <field.DatePicker label="מתאריך" maxDate={toDate} />}
            />
            <form.AppField
              name="toDate"
              children={field => (
                <field.DatePicker label="עד תאריך" inputReadOnly={false} minDate={fromDate} />
              )}
            />
            <form.AppField
              name="validateFromDate"
              validators={{
                onChangeListenTo: ['validateToDate'],
                onChange: ({ value, fieldApi }) =>
                  validateFormDateRange(value, fieldApi.form.getFieldValue('validateToDate'))
              }}
              children={field => <field.DatePicker label="מתאריך - ולידציה" />}
            />
            <form.AppField
              name="validateToDate"
              validators={{
                onChangeListenTo: ['validateFromDate'],
                onChange: ({ value, fieldApi }) =>
                  validateFormDateRange(fieldApi.form.getFieldValue('validateFromDate'), value)
              }}
              children={field => (
                <field.DatePicker label="עד תאריך - ולידציה" inputReadOnly={false} />
              )}
            />
            <form.AppField
              name="agreeToTerms"
              children={field => <field.CheckBox label="מסכים לתנאים" />}
            />
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
            children={field => <field.Input label="label" />}
          />
          <Button type="submit">Submit Option</Button>
        </Card>
      </form>
      {response && <p>{response}</p>}
    </main>
  );
};

export default RegistrationPage;
