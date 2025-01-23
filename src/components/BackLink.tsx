"use client"

import { startViewTransition } from "@/lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"

type BackLinkProps = {
  href: string
  children: React.ReactNode
}

export function BackLink({ href, children }: BackLinkProps) {
  const router = useRouter()

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault()
    startViewTransition(() => {
      router.push(href)
    })
  }

  return (
    <Link
      href={href}
      onClick={handleNavigate}
      className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors inline-flex items-center group'
    >
      <span className='mr-2 opacity-60 group-hover:opacity-100 transition-opacity rotate-180'>
        →
      </span>
      <span className='transition-transform duration-300 group-hover:-translate-x-2'>
        {children}
      </span>
    </Link>
  )
}
