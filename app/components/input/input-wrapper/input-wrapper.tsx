import React from 'react';
import './input-wrapper.css';

interface InputWrapperProps {
  label: React.ReactNode;
  id: string;
  value: string | undefined;
  children: React.ReactNode;
  error?: string;
}

const InputWrapper = ({ label, id, children, value, error }: InputWrapperProps) => {
  return (
    <div className={`malam-select-container ${value ? 'focused' : ''}`}>
      <label htmlFor={id} className="malam-label">
        {label}
      </label>
      {children}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default InputWrapper;
