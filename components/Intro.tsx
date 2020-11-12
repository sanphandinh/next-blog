import Image from 'next/image';
import classNames from '../helpers/classNames';

export default function Intro({ className }: { className?: string }) {
  return (
    <div className={classNames('flex items-center', className)}>
      <div className="w-16 h-16 relative float-left">
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
          Personal blog by <a>San Phan</a>
        </p>
        <p>I explain with words and code.</p>
      </div>
    </div>
  );
}
