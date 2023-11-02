import React from 'react';

// These are the properties of the component
// Properties refer to values and functionalities in the component.
// In order to re-use the same component without having to re-create it, some values and functionalities need to be dynamic and passed to the component as properties
interface ButtonProps {
  text: string;
  name?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  styles?: Record<string, string>;
}

const Button: React.FC<ButtonProps> = ({
  text,
  name,
  onClick,
  className,
  disabled,
  styles,
}) => {
  return (
    <button
      name={name || 'button'}
      className={`btn ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
      style={styles}
    >
      {text}
    </button>
  );
};

export default Button;
