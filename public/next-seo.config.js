export default {
    defaultTitle: 'Your Website Name',
    description: 'Your website description',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://www.yourwebsite.com',
      siteName: 'Your Site Name',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Your OG Image Alt Text'
        }
      ]
    },
    twitter: {
      handle: '@yourhandle',
      site: '@yoursite',
      cardType: 'summary_large_image'
    }
  }