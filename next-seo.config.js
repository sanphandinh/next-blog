import blogInfo from './constants/blogInfo';

export default {
  titleTemplate: '%s | San Phan Dinh blog',
  openGraph: {
    type: 'website',
    title: 'San Phan Dinh',
    description: 'Blog cá nhân của Phan Dinh San',
    locale: 'vi_VN',
    url: 'https://www.sanphandinh.com/',
    site_name: 'San Phan',
    images: [
      {
        url: blogInfo.avatar_link,
        width: 400,
        height: 400,
        alt: 'San Phan Dinh',
      },
    ],
  },
  twitter: {
    handle: '@sanphandinh',
    site: '@sanphandinh',
    cardType: 'summary_large_image',
    description: blogInfo.description,
    title: blogInfo.title,
    image: blogInfo.avatar_link,
  },
};
