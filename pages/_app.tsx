import { useEffect } from 'react';
import { THEME_KEY } from '../constants/storageKey';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  //Restore theme storaged in localstorage
  useEffect(() => {
    const theme = localStorage.getItem(THEME_KEY);
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-64 py-8">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
