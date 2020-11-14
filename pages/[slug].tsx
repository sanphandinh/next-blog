import path from 'path';
import fs from 'fs';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import CustomLink from '../components/commons/Link';
import Head from 'next/head';
import { MetaData } from '../types/post';
import PostMeta from '../components/commons/PostMeta';
import readingTime from '../utils/readingTime';
import { ReadingTime } from '../types/readingTime';
import Header from '../components/Header';
import getBlogInfo from '../utils/getBlogInfo';
import Intro from '../components/Intro';
import CodeBlock from '../components/CodeBlock';

const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
  code: CodeBlock,
};

const { title } = getBlogInfo();

export default function PostPage({
  source,
  frontMatter,
  readTime,
}: {
  source: any;
  frontMatter: MetaData;
  readTime: ReadingTime;
}) {
  const content = hydrate(source, { components });
  return (
    <>
      <Header>
        <h1 className="text-2xl font-bold">{title}</h1>
      </Header>
      <h3 className="text-4xl font-bold mt-16">{frontMatter.title}</h3>
      <PostMeta
        publishedDate={frontMatter.publishedDate}
        readingTime={readTime}
      />
      <main className="mt-8">{content}</main>
      <h1 className="text-2xl font-bold mt-10">{title}</h1>
      <Intro className="mt-6" />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      readTime: readingTime(content),
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
