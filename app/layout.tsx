import './globals.css'
import './theme.scss'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Open_Sans } from 'next/font/google'
import Navigation from './Navigation'


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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="cupcake">
      <body className={`
      pt-16
      bg-white
      ${silk_medium.variable} 
      ${ropa_bold.variable} 
      ${openSans.className} 
      ${cambria_italic.variable} 
      ${calibri_medium.variable}
      ${adora.variable}
      `}>
        <div className='fixed top-0 left-0 w-full z-20' >
          <Navigation />
        </div>
        <div className="bg-white text-primary">
          {children}
        </div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <div className='py-6'>
            <p>Coded with ❤️ by Nemo</p>
            <p className='italic'>Yes, just for the wedding</p>
          </div>
        </footer>

      </body>
    </html>
  )
}
