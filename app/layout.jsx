import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import Footer from '@/components/Footer';

const jb = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
  display: 'swap',
});


// SEO Optimization
export const metadata = {
  title: 'capellax.',
  description: 'Welcome to my personal website.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${jb.variable} bg-gray-200`}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
