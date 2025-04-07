import { Button } from '~/components/button/button';
import { Card } from '~/components/card/card';
import { Image } from '~/components/image/image';
import logo from '~/assets/images/LogoMevaker.png';
import { CitiesOptions } from '~/api/mock/select-option';
import useAppForm from '~/hooks/use-app-form';
import './publisher.css';
import type { DatePickerType } from '~/types/date-types';
import { useStore } from '@tanstack/react-form';
import { validateDateRange } from '~/utils/validators';
import { useAppQuery } from '~/hooks/use-app-query';
import { useAppMutation } from '~/hooks/use-app-mutation';

interface PublisherFormValues {
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

export const PublisherPage = () => {
  // const { mutate } = useAppMutation({
  //   url: 'https://api.agify.io/?name=meelad',
  //   mutationOptions: {}
  // });

  const mutation = useAppMutation({
    url: 'https://api.agify.io',
    mutationOptions: {
      onSuccess: data => {
        console.log('Mutation successful:', data);
      },
      onError: error => {
        console.error('Mutation failed:', error);
      }
    }
  });

  const handleMutation = () => {
    mutation.mutate({
      requestData: { key: 'name' },
      queryStringData: { param: 'meelad' }
    });
  };

  handleMutation();

  const query = useAppQuery({ url: 'todos/1', queryData: {} });
  const form = useAppForm({
    defaultValues: {
      city: 'option1',
      firstName: 'אבי',
      fromDate: '05/03/2025',
      toDate: '25/03/2025'
    } as PublisherFormValues,
    validators: {
      onChange: ({ value }) =>
        value.firstName === value.lastName && 'FirstName and LastName may not be the same'
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value));
    }
  });

  const fromDate = useStore(form.store, state => state.values.fromDate);
  const toDate = useStore(form.store, state => state.values.toDate);

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
            <div>Publisher Query is pending: {query?.isPending.toString()}</div>
            <div>
              <Button onClick={() => window.alert('Hello! I am the Mevaker!')} type="submit">
                Click the Mevaker
              </Button>
            </div>
            <Image src={logo} alt="mevaker" />
            <form.AppField name="city">
              {field => <field.Select label="ערים" options={CitiesOptions} />}
            </form.AppField>
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
    </main>
  );
};

export default PublisherPage;
