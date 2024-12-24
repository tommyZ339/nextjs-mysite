import { Inter, Lusitana, Playwrite_AU_VIC, Geist, Geist_Mono } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'] });

export const playwrite = Playwrite_AU_VIC(
    { weight: ['400'] }
);

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });