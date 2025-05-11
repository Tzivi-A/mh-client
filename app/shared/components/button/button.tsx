import type { ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button';
  variant?: 'solid' | 'outline' | 'text';
  style?: 'primary' | 'default';
}

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'solid',
  style = 'primary'
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${styles.button} ${styles[`btn-${variant}`]} ${styles[`btn-${style}`]}`}
    >
      {children}
    </button>
  );
};
