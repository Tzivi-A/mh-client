import { Button } from '~/components/button/button';
import { Card } from '~/components/card/card';
import { Image } from '~/components/image/image';
import logo from '~/assets/images/LogoMevaker.png';
import { useQuery } from '~/api/use-query';
import { CitiesOptions } from '~/api/mock/select-option';
import './publisher.css';
import { useStore } from '@tanstack/react-form';
import useAppForm from '~/hooks/use-app-form';
import type { DatePickerType } from '~/types/date-types';

interface PublisherFormValues {
  city: string;
  firstName: string;
  lastName?: string;
  number?: string;
  fromDate?: DatePickerType;
  toDate?: DatePickerType;
}

export const PublisherPage = () => {
  
  const query = useQuery('https://jsonplaceholder.typicode.com/todos/1');
  const form = useAppForm({
    defaultValues: {
      city: 'ביתר',
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

  const formErrorMap = useStore(form.store, state => state.errorMap);

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
            <div>Publisher {query?.isPending.toString()}</div>
            <div>
              <Button onClick={() => window.alert('Hello! I am the Mevaker!')} type="submit">
                Click the Mevaker
              </Button>
            </div>
            <Image src={logo} alt="mevaker" />
            <form.AppField name="city">
              {field => <field.Select label="ערים" options={CitiesOptions} />}
            </form.AppField>
            <br />
            <form.AppField name="firstName" children={field => <field.Input label="שם פרטי" />} />
            <br />
            <form.AppField
              name="lastName"
              validators={{
                onChange: ({ value }) => !value && 'שדה חובה'
              }}
              children={field => <field.Input label="שם משפחה" />}
            />
            <form.AppField name="number" children={field => <field.Number label="מספר" max={2} />} />
            <form.AppField name="fromDate" children={field => <field.DatePicker label="מתאריך" inputReadOnly={true} maxDate={form.state.values.toDate}/>} />
            <form.AppField name="toDate" children={field => <field.DatePicker label="עד תאריך" inputReadOnly={false} minDate={form.state.values.fromDate}/>} />
            {formErrorMap.onChange && (
              <div>
                <em>{formErrorMap.onChange}</em>
              </div>
            )}
          </Card>
        </div>
      </form>
    </main>
  );
};

export default PublisherPage;
