import Header from '@/components/common/Header'
import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Footer from '@/components/common/Footer'

const helvetica = localFont({
  src: [
    {
      path:'../public/fonts/Helvetica.ttf',
      weight: '400',
      style:'normal'
    },
    {
      path:'../public/fonts/Helvetica-Oblique.ttf',
      weight: '400',
      style: "normal",
    },
    {
      path:'../public/fonts/Helvetica-Bold.ttf',
      weight: '700',
      style: "normal",
    },
    
  ],
  variable: '--font-helvatica'
})

const helvetica_light = localFont({
  src:[
    {
      path:'../public/fonts/Helvetica-lightt.ttf',
      weight: '100',
      style: "normal",
    },
  ],
  variable: '--font-helvatica_light'
})

const neue = localFont({
  src: [
    {
      path:'../public/fonts/Helvetica-Neue.ttf',
      weight:'400',
      style:'normal'
    },
    {
      path:'../public/fonts/HelveticaNeue-Obl.ttf',
      weight:'400',
      style:'normal'
    }
  ],
  variable:'--font-neue'
})
const neue_obl = localFont({
  src: [
    {
      path:'../public/fonts/HelveticaNeue-Obl.ttf',
      weight:'200',
      style:'normal'
    }
  ],
  variable:'--font-neue_obl'
})

export const metadata: Metadata = {
  title: 'Agency on notion',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${helvetica.variable}  font-sans`}>
      <body className={`${helvetica.className} bg-white`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
