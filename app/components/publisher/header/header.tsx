import { Image } from '@ui/image/image';
import { Flex } from '@ui/layout/flex/flex';
import Link from '@ui/link/link';
import MHHeader from '~/components/mh-header/mh-header';
import LinkIcon from '~/assets/images/external-link.svg';
import './header.css';

export interface PublisherHeaderProps {
  title: string;
}

export const PublisherHeader = ({ title }: PublisherHeaderProps) => {
  return (
    <MHHeader>
      <Flex justify="space-between">
        <h3>{`תרומות, ערבויות והלוואות ל${title}`}</h3>
        <div className="mh-link">
          <Link
            href="https://www.mevaker.gov.il/"
            target="_blank"
            className="link-icon"
            rel="noreferrer"
          >
            <Image src={LinkIcon} alt="Mevaker hamedina link" />
            לאתר מבקר המדינה
          </Link>
        </div>
      </Flex>
    </MHHeader>
  );
};

export default PublisherHeader;
