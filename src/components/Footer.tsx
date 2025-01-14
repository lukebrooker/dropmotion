import { ThemeSwitcher } from "./ThemeSwitcher"

export function Footer() {
  return (
    <footer className='py-8 border-t border-gray-200 dark:border-white/10'>
      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          © {new Date().getFullYear()} Drop Motion. All rights reserved.
        </p>
        <ThemeSwitcher />
      </div>
    </footer>
  )
}
