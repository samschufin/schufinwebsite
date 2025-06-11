import './globals.css';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
});

export const metadata = {
  title: 'SchuFin - Financial Solutions',
  description: 'Equipping Your Business with Financial Clarity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
