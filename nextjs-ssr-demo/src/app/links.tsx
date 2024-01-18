'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

export function Links() {
  const pathname = usePathname()

  return (
    <nav className="p-16">
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/blog' ? 'active' : ''}`}
            href="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}