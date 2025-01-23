"use client"

import { Logo } from "@/components/Logo"
import { startViewTransition } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()

  const handleNavigate = (href: string) => {
    startViewTransition(() => {
      router.push(href)
    })
  }

  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-black/5 backdrop-blur-sm'
      role='navigation'
      aria-label='Main navigation'
    >
      <div className='max-w-7xl mx-auto px-6 py-6 flex justify-between items-center'>
        <Link
          href='/'
          onClick={(e) => {
            e.preventDefault()
            handleNavigate("/")
          }}
          className='hover:opacity-80 transition-opacity'
          aria-label='Drop Motion - Home'
        >
          <Logo className='w-8 h-8' />
        </Link>
        <div className='flex gap-3 md:gap-12'>
          <Link
            href='/'
            onClick={(e) => {
              e.preventDefault()
              handleNavigate("/")
            }}
            className='text-sm tracking-wide hover:opacity-80 transition-opacity relative group'
          >
            Projects
            <span
              className='absolute -bottom-1 left-0 h-px bg-current transition-all group-hover:w-full w-0 data-[current="true"]:w-full'
              data-current={pathname === "/" ? "true" : undefined}
            />
          </Link>
          <Link
            href='/about'
            onClick={(e) => {
              e.preventDefault()
              handleNavigate("/about")
            }}
            className='text-sm tracking-wide hover:opacity-80 transition-opacity relative group'
          >
            About
            <span
              className='absolute -bottom-1 left-0 h-px bg-current transition-all group-hover:w-full w-0 data-[current="true"]:w-full'
              data-current={pathname === "/about" ? "true" : undefined}
            />
          </Link>
          <Link
            href='/contact'
            onClick={(e) => {
              e.preventDefault()
              handleNavigate("/contact")
            }}
            className='text-sm tracking-wide hover:opacity-80 transition-opacity relative group'
          >
            Contact
            <span
              className='absolute -bottom-1 left-0 h-px bg-current transition-all group-hover:w-full w-0 data-[current="true"]:w-full'
              data-current={pathname === "/contact" ? "true" : undefined}
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}
