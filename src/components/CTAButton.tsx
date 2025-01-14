import Link from "next/link"
import { ComponentProps } from "react"
import { buttonClasses } from "./Button"

type CTAButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
} & Omit<ComponentProps<typeof Link>, "className" | "children" | "href">

export function CTAButton({
  href,
  children,
  className = "",
  ...props
}: CTAButtonProps) {
  return (
    <Link href={href} className={`${buttonClasses} ${className}`} {...props}>
      <div className='relative flex items-center justify-between w-full'>
        <span className='transition-transform duration-300 group-hover:translate-x-2'>
          {children}
        </span>
        <span className='text-xl opacity-60 group-hover:opacity-100 transition-opacity'>
          →
        </span>
      </div>
    </Link>
  )
}
