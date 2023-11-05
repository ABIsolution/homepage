import React from 'react';

interface InputProps {
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  name?: string;
  id?: string;
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
  id,
  name,
  styles,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
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
