import Link from 'next/link';

interface NextLinkProps {
  href: string;
  title: string;
  id?: string;
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
  className?: string;
}

const NextLink: React.FC<NextLinkProps> = ({
  href,
  title,
  id,
  className,
  style,
}) => {
  return (
    <Link
      href={href}
      id={id}
      className={`link ${className || ''}`}
      style={style}
    >
      {title}
    </Link>
  );
};

export default NextLink;
