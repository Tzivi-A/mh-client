import React, { useEffect, useRef, useState } from 'react';
import type { ReactElement } from 'react';
import './input-wrapper.css';

interface InputWrapperProps {
  label: React.ReactNode;
  id: string;
  value: string | undefined;
  children: ReactElement;
}

const InputWrapper = ({ label, id, children, value }: InputWrapperProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const checkValue = () => {  
    return !!value;
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {    
    if (!checkValue()) setIsFocused(false);
  };

  return (
    <div className={`custom-select-container ${isFocused ? 'focused' : ''}`}>
      <label htmlFor={id} className="custom-label">
        {label}
      </label>
      {React.isValidElement(children) &&
        React.cloneElement(children, {
          onFocus: handleFocus,
          onBlur: handleBlur
        } as Partial<typeof children.props>)}
    </div>
  );
};

export default InputWrapper;
