import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', 
})


export const metadata: Metadata = {
  title: 'Mimetic Nigeria Limited',
  description: 'Streamline operations, boost revenue, and delight your customers with our comprehensive contracting and merchandise solutions across Nigeria',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en"  className={`${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
