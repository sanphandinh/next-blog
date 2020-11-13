import Image from 'next/image';
import classNames from '../helpers/classNames';
import CustomLink from './commons/Link';

export default function Intro({ className }: { className?: string }) {
  return (
    <div className={classNames('flex items-center', className)}>
      <div className="w-12 h-12 relative float-left">
        <Image
          className="rounded-full "
          priority
          src="/assets/images/san.phan.jpg"
          alt="Phan Dinh San"
          layout="fill"
          quality={50}
        />
      </div>
      <div className="ml-4">
        <p>
          Personal blog by{' '}
          <CustomLink href="www.facebook.com/sanphandinh">San Phan</CustomLink>
        </p>
        <p>I share with words and code.</p>
      </div>
    </div>
  );
}
