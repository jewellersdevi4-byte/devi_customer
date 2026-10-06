import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Devi Jewellers · Customer Portal & Passbook',
  description: 'Track your gold savings schemes, view payment receipts, and make secure instalment payments.',
  icons: {
    icon: '/brand.jpg'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#193c34'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async />
      </head>
      <body>{children}</body>
    </html>
  );
}
