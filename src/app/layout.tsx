import { Navbar } from '@/components/layout/Navbar';
import Noise from '@/components/Noise';
import SmoothScroll from '@/components/SmoothScroll';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script'; // <--- CHANGE 1: Import this
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Magnivida Securitas | Manpower Supply & Facility Management',
  description:
    'Leading provider of manpower supply, security guarding, and integrated facility management services in Hyderabad and across India.',
  keywords: [
    'Manpower Supply',
    'Facility Management',
    'Security Services',
    'Hyderabad',
    'Staffing Solutions',
    'Magnivida',
  ],
  verification: {
    google: 'UuioaPDwUsQnz0hwADo9ldBURAzxSo9zlA0HG2Mr5zI',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // <--- CHANGE 2: Define your Schema object here
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EmploymentAgency', // or "ProfessionalService"
    name: 'Magnivida Securitas Pvt Ltd',
    image: 'https://magnivida.com/logo.png', // UPDATE THIS LINK
    url: 'https://magnivida.com', // UPDATE THIS LINK
    telephone: '+91-7337069677', // UPDATE THIS NUMBER
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'P101A, Shaktinagar I Main, R K Puram',
      addressLocality: 'Secunderabad',
      addressRegion: 'Telangana',
      postalCode: '500056',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.4828,
      longitude: 78.5267,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '19:00',
    },
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased`}
      >
        {/* <--- CHANGE 3: Add the Script component here inside body */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Noise />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
