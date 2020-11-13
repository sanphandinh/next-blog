import { PublishedDateType } from '../types/post';

export function convertPublishedDate(publishedDate: PublishedDateType) {
  const str = publishedDate.toString();
  const date = new Date(
    Number(str.slice(0, 4)),
    Number(str.slice(4, 6)),
    Number(str.slice(6))
  );
  return date.toLocaleDateString('vi-VN');
}
