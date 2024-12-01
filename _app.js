// _app.js
import { DefaultSeo } from 'next-seo';
import SEOConfig from '../next-seo.config';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Default SEO settings */}
      <DefaultSeo {...SEOConfig} />

      {/* JSON-LD Schema for Local Business */}
      <Head>
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "Store",
            "name": "Elampillai Sarees",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Elampillai",  // Replace with your address
              "addressLocality": "Elampillai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "637502",
              "addressCountry": "IN"
            },
            "telephone": "+91-XXXX-XXXXXX",  // Replace with your phone number
            "url": "https://www.elampillai.in",
            "sameAs": [
              "https://www.facebook.com/elampillai",  // Optional: Add your social media links
              "https://www.instagram.com/elampillai"
            ],
            "openingHours": "Mo-Sa 09:00-18:00",  // Replace with your store hours
            "priceRange": "$$",  // Optional: Add price range
            "image": "https://www.elampillai.in/images/logo.jpg",  // Optional: Add image
            "description": "Visit Elampillai Sarees for premium soft silk, pattu, and cotton sarees in Elampillai."
          }
          `}
        </script>
      </Head>

      {/* Render the page content */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
