import { ReadingTime } from './readingTime';

export type PublishedDateType = string;

export type MetaData = {
  title: string;
  description: string;
  publishedDate: PublishedDateType;
};

export type PostType = {
  content: string;
  data: MetaData;
  filePath: string;
  readingTime: ReadingTime;
};
