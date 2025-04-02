import React, { type ReactNode } from 'react';
import './input-wrapper.css';
import { ConfigProvider } from 'antd';
import heIL from 'antd/locale/he_IL';

export interface InputWrapperProps<T> {
  label: ReactNode;
  id: string;
  value: T;
  children: React.ReactNode;
  error?: string;
  focused?: boolean;
  hasFloatingLabel?: boolean;
}

const InputWrapper = <T,>({ label, id, children, value, error, focused, hasFloatingLabel = true}: InputWrapperProps<T>) => {
  return (
    <div className={`malam-input-wrapper-container ${hasFloatingLabel && (value || focused) ? 'focused' : ''}`}>
      <ConfigProvider direction="rtl" locale={heIL}>
        <label id={`${id}-label`} htmlFor={id} className={`${hasFloatingLabel ? 'malam-floating-label' : 'malam-label'}`}>
          {label}
        </label>
        {children}
        {error && <div className="error">{error}</div>}
      </ConfigProvider>
    </div>
  );
};

export default InputWrapper;
