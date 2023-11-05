import React from 'react';

interface TypographyProps {
  children: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'paragraph';
  id?: string;
  className?: string;
  styles?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'h1',
  id,
  className,
  styles,
}) => {
  switch (variant) {
    case 'h2':
      return (
        <h2
          id={id}
          className={`${variant} ${className || ''}`}
          style={styles}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          id={id}
          className={`${variant} ${className || ''}`}
          style={styles}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          id={id}
          className={`${variant} ${className || ''}`}
          style={styles}
        >
          {children}
        </h4>
      );
    case 'h1':
      return (
        <h1
          id={id}
          className={`${variant} ${className || ''}`}
          style={styles}
        >
          {children}
        </h1>
      );
    case 'paragraph':
    default:
      return (
        <p
          className={`${variant} ${className || ''}`}
          style={styles}
          id={id}
        >
          {children}
        </p>
      );
  }
};

export default Typography;
