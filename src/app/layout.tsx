import './globals.css'
import type { Metadata } from 'next'
import { Karla } from 'next/font/google'

const inter = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Mentor | Single Price Grid Component',
  description: 'MrJay&apos;s Solution to Single Price Grid Component',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
