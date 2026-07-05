import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Butea Refined · Stem Racing Thailand 2026',
  description: 'Butea Refined — ทีมแรกจากโรงเรียนนวมินทราชินูทิศ เบญจมราชาลัย บนเวที Stem Racing Thailand รุ่น Development ปี 2026',
  openGraph: {
    title: 'Butea Refined · Stem Racing Thailand 2026',
    description: 'ทีมแรกจากโรงเรียนนวมินทราชินูทิศ เบญจมราชาลัย บนเวที Stem Racing Thailand รุ่น Development ปี 2026',
    images: ['/BR.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/BR.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
