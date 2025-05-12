import Header from '@ui/header/header';
import { Image } from '@ui/image/image';
import { Divider } from '@ui/divided-row-list/divider';
import { Flex } from '@ui/layout/flex/flex';
import { DividerTypeEnum } from '@app-types/enums/divider-type';
import LogoHeader from '~/assets/images/logo_mevaker_hebrew.svg';
import './mh-header.css';

export interface HeaderProps {
  children?: React.ReactNode;
}

export const MHHeader = ({ children }: HeaderProps) => {
  return (
    <Header position="sticky">
      <Flex align="center">
        <Image src={LogoHeader} alt="logo" />
        <Divider type={DividerTypeEnum.Line} />
        <div className="children-header">{children}</div>
      </Flex>
    </Header>
  );
};

export default MHHeader;
