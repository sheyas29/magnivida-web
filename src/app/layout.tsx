import { Navbar } from '@/components/layout/Navbar'; // <--- Import Navbar
import Noise from '@/components/Noise';
import SmoothScroll from '@/components/SmoothScroll';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased`}
      >
        <Noise />
        <SmoothScroll>
          <Navbar /> {/* <--- Place Navbar here, outside/above children */}
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
