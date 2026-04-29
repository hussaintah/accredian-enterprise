import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Accredian Enterprise — Upskill Your Workforce at Scale',
  description:
    'Partner with IITs, IIMs, and global universities to build future-ready teams with curated programs, live mentorship, and real-time analytics.',
  openGraph: {
    title: 'Accredian Enterprise',
    description: 'Enterprise learning platform trusted by 500+ organizations.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
