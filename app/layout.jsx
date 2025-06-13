import '../styles/globals.css'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
})

export const metadata = {
  title: 'SYED WAMIQ - Developer Portfolio',
  description: 'A futuristic cyberpunk-themed portfolio showcasing creative development work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={rajdhani.className}>
        {children}
      </body>
    </html>
  )
}