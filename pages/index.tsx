import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '../components/Header';
import Intro from '../components/Intro';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import readingTime from '../utils/readingTime';
import { PostType } from '../types/post';
import Posts from '../components/Posts';

export default function Home({ posts }: { posts: Array<PostType> }) {
  return (
    <>
      <Header>
        <h1 className="text-4xl font-bold">Hello world</h1>
      </Header>
      <Intro className="mt-6" />
      <Posts className="mt-16" posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);
      return {
        content,
        data,
        filePath,
        readingTime: readingTime(content),
      };
    })
    .sort((item1: PostType, item2: PostType) => {
      return item2?.data?.publishedDate - item1?.data?.publishedDate;
    });

  return { props: { posts } };
}
