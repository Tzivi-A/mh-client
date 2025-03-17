import { Button } from '~/components/button/button';
import { Card } from '~/components/card/card';
import { Image } from '~/components/image/image';
import logo from '~/assets/images/LogoMevaker.png';
import MHSelect from '~/components/input/select/select';
import { useQuery } from '~/api/use-query';

const options = [
  { value: 'option1', label: 'ירושלים' },
  { value: 'option2', label: 'ביתר' },
  { value: 'option3', label: 'מודיעין עילית' },
  { value: 'option4', label: 'בני ברק' }
];

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
        <MHSelect options={options} onChange={handleChange} label="ערים" />
      </Card>
    </div>
  );
};

export default PublisherPage;
