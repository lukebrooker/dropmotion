"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem={true}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
