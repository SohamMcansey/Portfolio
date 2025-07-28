# 🚀 Soham Das - Portfolio Website

A modern, SEO-optimized portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and comprehensive SEO implementation.

## ✨ Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, structured data
- **Performance**: Optimized for Core Web Vitals and lighthouse scores
- **Responsive Design**: Mobile-first approach with smooth animations
- **Contact Form**: Functional contact form with email integration
- **Analytics Ready**: Google Analytics integration
- **PWA Support**: Progressive Web App capabilities

## 🔧 SEO Features

### ✅ Implemented SEO Features
- **Meta Tags**: Comprehensive meta tags for better search engine visibility
- **Open Graph**: Facebook and social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing with large image cards
- **Structured Data**: JSON-LD schema markup for better search understanding
- **Sitemap**: Automatically generated XML sitemap
- **Robots.txt**: Search engine crawler guidance
- **Canonical URLs**: Prevent duplicate content issues
- **PWA Manifest**: Progressive web app configuration
- **Performance**: Optimized images, fonts, and code splitting

### 🎯 SEO Setup Instructions

1. **Update Domain URLs**: Replace all instances of `https://sohamdas.dev` with your actual domain
2. **Set up Google Analytics**: Replace `G-XXXXXXXXXX` with your Google Analytics Measurement ID
3. **Configure Search Console**: Add your Google Search Console verification code
4. **Social Media Links**: Update social media URLs in the structured data and components
5. **Add OG Images**: Create and add Open Graph images (`og-image.jpg`, favicon files)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SohamDas2003/Portfolio.git
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
# Add other environment variables as needed
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Homepage with structured data
│   ├── sitemap.ts           # Automatic sitemap generation
│   ├── robots.ts            # Robots.txt configuration
│   └── api/
│       └── contact/
│           └── route.ts     # Contact form API endpoint
├── components/
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact form
│   ├── Experience.tsx       # Experience timeline
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Projects.tsx         # Projects showcase
│   ├── Skills.tsx           # Skills section
│   ├── Footer.tsx           # Footer
│   ├── GoogleAnalytics.tsx  # GA4 integration
│   └── SEO.tsx              # SEO helper component
public/
├── favicon.ico              # Favicon
├── og-image.jpg            # Open Graph image (add this)
├── site.webmanifest        # PWA manifest
└── robots.txt              # Generated automatically
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/app/layout.tsx` - Meta tags and structured data
- `src/app/page.tsx` - Structured data
- `src/components/Hero.tsx` - Personal details and social links
- `src/components/About.tsx` - About information
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Project details
- `src/components/Contact.tsx` - Contact information

### SEO Configuration
1. **Update all domain references** from `https://sohamdas.dev` to your domain
2. **Add Google Analytics ID** in environment variables
3. **Configure social media links** in structured data
4. **Add verification codes** for search engines

## 📊 SEO Checklist

- [ ] Update all domain URLs to your actual domain
- [ ] Add Google Analytics Measurement ID
- [ ] Set up Google Search Console verification
- [ ] Add Open Graph images (1200x630px recommended)
- [ ] Update social media links
- [ ] Customize meta descriptions for each section
- [ ] Test with Google's Rich Results Test
- [ ] Submit sitemap to search engines
- [ ] Monitor Core Web Vitals

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Other Platforms
This is a standard Next.js app and can be deployed to any platform supporting Node.js.

## 📈 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: sohamdas704@gmail.com
- **LinkedIn**: [linkedin.com/in/soham2003](https://linkedin.com/in/soham2003)
- **GitHub**: [github.com/SohamDas2003](https://github.com/SohamDas2003)

---

⭐ Star this repository if you found it helpful!
