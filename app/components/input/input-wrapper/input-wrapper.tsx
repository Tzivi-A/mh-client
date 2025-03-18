import './input-wrapper.css';

interface InputWrapperProps {
  label: React.ReactNode;
  id: string;
  children: React.ReactNode;
}

export const InputWrapper = ({ label, id, children }: InputWrapperProps) => {
  return (
    // <div className={`custom-select-container ${isFocused || selectedValue ? 'focused' : ''}`}>
    <div className="custom-select-container focused">
      <label htmlFor={`${id}_label`} className="custom-label">
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
