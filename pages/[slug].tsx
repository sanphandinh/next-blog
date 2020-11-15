import path from 'path';
import fs from 'fs';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import CustomLink from '../components/commons/Link';
import { MetaData } from '../types/post';
import PostMeta from '../components/commons/PostMeta';
import readingTime from '../utils/readingTime';
import { ReadingTime } from '../types/readingTime';
import Header from '../components/Header';
import getBlogInfo from '../utils/getBlogInfo';
import Intro from '../components/Intro';
import CodeBlock from '../components/CodeBlock';
import { NextSeo } from 'next-seo';

const components = {
  a: CustomLink,
  p: ({ children }) => (
    <p className="text-base leading-7 text-justify mb-3">{children}</p>
  ),
  h1: ({ children }) => <h1 className="font-bold text-4xl">{children}</h1>,
  h2: ({ children }) => <h2 className="font-bold text-3xl">{children}</h2>,
  h3: ({ children }) => <h3 className="font-bold text-2xl">{children}</h3>,
  h4: ({ children }) => <h4 className="font-bold text-xl">{children}</h4>,
  h5: ({ children }) => <h5 className="font-bold text-lg">{children}</h5>,
  h6: ({ children }) => <h6 className="font-bold text-base">{children}</h6>,
  hr: () => <hr className="my-3" />,
  blockquote: ({ children }) => {
    return (
      <blockquote className="italic text-2xl border-l-4 -ml-4 pl-3">
        {children}
      </blockquote>
    );
  },
  ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
  ol: ({ children }) => (
    <ol className="list-decimal list-inside">{children}</ol>
  ),
  em: ({ children }) => <span className="italic">{children}</span>,
  strong: ({ children }) => <span className="font-bold">{children}</span>,
  inlineCode: ({ children }) => (
    <code className="bg-bgCodeColor px-1">{children}</code>
  ),
  code: CodeBlock,
  CodeSandBox: ({ src, title }) => (
    <iframe
      src={src}
      title={title}
      className="w-full border-0"
      style={{ height: '500px' }}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  ),
  table: ({ children }) => <table className="table-auto">{children}</table>,
  th: ({ children }) => <th className="px-4 py-2">{children}</th>,
  td: ({ children }) => <td className="border px-4 py-2">{children}</td>,
  tr: ({ children }) => <tr className="even:bg-gray-100">{children}</tr>,
  NextSeo,
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
        <CustomLink href="/">
          <h1 className="text-2xl font-bold">{title}</h1>
        </CustomLink>
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
