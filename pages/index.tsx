import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '../components/Header';
import Intro from '../components/Intro';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import readingTime from '../utils/readingTime';
import { PostType } from '../types/post';
import Posts from '../components/Posts';
import getBlogInfo from '../utils/getBlogInfo';
import CustomLink from '../components/commons/Link';
import Socials from '../components/Socials';
import { NextSeo } from 'next-seo';

const blogInfo = getBlogInfo();

export default function Home({ posts }: { posts: Array<PostType> }) {
  return (
    <>
      <NextSeo title={blogInfo.title} description={blogInfo.description} />
      <Header>
        <CustomLink href="/">
          <h1 className="text-4xl font-bold text-textColor">
            {blogInfo.title}
          </h1>
        </CustomLink>
      </Header>
      <Intro className="mt-6" />
      <Posts className="mt-16" posts={posts} />
      <Socials className="mt-16" />
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
      return item2?.data?.publishedDate.localeCompare(
        item1?.data?.publishedDate
      );
    });

  return { props: { posts } };
}
