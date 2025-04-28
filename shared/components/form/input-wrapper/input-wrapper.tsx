import React, { type ReactNode } from 'react';
import './input-wrapper.css';

export interface InputWrapperProps<T> {
  label: ReactNode;
  id: string;
  value: T;
  children: React.ReactNode;
  error?: string;
  focused?: boolean;
  hasFloatingLabel?: boolean;
}

const InputWrapper = <T,>({
  label,
  id,
  children,
  value,
  error,
  focused,
  hasFloatingLabel = true
}: InputWrapperProps<T>) => {
  return (
    <div
      className={`malam-input-wrapper-container ${hasFloatingLabel && (value || focused) ? 'focused' : ''}`}
    >
      <label
        id={`${id}-label`}
        htmlFor={id}
        className={`${hasFloatingLabel ? 'malam-floating-label' : 'malam-label'}`}
      >
        {label}
      </label>
      {children}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default InputWrapper;
