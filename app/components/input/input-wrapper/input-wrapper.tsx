import './input-wrapper.css';

interface InputWrapperProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

export const InputWrapper = ({ label, children }: InputWrapperProps) => {
  return (
    // <div className={`custom-select-container ${isFocused || selectedValue ? 'focused' : ''}`}>
    <div className="custom-select-container focused">
      <label className="custom-label">{label}</label>
      {children}
    </div>
  );
};

export default InputWrapper;
