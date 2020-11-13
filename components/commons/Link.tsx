import Link, { LinkProps } from 'next/link';
import classNames from '../../helpers/classNames';

export default function CustomLink({
  children,
  className,
  ...rest
}: React.PropsWithChildren<LinkProps> & { className?: string }) {
  return (
    <Link {...rest}>
      <a className={classNames('text-textLink', className)}>{children}</a>
    </Link>
  );
}
