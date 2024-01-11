import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Have a drone',
  description: 'Precisa de um drone? Contrate um piloto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="Pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
