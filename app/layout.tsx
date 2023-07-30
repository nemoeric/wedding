import './globals.css'
import './theme.scss'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Open_Sans } from 'next/font/google'

// SANS FONT
const openSans = Open_Sans({
  subsets: [
    'latin'
  ],
  display: 'swap',
  variable: '--font-openSans',

})
const calibri_bold = localFont({
  variable:     '--font-calibri-bold',
  src:          './fonts/calibri/calibri-bold.woff2',
  display:      'swap',
})
const calibri_medium = localFont({
  variable:     '--font-calibri-medium',
  src:          './fonts/calibri/calibri-medium.ttf',
  display:      'swap',
})
const cambria_italic = localFont({
  variable:     '--font-cambria-italic',
  src:          './fonts/cambria/italic.ttf',
  display:      'swap',
})

// SERIF FONT
const silk_medium = localFont({
  variable:     '--font-silk-medium',
  src:          './fonts/silk/silk-medium.otf',
  display:      'swap',
})
const adora = localFont({
  variable:     '--font-adora',
  src:          './fonts/adora/adorabouton.otf',
  display:      'swap',
})



const ropa_bold = localFont({
  variable:     '--font-ropa-bold',
  src:          './fonts/ropa/ropa-bold.woff',
  display:      'swap',
})


 


export const metadata: Metadata = {
  title: 'Mariage à Sintra',
  description: 'Eric & Elizabeth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={`
      ${silk_medium.variable} 
      ${ropa_bold.variable} 
      ${openSans.className} 
      ${cambria_italic.variable} 
      ${calibri_medium.variable}
      ${adora.variable}
      `}>
        {children}
      </body>
    </html>
  )
}
