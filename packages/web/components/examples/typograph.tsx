import React from 'react';

interface TypographProps {
  children: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'paragraph';
  className?: string;
  styles?: Record<string, string>;
}

const Typograph: React.FC<TypographProps> = ({
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
      return (
        <h1
          className={`${variant} ${className || ''}`}
          style={styles}
        >
          {children}
        </h1>
      );
    case 'paragraph':
    default:
      return (
        <p className={`${variant} ${className || ''}`} style={styles}>
          {children}
        </p>
      );
  }
};

export default Typograph;
