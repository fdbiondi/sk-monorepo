import { GeistSans } from 'geist/font/sans';

import './globals.css';
import { Toaster } from '@/components/ui/sonner';

import Header from './components/header';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Skillstery',
  description: 'Skillstery Admin App',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <Header />
        <main className="h-[calc(100vh-4rem)]">{children}</main>
        <Toaster richColors />
      </body>
    </html>
  );
}
