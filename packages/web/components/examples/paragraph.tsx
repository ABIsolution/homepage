import React from 'react';

interface ParagraphProps {
  children: string;
  className?: string;
  styles?: Record<string, string>;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  styles,
}) => {
  return (
    <p className={`paragraph ${className || ''}`} style={styles}>
      {children}
    </p>
  );
};

export default Paragraph;
