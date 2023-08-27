"use client"
import Link from "next/link"
// if link is active, item is selected
import { usePathname } from 'next/navigation'

const Menu = ({
  slug,
  showRoom
}:{
  slug: string
  showRoom: boolean
}) => {

  const pathname = usePathname()

  console.log("pathname", pathname);

  const links = [
    { href: `/users/${slug}/thursday`, label: 'Jeudi', isActive : false },
    { href: `/users/${slug}/friday`, label: 'Vendredi' , isActive : false},
    { href: `/users/${slug}/saturday`, label: 'Samedi' , isActive : false},
  ]
  if (showRoom) {
    links.unshift({ href: `/users/${slug}/hosting`, label: 'Hébèrgement' , isActive : false})
  }
  return (
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box my-2 md:my-4">
      {links.map(({ href, label, isActive }) => (
        <li key={`${href}${label}`}>
          <Link href={href} className={`${pathname == href ? 'active' : ''}`}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu