import React from 'react';
import './input-wrapper.css';
import { ConfigProvider } from 'antd';

interface InputWrapperProps {
  label: React.ReactNode;
  id: string;
  value: string | undefined;
  children: React.ReactNode;
  error?: string;
}

const InputWrapper = ({ label, id, children, value, error }: InputWrapperProps) => {
  return (
    <div className={`malam-input-wrapper-container ${value ? 'focused' : ''}`}>
      <label htmlFor={id} className="malam-label">
        {label}
      </label>
      <ConfigProvider direction="rtl">
        {children}
      </ConfigProvider>
      {error && <div className="error">{error}</div>}
      </div>
  );
};

export default InputWrapper;
