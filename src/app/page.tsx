import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollProgress from '@/components/ScrollProgress';
import Script from 'next/script';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Soham Das",
  "jobTitle": "Full Stack Developer",
  "description": "Experienced Full Stack Developer specializing in modern web technologies including React, Next.js, Node.js, and TypeScript.",
  "url": "https://sohamdas.dev", // Replace with your actual domain
  "sameAs": [
    "https://github.com/SohamDas2003", // Replace with your actual profiles
    "https://www.linkedin.com/in/soham2003/",
  ],
  "knowsAbout": [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Full Stack Development",
    "Web Development",
    "Software Engineering"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US" // Update with your country
  }
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
        <ScrollProgress />
        <AnimatedBackground />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
