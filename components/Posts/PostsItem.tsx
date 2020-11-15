import { PostType } from '../../types/post';
import CustomLink from '../commons/Link';
import PostMeta from '../commons/PostMeta';

type Props = Omit<PostType, 'content'> & { className?: string };

export default function PostsItem({
  data: { description, title, publishedDate },
  filePath,
  readingTime,
  className,
}: Props) {
  return (
    <div className={className}>
      <h3 className="text-4xl font-bold">
        <CustomLink href="/[slug]" as={filePath.replace(/\.mdx?$/, '')}>
          {title}
        </CustomLink>
      </h3>
      <PostMeta publishedDate={publishedDate} readingTime={readingTime} />
      <p>{description}</p>
    </div>
  );
}
