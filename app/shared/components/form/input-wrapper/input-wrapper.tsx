import React, { type ReactNode } from 'react';
import './input-wrapper.css';

export interface InputWrapperProps {
  label: ReactNode;
  id: string;
  children: React.ReactNode;
  error?: string;
}

const InputWrapper = ({ label, id, children, error }: InputWrapperProps) => {
  return (
    <div className="malam-input-wrapper-container">
      <label id={`${id}-label`} htmlFor={id} className="malam-label">
        {label}
      </label>
      {children}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default InputWrapper;
