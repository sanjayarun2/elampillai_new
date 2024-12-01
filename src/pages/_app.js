// _app.js
import { DefaultSeo } from 'next-seo';
import SEOConfig from '../next-seo.config';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Default SEO settings */}
      <DefaultSeo {...SEOConfig} />

      {/* JSON-LD Schema for Local Business */}
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "http://schema.org",
            "@type": "Store",
            "name": "Elampillai Sarees",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Elampillai",
              "addressLocality": "Elampillai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "637502",
              "addressCountry": "IN"
            },
            "telephone": "+91-XXXX-XXXXXX",
            "url": "https://www.elampillai.in",
            "sameAs": [
              "https://www.facebook.com/elampillai",
              "https://www.instagram.com/elampillai"
            ],
            "openingHours": "Mo-Sa 09:00-18:00",
            "priceRange": "$$",
            "image": "https://www.elampillai.in/images/logo.jpg",
            "description": "Visit Elampillai Sarees for premium soft silk, pattu, and cotton sarees in Elampillai."
          }
          `,
        }}
      />

      {/* Render the page content */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
