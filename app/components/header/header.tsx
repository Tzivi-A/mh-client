import LogoHeader from '~/assets/images/logo_mevaker_hebrew.svg';
import { Image } from '@ui/image/image';
import { Divider } from '@ui/divided-row-list/divider';
import { DividerTypeEnum } from '@app-types/enums/divider-type';
import { Flex } from '@ui/layout/flex/flex';
import './header.css';

export interface HeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <Flex align="center" className="sticky-header">
      <Image src={LogoHeader} alt="logo" />
      <Divider type={DividerTypeEnum.Line} />
      <div className="children-header">{children}</div>
    </Flex>
  );
};

export default Header;
