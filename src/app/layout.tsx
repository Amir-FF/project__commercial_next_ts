import type { Metadata } from 'next';
import { Kodchasan } from 'next/font/google';
import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import './globals.scss';

const kodchasan = Kodchasan({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-kodchasan',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'Commercial', template: '%s - Commercial' },
  description:
    'Construction development group: road building, building construction and residential complexes.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={kodchasan.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
