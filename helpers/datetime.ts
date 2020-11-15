import { PublishedDateType } from '../types/post';

export function convertPublishedDate(publishedDate: PublishedDateType) {
  const date = new Date(publishedDate);
  return date.toLocaleDateString('vi-VN');
}
