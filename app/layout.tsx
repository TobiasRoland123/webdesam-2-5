import type { Metadata } from 'next';
import './globals.css';
import { UbuntuFont } from './ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Webdesam',
    default: 'Webdesam digital agency',
  },
  description: 'Webdesam din ansvarlige digitale samarbejdspartner',
  /*  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'), */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='da'>
      <body className={UbuntuFont.className}>{children}</body>
    </html>
  );
}
