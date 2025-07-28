'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: object) => void;
    dataLayer: unknown[];
  }
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  useEffect(() => {
    // Initialize gtag
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [measurementId]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
