import React from 'react';

interface HeaderProps {
  children: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  styles?: Record<string, string>;
}

const Header: React.FC<HeaderProps> = ({
  children,
  variant = 'h1',
  className,
  styles,
}) => {
  switch (variant) {
    case 'h2':
      return (
        <h2
          className={`${variant} ${className || ''}`}
          style={styles}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={`${variant} ${className || ''}`}
          style={styles}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={`${variant} ${className || ''}`}
          style={styles}
        >
          {children}
        </h4>
      );
    case 'h1':
    default:
      return (
        <h1
          className={`${variant} ${className || ''}`}
          style={styles}
        >
          {children}
        </h1>
      );
  }
};

export default Header;
