export interface LinkProps {
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
}

export const Link = ({ children, href, target, rel, className }: LinkProps) => {
  return (
    <a href={href} target={target} className={className} rel={rel}>
      {children}
    </a>
  );
};

export default Link;
