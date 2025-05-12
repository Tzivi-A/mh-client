export interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className }: HeaderProps) => {
  return <header className={className}>{children}</header>;
};

export default Header;
