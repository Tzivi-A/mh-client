import React, { type ReactNode } from 'react';
import './input-wrapper.css';
import { Flex } from '@ui/layout/flex/flex';

export interface InputWrapperProps {
  label: ReactNode;
  id: string;
  children: React.ReactNode;
  error?: string;
  isRequired?: boolean;
}

const InputWrapper = ({ label, id, children, error, isRequired }: InputWrapperProps) => {
  return (
    <div className="malam-input-wrapper-container">
      <Flex>
        <label id={`${id}-label`} htmlFor={id} className="malam-label">
          {label}
        </label>
        {isRequired && (
          <>
            <span className="malam-required-label" aria-hidden="true">
              *
            </span>
            <span className="sr-only">שדה חובה</span>
          </>
        )}
      </Flex>
      {children}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default InputWrapper;
