'use client'

import '../globals.css'
import { useState, ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'art', href: '/art' },
  { label: 'story', href: '/story' },
  { label: 'games', href: '/games' },
  { label: 'about', href: '/about' }
]

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sm:flex h-screen">
        {/* sidebar for large screens */}
        <nav className="hidden sm:flex w-52 p-4 flex-col justify-center">
        <div className={"mb-8 text-lg font-bold" + pathname === '/' ? 'text-blue-300' : ''}>
            <Link href="/">CATZHENG</Link>
        </div>
        <ul className="space-y-2 my-auto">
            {navItems.map((item) => (
            <li
                key={item.href}
                className={
                pathname === item.href ? 'font-bold text-blue-300' : 'hover:text-blue-400'
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
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                ☰
              </button>
            </div>
            {isOpen && (
              <ul className="p-4 space-y-4 border-t border-gray-700 animate-slideDown">
                {navItems.map((item) => (
                  <li
                    key={item.href}
                    className={
                      pathname === item.href ? 'font-bold text-blue-300' : 'hover:text-blue-400'
                    }
                  >
                    <Link href={item.href} onClick={() => setIsOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  )
}