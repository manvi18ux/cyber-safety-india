import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cyber Safety India - Stay Safe Online',
  description: 'Comprehensive cyber safety platform for Indian users. Learn about phishing, UPI scams, identity theft, and more. Stay protected online.',
  keywords: 'cyber safety, digital security, fraud prevention, India, phishing, UPI scams, online safety',
  authors: [{ name: 'Cyber Safety India Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
          <div className="container-padded py-6">
            <div className="glass rounded-2xl p-4 md:p-6">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
