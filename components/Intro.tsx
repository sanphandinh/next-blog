import Image from 'next/image';
import classNames from '../helpers/classNames';
import getBlogInfo from '../utils/getBlogInfo';
import CustomLink from './commons/Link';

const { author, avatar_link, description, title, social } = getBlogInfo();

export default function Intro({ className }: { className?: string }) {
  return (
    <div className={classNames('flex items-center', className)}>
      <div className="w-12 h-12 relative float-left">
        <Image
          className="rounded-full "
          priority
          src={avatar_link}
          alt={`${author} - ${title}`}
          layout="fill"
          quality={50}
        />
      </div>
      <div className="ml-4">
        <p>
          Personal blog by{' '}
          <CustomLink href={social.facebook}>{author}</CustomLink>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
