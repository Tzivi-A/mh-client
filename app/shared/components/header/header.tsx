import styles from './header.module.css';

export interface HeaderProps {
  children?: React.ReactNode;
  position?: React.CSSProperties['position'];
}

export const Header = ({ children, position }: HeaderProps) => {
  return (
    <header
      className={styles.header}
      style={
        {
          '--header-position': position
        } as React.CSSProperties
      }
    >
      {children}
    </header>
  );
};

export default Header;
