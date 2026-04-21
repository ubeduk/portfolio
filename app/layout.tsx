import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Ubed Kazi | Flutter Developer Portfolio',
  description: 'Flutter developer with 2+ years experience building scalable mobile apps. Specializing in high-performance Flutter applications, SaaS tools, and real-time systems.',
  keywords: ['Ubed Kazi', 'Flutter Developer', 'Software Developer', 'Mobile Developer', 'Bhavnagar', 'Dart', 'Next.js'],
  authors: [{ name: 'Ubed Kazi' }],
  creator: 'Ubed Kazi',
  openGraph: {
    title: 'Ubed Kazi | Flutter Developer Portfolio',
    description: 'Flutter developer with 2+ years experience building scalable mobile apps.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Ubed Kazi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ubed Kazi | Flutter Developer Portfolio',
    description: 'Flutter developer with 2+ years experience building scalable mobile apps.',
    creator: '@ubedkazi',
  },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ubed Kazi',
  jobTitle: 'Flutter Developer',
  email: 'mailto:Ubedkazii5151@gmail.com',
  telephone: '+91 7041038720',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bhavnagar',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Swami Sahajanand College of Commerce & Management',
  },
  knowsAbout: ['Flutter', 'Dart', 'Next.js', 'React', 'Firebase', 'REST API', 'Mobile App Development'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-black text-[#F5F5F5] antialiased selection:bg-white selection:text-black`}>
        {children}
      </body>
    </html>
  )
}
