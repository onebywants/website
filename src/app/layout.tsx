import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'OneByWants',
    template: '%s | OneByWants',
  },
  description: 'OneByWants 공식 웹사이트',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={plusJakartaSans.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
