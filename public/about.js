// pages/about.js
import { NextSeo } from 'next-seo';

export default function AboutPage() {
  return (
    <>
      <NextSeo
        title="About Us"
        description="Learn more about our comprehensive platform and its features."
        canonical="https://www.yourwebsite.com/about"
        openGraph={{
          url: 'https://www.yourwebsite.com/about',
          title: 'About Us',
          description: 'Learn more about our comprehensive platform and its features.',
        }}
      />
      {/* Rest of the page content */}
    </>
  );
}