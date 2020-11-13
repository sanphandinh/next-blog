import { ReadingTime } from './readingTime';

export type PublishedDateType = number;

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
