import { Button } from '~/components/button/button';
import { Card } from '~/components/card/card';
import { Image } from '~/components/image/image';
import logo from '~/assets/images/LogoMevaker.png';
import { useQuery } from '~/api/use-query';
import { CitiesOptions } from '~/api/mock/select-option';
import { useCustomAppForm as useAppForm } from '~/hooks/use-custom-app-form';
import './publisher.css';
import { useStore } from '@tanstack/react-form';

interface PublisherFormValues {
  city: string;
  firstName: string;
  lastName?: string;
}

export const PublisherPage = () => {
  const query = useQuery('https://jsonplaceholder.typicode.com/todos/1');

  const form = useAppForm<PublisherFormValues>({
    defaultValues: {
      city: 'option1',
      firstName: 'אבי'
    },
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
