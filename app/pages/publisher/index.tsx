import { Button } from '~/components/button/button';
import { Card } from '~/components/card/card';
import { Image } from '~/components/image/image';
import logo from '~/assets/images/LogoMevaker.png';
import { useQuery } from '~/api/use-query';
import useAppForm from '~/hooks/use-app-form';
import './publisher.css';
import type { DatePickerType } from '~/types/date-types';
import { useOption } from '~/hooks/use-option';
import { useState } from 'react';
import type { Option } from '~/types/option';

interface PublisherFormValues {
  city: string;
  firstName: string;
  lastName?: string;
  number?: string;
  fromDate?: DatePickerType;
  toDate?: DatePickerType;
}

export const PublisherPage = () => {
  const [response, setResponse] = useState<string | null>(null);

  const query = useQuery('https://jsonplaceholder.typicode.com/todos/1');
  const { data, error, isLoading, addOption } = useOption();

  const form = useAppForm({
    defaultValues: {
      city: 'option1',
      firstName: 'אבי',
      fromDate: '05/03/2025',
      toDate: '25/03/2025'
    } as PublisherFormValues,
    validators: {
      onChange: ({ value }) =>
        value.firstName === value.lastName && 'FirstName and Last Name may not be the same'
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value));
    }
  });

  const formOptions = useAppForm({
    defaultValues: {} as Option,
    onSubmit: ({ value }) => {
      handleSubmit(value);
    }
  });

  const handleSubmit = async (option: Option) => {
    await addOption(option);
    setResponse('Option added successfully!');
  };

  if (isLoading) return <p>Loading options data...</p>;
  if (error) return <p>Error loading options data</p>;

  return (
    <main>
      <div>
        <Card>
          <div>Publisher {query?.isPending.toString()}</div>
          <div>
            <Button onClick={() => window.alert('Hello! I am the Mevaker!')} type="submit">
              Click the Mevaker
            </Button>
          </div>
          <Image src={logo} alt="mevaker" />
          <form
            className="form"
            onSubmit={e => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            {data && (
              <form.AppField name="city">
                {field => <field.Select label="ערים" options={data} />}
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
              children={field => (
                <field.DatePicker
                  label="מתאריך"
                  inputReadOnly={true}
                  maxDate={form.state.values.toDate}
                />
              )}
            />
            <form.AppField
              name="toDate"
              children={field => (
                <field.DatePicker
                  label="עד תאריך"
                  inputReadOnly={false}
                  minDate={form.state.values.fromDate}
                />
              )}
            />
            <Button type="submit">Submit Form</Button>
          </form>
        </Card>
        <Card>
          <form
            className="form"
            onSubmit={e => {
              e.preventDefault();
              formOptions.handleSubmit();
            }}
          >
            <formOptions.AppField
              name="label"
              validators={{
                onChange: ({ value }) => !value && 'שדה חובה'
              }}
              children={field => <field.Input label="label" />}
            />
            <Button type="submit">Submit Option</Button>
          </form>
          {response && <p>{response}</p>}
        </Card>
      </div>
    </main>
  );
};

export default PublisherPage;
