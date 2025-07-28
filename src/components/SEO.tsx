'use client';

import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  structuredData,
}) => {
  const fullTitle = title 
    ? `${title} | Soham Das - Full Stack Developer`
    : 'Soham Das - Full Stack Developer Portfolio';

  return (
    <Head>
      {title && <title>{fullTitle}</title>}
      {description && <meta name="description" content={description} />}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default SEO;
