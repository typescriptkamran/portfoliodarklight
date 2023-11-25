import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Kamran - Next.js Developer',
  description: "I'm Muhammad Kamran, a Next.js developer with expertise in custom chatbots for e-commerce and professional websites.",
  keywords: 'Next.js developer, chatbot engineer, e-commerce, professional websites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      
      <body className={inter.className}>
      <header>
      <NavBar />
      </header>
        {children}
      <footer></footer>
      </body>
    </html>
  )
}
