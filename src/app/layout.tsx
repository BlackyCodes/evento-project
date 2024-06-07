import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evento _find events around you',
  description: 'Browse more then 10,000 events around you',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-gray-950 text-white overflow-y-scroll`}>
        <Container>
        <Header/>
        {children}
        <Footer/>

        </Container>
       
        </body>
    </html>
  )
}
