import type { ReactNode } from 'react';
import './button.css';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type?: 'submit' | 'button';
}

export const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="button">
      {children}
    </button>
  );
};
