import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guia da Cidade Jóia',
  description: 'Encontre todos os estabelecimento de Pérola - PR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50`}>
        <main className="container mx-auto min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}