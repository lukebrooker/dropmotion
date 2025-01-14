import { ComponentProps } from "react"

type ButtonBaseProps = {
  children: React.ReactNode
  className?: string
}

type ButtonProps = ButtonBaseProps &
  (
    | ({ as: "button" } & ComponentProps<"button">)
    | ({ as: "submit" } & ComponentProps<"button">)
  )

export const buttonClasses =
  "group inline-flex items-center justify-between w-full max-w-lg px-8 py-4 text-left text-lg font-light bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"

export function Button({
  children,
  className = "",
  as,
  ...props
}: ButtonProps) {
  return (
    <button
      type={as === "submit" ? "submit" : "button"}
      className={`${buttonClasses} ${className}`}
      {...props}
    >
      <div className='relative flex items-center justify-between w-full'>
        <span className='transition-transform duration-300 group-hover:translate-x-2 group-disabled:translate-x-0'>
          {children}
        </span>
        <span className='text-xl opacity-60 group-hover:opacity-100 group-disabled:opacity-60 transition-opacity'>
          →
        </span>
      </div>
    </button>
  )
}
