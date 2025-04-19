'use client'

import '../globals.css'
import { useState, ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'art', href: '/art' },
  { label: 'games', href: '/games' },
  // { label: 'story', href: '/story' },
  { label: 'sketchbook', href: '/sketchbook' },
  { label: 'resume', href: '/resume' },
]

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="sm:flex h-screen">
        {/* sidebar for large screens */}
        <nav className="hidden sm:flex w-52 p-4 flex-col justify-center">
        <div className={"mb-8 text-lg font-bold" + pathname === '/about' ? 'hover:text-amber-200' : ''}>
            <Link href="/about">CATZHENG</Link>
        </div>
        <ul className="space-y-2 my-auto">
            {navItems.map((item) => (
            <li
                key={item.href}
                className={
                pathname === item.href ? 'font-bold text-amber-600' : 'hover:text-amber-200'
                }
            >
                <Link href={item.href}>{item.label}</Link>
            </li>
            ))}
        </ul>
        </nav>

        {/* Collapsible mobile menu */}
        <div className="sm:hidden relative top-0 w-full h-10">
            <div className="p-4 flex justify-between items-center">
              <Link href="/" className="text-lg font-bold">CATZHENG</Link>
                {isVisible && (
            <ul>
                {navItems.map((item) => (
                <li
                    key={item.href}
                    className={
                    pathname === item.href ? 'font-bold text-blue-300' : 'hover:text-blue-400'
                    }
                >
                    <Link href={item.href} onClick={() => setIsVisible(false)}>
                    {item.label}
                    </Link>
                </li>
                ))}
            </ul>
            )}
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="text-white focus:outline-none"
              >
                ☰
              </button>
            </div>
          </div>

        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  )
}