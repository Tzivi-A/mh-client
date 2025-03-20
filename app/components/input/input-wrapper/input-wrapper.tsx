import React, { useEffect, useRef, useState } from 'react';
import type { ReactElement } from 'react';
import './input-wrapper.css';

interface InputWrapperProps {
  label: React.ReactNode;
  id: string;
  children: ReactElement;
}

const InputWrapper = ({ label, id, children }: InputWrapperProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLElement | null>(null);

  const checkValue = () => {
    if (!inputRef.current) return;
    const value = 'value' in inputRef.current ? (inputRef.current as HTMLInputElement).value : '';
    setHasValue(!!value);
  };

  useEffect(() => {
    checkValue(); // Check initial value on mount
  }, []);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    checkValue();
    if (!hasValue) setIsFocused(false);
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
