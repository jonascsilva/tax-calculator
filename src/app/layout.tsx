import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import '@/styles/colors.scss'
import '@/styles/globals.scss'

import Header from './_header'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tax Calculator',
  description: 'Site for tax calculation purposes'
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.className} suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
