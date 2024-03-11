import Header from '@/components/common/Header'
import './globals.css'
import type { Metadata } from 'next'
import localFont from "next/font/local"
import Footer from '@/components/common/Footer'
import AnalyticsComponent from '@/components/analytics/page';

const helvetica = localFont({
  src: [
    {
      path:'../public/fonts/helvetica-now-var.ttf',
      weight: '400',
      style:'normal'
    },
    {
      path:'../public/fonts/Helvetica-Oblique.ttf',
      weight: '400',
      style: "italic",
    },
    {
      path:'../public/fonts/Helvetica-Light.otf',
      weight: '300',
      style: "light",
    },
    {
      path:'../public/fonts/Helvetica-Thin.ttf',
      weight: '100',
      style: "thin",
    },
    {
      path:'../public/fonts/Helvetica-Bold.ttf',
      weight: '700',
      style: "bold",
    },
    
  ],
  variable: '--font-helvatica'
})

const helvetica_light = localFont({
  src:[{
    path:'../public/fonts/Helvetica-Light.otf',
    weight: '300',
    style: "light",
  }],
  variable: '--font-helvetica_light'
})

const neue = localFont({
  src: [
    {
      path:'../public/fonts/Helvetica-Neue.ttf',
      weight:'400',
      style:'normal'
    },
    {
      path:'../public/fonts/HelveticaNeue_Light.ttf',
      weight:'300',
      style:'light'
    },
    {
      path:'../public/fonts/HelveticaNeue-Thin.ttf',
      weight:'100',
      style:'thin'
    },
    {
      path:'../public/fonts/HelveticaNeue-Obl.ttf',
      weight:'400',
      style:'italic'
    }
  ],
  variable:'--font-neue'
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
      <body className={`${helvetica.className} `}>
        <AnalyticsComponent />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
