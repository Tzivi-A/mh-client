import { Button } from '~/components/button/button';
import { Card } from '~/components/card/card';
import { Image } from '~/components/image/image';
import logo from '~/assets/images/LogoMevaker.png';
import { useQuery } from '~/api/use-query';
import { CitiesOptions } from '~/api/mock/select-option';
import useAppForm from '~/hooks/use-app-form';
import Layout from '~/components/layout/layout';


export const PublisherPage = () => {
  const query = useQuery('https://jsonplaceholder.typicode.com/todos/1');
  
  const form = useAppForm({  
    defaultValues:{
      city: 'ביתר',
      name: 'אבי',
    },
    onSubmit:({ value }) => {
      alert(JSON.stringify(value));
    }});

  return (
    <Layout form={form}>
      <div>
        <Card>
          <div>Publisher {query?.isPending.toString()}</div>
          <div>
            <Button onClick={() => window.alert('Hello! I am the Mevaker!')} type="submit">
              Click the Mevaker
            </Button>
          </div>
          <Image src={logo} alt="mevaker" />
          <form.AppField name="city" children={(field) => <field.Select label="ערים" options={CitiesOptions}  />}/>
          <form.AppField name="name" children={(field) => <field.Input label="שם פרטי" />} />
        </Card>
      </div>
    </Layout>
  );
};

export default PublisherPage;