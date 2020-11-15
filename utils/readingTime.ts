import { ReadingTime } from '../types/readingTime';

export default function readingTime(post: string): ReadingTime {
  const WORDS_PER_MINUTE = 200;
  let result: ReadingTime = { wordCount: 0, readingTime: 0 };
  const regex = /\w+/g;
  result.wordCount = (post || '').match(regex).length;
  result.readingTime = Math.ceil(result.wordCount / WORDS_PER_MINUTE);
  return result;
}
