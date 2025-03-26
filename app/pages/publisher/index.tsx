import { Button } from '~/components/button/button';
import { Card } from '~/components/card/card';
import { Image } from '~/components/image/image';
import logo from '~/assets/images/LogoMevaker.png';
import { AppFormSelect as Select } from '~/components/input/select/app-form-select';
//import { AppFormSelect as Select } from '~/components/input/select/app-form-select';
import { useQuery } from '~/api/use-query';
import { CitiesOptions } from '~/api/mock/select-option';
import useAppForm from '~/hooks/use-app-form';
import TextInput from '~/components/input/text-input/text-input';
import { useState } from 'react';

export const PublisherPage = () => {
  const query = useQuery('https://jsonplaceholder.typicode.com/todos/1');
  //const [value, setValue] = useState('');
  const form = useAppForm({
    defaultValues: {
      city: 'ביתר'
    },
    // validators: {
    //   onChange: ({ value }) =>
    //     value.firstName === value.lastName && 'FirstName and Last Name may not be the same'
    // },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value));
    }
  });
  const [firstName, setFirstName] = useState('');
  const [city, setCity] = useState('');

  return (
    <main>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          void form.handleSubmit();
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
            <form.AppField name="city" children={field => <field.Select label="ערים" options={CitiesOptions} />} />
          </Card>
        </div>
      </form>
    </main>
    <div>
      <Card>
        <div>Publisher {query?.isPending.toString()}</div>
        <div>
          <Button onClick={() => window.alert('Hello! I am the Mevaker!')} type="submit">
            Click the Mevaker
          </Button>
        </div>
        <Image src={logo} alt="mevaker" />
        {/* <form.Field name="cities">
              {() => <Select options={CitiesOptions} label="ערים" />}
            </form.Field> */}
        <TextInput id="firstName" value={firstName} label="שם פרטי" onChange={setFirstName} />
        <Select options={CitiesOptions} label="ערים" id="cities" value={city} onChange={setCity} />
      </Card>
    </div>
  );
};

export default PublisherPage;
