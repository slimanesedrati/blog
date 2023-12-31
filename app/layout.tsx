import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: " Slimane's Blog",
  description: 'Generated by create Slimane Sedrati',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-slate-800 ${inter.className}`} >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
