import { Button } from '~/components/button/button';
import { Card } from '~/components/card/card';
import { Image } from '~/components/image/image';
import logo from '~/assets/images/LogoMevaker.png';
import { useQuery } from '~/api/use-query';
import { CitiesOptions } from '~/api/mock/select-option';
import { useCustomAppForm as useAppForm } from '~/hooks/use-custom-app-form';

interface PublisherFormValues {
  city: string;
  firstName: string;
  lastName?: string;
  number?: string;
}

export const PublisherPage = () => {
  const query = useQuery('https://jsonplaceholder.typicode.com/todos/1');
  const form = useAppForm<PublisherFormValues>({
    defaultValues: {
      city: 'ביתר',
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
            <form.AppField
              name="city"
              children={field => <field.Select label="ערים" options={CitiesOptions} />}
            />
            <form.AppField name="firstName" children={field => <field.Input label="שם פרטי" />} />
            <form.AppField name="lastName" children={field => <field.Input label="שם משפחה" />} />
            <form.AppField name="number" children={field => <field.Number label="מספר" />} />
          </Card>
        </div>
      </form>
    </main>
  );
};

export default PublisherPage;
