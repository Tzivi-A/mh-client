import React from 'react';
import './input-wrapper.css';

interface InputWrapperProps {
  label: React.ReactNode;
  id: string;
  value: string | undefined;
  children: React.ReactNode;
  error?: string;
  hideLabelOnFocus?: boolean;
}

const InputWrapper = ({
  label,
  id,
  children,
  value,
  error,
  hideLabelOnFocus = false
}: InputWrapperProps) => {
  return (
    <div className={`malam-select-container ${value ? 'focused' : ''}`}>
      <label
        htmlFor={id}
        className={`malam-label ${hideLabelOnFocus && !value ? 'hidden-label' : ''}`}
      >
        {label}
      </label>
      {children}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default InputWrapper;
