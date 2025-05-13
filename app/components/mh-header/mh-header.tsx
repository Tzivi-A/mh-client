import Header from '@ui/header/header';
import { Image } from '@ui/image/image';
import { Divider } from '@ui/divided-row-list/divider';
import { Flex } from '@ui/layout/flex/flex';
import Link from '@ui/link/link';
import { DividerTypeEnum } from '@app-types/enums/divider-type';
import LogoHeader from '~/assets/images/logo_mevaker_hebrew.svg';
import LinkIcon from '~/assets/images/external-link.svg';
import styles from './mh-header.module.css';

export interface HeaderProps {
  title?: string;
  isLink?: boolean;
}

export const MHHeader = ({ title, isLink = false }: HeaderProps) => {
  return (
    <Header className={styles['mh-header']}>
      <Flex align="center">
        <Image src={LogoHeader} alt="logo" />
        <Divider type={DividerTypeEnum.Line} />
        <div className={styles['children-header']}>
          <Flex justify="space-between">
            <h3>{title}</h3>
            {isLink && (
              <div className={styles['mh-link']}>
                <Link
                  href="https://www.mevaker.gov.il/"
                  target="_blank"
                  className={styles['link-icon']}
                  rel="noreferrer"
                >
                  <Image src={LinkIcon} alt="Mevaker hamedina link" />
                  לאתר מבקר המדינה
                </Link>
              </div>
            )}
          </Flex>
        </div>
      </Flex>
    </Header>
  );
};

export default MHHeader;
