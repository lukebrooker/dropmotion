"use client"

import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

export function ProjectThemeProvider() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const previousTheme = useRef<string | null>(null)

  useEffect(() => {
    const isProjectPage = pathname.startsWith("/project/")

    if (isProjectPage) {
      // Store the current theme before switching to dark
      if (theme && theme !== "dark") {
        previousTheme.current = theme
        setTheme("dark")
      }
    } else if (previousTheme.current) {
      // Restore the previous theme when leaving project pages
      setTheme(previousTheme.current)
      previousTheme.current = null
    }
  }, [pathname, theme, setTheme])

  return null
}
