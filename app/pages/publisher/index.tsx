import { Button } from '~/components/button/button';
import { Card } from '~/components/card/card';
import { Image } from '~/components/image/image';
import logo from '~/assets/images/LogoMevaker.png';
import Select from '~/components/input/select/select';
import { useQuery } from '~/api/use-query';
import { CitiesOptions } from '~/api/mock/select-option';

export const PublisherPage = () => {
  const handleChange = (value: string) => {
    console.log(`Selected: ${value}`);
  };

  const query = useQuery('https://jsonplaceholder.typicode.com/todos/1');

  return (
    <div>
      <Card>
        <div>Publisher {query?.isPending.toString()}</div>
        <div>
          <Button onClick={() => window.alert('Hello! I am the Mevaker!')} type="submit">
            Click the Mevaker
          </Button>
        </div>
        <Image src={logo} alt="mevaker" />
        <Select options={CitiesOptions} onChange={handleChange} label="ערים" id="cities" />
      </Card>
    </div>
  );
};

export default PublisherPage;
