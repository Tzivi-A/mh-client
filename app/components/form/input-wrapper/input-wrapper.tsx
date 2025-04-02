import React, { type ReactNode } from 'react';
import './input-wrapper.css';
import { ConfigProvider } from 'antd';
import heIL from 'antd/locale/he_IL';

interface InputWrapperProps<T> {
  label: ReactNode;
  id: string;
  value: T;
  children: React.ReactNode;
  error?: string;
  focused?: boolean;
}

const InputWrapper = <T,>({ label, id, children, value, error, focused }: InputWrapperProps<T>) => {
  return (
    <div className={`malam-input-wrapper-container ${value || focused ? 'focused' : ''}`}>
      <label htmlFor={id} className="malam-label">
        {label}
      </label>
      <ConfigProvider direction="rtl" locale={heIL}>
        {children}
      </ConfigProvider>
      {error && <div className="error">{error}</div>}
      </div>
  );
};

export default InputWrapper;
