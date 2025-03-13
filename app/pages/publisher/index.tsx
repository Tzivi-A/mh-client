import { Button } from '~/components/button/button';
import { Card } from '~/components/card/card';
import { Image } from '~/components/image/image';
import logo from '~/assets/images/LogoMevaker.png';
import MHSelect from '~/components/select/select';

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

  return (
    <div>
      <Card>
        Publisher
        <Button onClick={() => window.alert('Hello! I am the Mevaker!')} type="submit">
          Click the Mevaker
        </Button>
        <Image src={logo} alt="mevaker" />
        <MHSelect options={options} onChange={handleChange} />
      </Card>
    </div>
  );
};
