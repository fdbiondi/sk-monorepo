import './globals.css';
import { GeistSans } from 'geist/font/sans';
import React from 'react';

import { Toaster } from '@/components/ui/sonner';
import { LayoutProps } from '@/typings';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Skillstery',
  description: 'Skillstery Admin App',
};

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground h-screen">
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
};

export default Layout;
