import classNames from '../helpers/classNames';
import getBlogInfo from '../utils/getBlogInfo';
import CustomLink from './commons/Link';

const { social } = getBlogInfo();

export default function Socials({ className }: { className?: string }) {
  return (
    <div className={classNames('flex', className)}>
      {Object.keys(social).map((key: string, index: number) => {
        return (
          <div key={key} className="mr-2 last:mr-0 flex items-center">
            <CustomLink
              className="capitalize hover:underline"
              href={social[key]}>
              {key}
            </CustomLink>
            {index + 1 < Object.keys(social).length && (
              <div className="w-1 h-1 bg-textColor ml-2 rounded-full" />
            )}
          </div>
        );
      })}
    </div>
  );
}
