import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '500',
  variable: '--font-poppins',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'GSAP Text Animtaion',
  description: 'GSAP Text Animtaion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
