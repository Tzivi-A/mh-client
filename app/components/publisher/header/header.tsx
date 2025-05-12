import { Image } from '@ui/image/image';
import { Flex } from '@ui/layout/flex/flex';
import Header from '~/components/header/header';
import Link from '~/assets/images/external-link.svg';
import './header.css';

export interface PublisherHeaderProps {
  title: string;
}

export const PublisherHeader = ({ title }: PublisherHeaderProps) => {
  return (
    <Header>
      <Flex justify="space-between">
        <h3>{`תרומות, ערבויות והלוואות ל${title}`}</h3>
        <div className="mh-link">
          <a
            href="https://www.mevaker.gov.il/"
            target="_blank"
            className="link-icon"
            rel="noreferrer"
          >
            <Image src={Link} alt="Mevaker hamedina link" />
            לאתר מבקר המדינה
          </a>
        </div>
      </Flex>
    </Header>
  );
};

export default PublisherHeader;
