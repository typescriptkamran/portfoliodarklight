import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';
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
      <Head>
        <title>Muhammad Kamran - Next.js Developer</title>
        <meta name="description" content="I'm Muhammad Kamran, a Next.js developer with expertise in custom chatbots for e-commerce and professional websites." />
        <meta name="keywords" content="Next.js developer, chatbot engineer, e-commerce, professional websites" />
        <meta name="author" content="Muhammad Kamran" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      
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
