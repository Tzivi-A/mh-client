import { Button } from '~/components/button/button';
import { Card } from '~/components/card/card';
import { Image } from '~/components/image/image';
import logo from '~/assets/images/LogoMevaker.png';
import Select from '~/components/input/select/select';
import { useQuery } from '~/api/use-query';
import { CitiesOptions } from '~/api/mock/select-option';
import { useState } from 'react';

export const PublisherPage = () => {
  const query = useQuery('https://jsonplaceholder.typicode.com/todos/1');
  const [value, setValue] = useState('');

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
        <Select
          options={CitiesOptions}
          onChange={setValue}
          label="ערים"
          id="cities"
          value={value}
        />
      </Card>
    </div>
  );
};

export default PublisherPage;
