import React from 'react';

// These are the properties of the component
// Properties refer to values and functionalities in the component.
// In order to re-use the same component without having to re-create it, some values and functionalities need to be dynamic and passed to the component as properties
interface ButtonProps {
  text: string;
  name?: string;
  value?: string | number;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  styles?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Button: React.FC<ButtonProps> = ({
  text,
  name,
  value,
  onClick,
  className,
  disabled,
  styles,
  id,
}) => {
  return (
    <button
      name={name}
      id={id}
      className={`btn ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
      style={styles}
      value={value}
    >
      {text}
    </button>
  );
};

export default Button;
