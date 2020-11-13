import { PostType } from '../../types/post';
import PostsItem from './PostsItem';

export default function Posts({
  posts,
  className,
}: {
  posts: Array<PostType>;
  className?: string;
}) {
  return (
    <div className={className}>
      {posts.map((item) => (
        <PostsItem className="mb-8 last:mb-0" key={item.filePath} {...item} />
      ))}
    </div>
  );
}
