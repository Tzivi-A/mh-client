import React from 'react';
import './input-wrapper.css';

interface InputWrapperProps {
  label: React.ReactNode;
  id: string;
  value: string | undefined;
  children: React.ReactNode;
}

const InputWrapper = ({ label, id, children, value }: InputWrapperProps) => {
  return (
    <div className={`malam-select-container ${value ? 'focused' : ''}`}>
      <label htmlFor={id} className="malam-label">
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
