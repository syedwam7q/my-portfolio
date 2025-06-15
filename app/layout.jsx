'use client'

import '../styles/globals.css'
import { Rajdhani } from 'next/font/google'
import ThemeProvider from '../components/ThemeContext'
import { metadata } from './metadata'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark-theme">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${rajdhani.className} theme-transition`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}