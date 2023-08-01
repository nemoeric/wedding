import './globals.css'
import './theme.scss'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Open_Sans } from 'next/font/google'
import Link from 'next/link'

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

const Navigation = () => {

  return (
      <ul className="menu menu-horizontal menu-lg bg-accent rounded-box mt-6 fixed bottom-4 left-1/2 z-20 -translate-x-1/2">
        <li>
          <a className="tooltip" data-tip="Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </a>
        </li>
        <li>
          <a className="tooltip" data-tip="Details">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </a>
        </li>
        <li>
          <a className="tooltip" data-tip="Stats">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </a>
        </li>
      </ul>
  )
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
      bg-white
      `}>

        <div>
          <Link href="/users/new">
            <span className="btn btn-ghost btn-sm rounded-btn fixed top-4 right-4 z-20">RSVP</span>
          </Link>
        </div>


        {children}

        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <div className='pb-8  '>
            <p>Copyright © 2023 - From scratch by Nemo</p>
            <p>Yes, just for the wedding</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
