import { convertPublishedDate } from '../../helpers/datetime';
import { PublishedDateType } from '../../types/post';
import { ReadingTime } from '../../types/readingTime';

type Props = {
  readingTime: ReadingTime;
  publishedDate: PublishedDateType;
};

export default function PostsItemMeta({ publishedDate, readingTime }: Props) {
  return (
    <div className="text-sm flex items-center">
      <span>{convertPublishedDate(publishedDate)}</span>
      <span className="w-1 h-1 rounded-full bg-gray-800 mx-3" />
      <span>{readingTime.readingTime} phút đọc</span>
    </div>
  );
}
