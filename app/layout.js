import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MURA - Fitness & Wellness',
  description: 'Transform your fitness journey with MURA. Professional trainers, modern equipment, and personalized programs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}