// _app.js
import { DefaultSeo } from 'next-seo';
import SEOConfig from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEOConfig} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;