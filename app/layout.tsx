import './globals.css'
import './theme.scss'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Open_Sans } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import LogoutButton from '@/components/LogoutButton'
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie'
import Section from '@/components/Section'

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
const Navigation = async () => {

  const sessionUser = await getSessionUserFromCookie()
  
  
  return (
    <div className="navbar bg-base-100 text-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/venues">
                Lieux
              </Link>
            </li>
            <li>
              <Link href="/photos">
                Photos
              </Link>
            </li>
            <li>
              <Link href="/list">
                Liste de mariage
              </Link>
            </li>
            {/* <li><a>LISTE DE MARIAGE</a></li>
            <li><a>LOCALISATION</a></li>
            <li><a>Nous ecrire</a></li> */}

          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className='btn btn-ghost normal-case  font-adora'>
          E & E
        </Link>
      </div>
      <div className="navbar-end">
        { sessionUser ?
          !sessionUser.hasResponded ? (<Link href={`/users/${sessionUser.slug}`} className="btn btn-primary btn-sm mx-2">RSVP</Link>) : ""
        :
        (
          <Link href="/login" className="btn btn-primary btn-sm mx-2">
            LOGIN
          </Link>
        )}
        {sessionUser && (
          <>
            {sessionUser.isAdmin ? (
              <Link href="/admin" className="btn btn-accent btn-sm mx-2">
                ADMIN
              </Link>
            ):""}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image
                      src={sessionUser.image || '/placeholder_h.png'}
                      alt="Eric & Elizabeth"
                      width={40}
                      height={40}
                      className="rounded-full" 
                    />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link className="justify-between" href={`/users/${sessionUser.slug}`}>
                    Profil
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <LogoutButton>
                    Déconnexion
                  </LogoutButton>
                </li>
              </ul>
            </div>
          </>

          

        )}
      </div>
    </div>
  )
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
