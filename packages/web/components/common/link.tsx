import Link from 'next/link';

interface NextLinkProps {
  href: string;
  title: string;
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
  className?: string;
}

const NextLink: React.FC<NextLinkProps> = ({
  href,
  title,
  className,
  style,
}) => {
  return (
    <Link
      href={href}
      id="link"
      className={`link ${className || ''}`}
      style={style}
    >
      {title}
    </Link>
  );
};

export default NextLink;
