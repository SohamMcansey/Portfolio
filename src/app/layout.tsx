import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Soham Das - Full Stack Developer Portfolio",
    template: "%s | Soham Das - Full Stack Developer"
  },
  description: "Experienced Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and professional experience in React, Next.js, Node.js, and more.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "JavaScript", "TypeScript", "Web Development", "Software Engineer", "Portfolio"],
  authors: [{ name: "Soham Das" }],
  creator: "Soham Das",
  publisher: "Soham Das",
  metadataBase: new URL('https://sohamdas.dev'), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sohamdas.dev", // Replace with your actual domain
    title: "Soham Das - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and professional experience.",
    siteName: "Soham Das Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Soham Das - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Das - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and professional experience.",
    images: ["/og-image.jpg"], // You'll need to add this image
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'} />
        {children}
      </body>
    </html>
  );
}
