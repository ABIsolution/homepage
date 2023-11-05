import React from 'react';

interface InputProps {
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  name?: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  styles?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  disabled,
  name,
  styles,
}) => {
  return (
    <input
      type={type}
      name={name || 'input'}
      className={`input ${className || ''}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={styles}
    />
  );
};

export default Input;
