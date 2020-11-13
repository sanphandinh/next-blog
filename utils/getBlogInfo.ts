import blogInfo from '../constants/blogInfo';
import { BlogInfoType } from './../types/blogInfo';
export default function getBlogInfo(): BlogInfoType {
  return blogInfo as BlogInfoType;
}
