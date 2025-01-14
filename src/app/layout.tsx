import { Favicon } from "@/components/Favicon"
import { Footer } from "@/components/Footer"
import { Logo } from "@/components/Logo"
import { ThemeProvider } from "@/components/ThemeProvider"
import type { Metadata } from "next"
import { Albert_Sans } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  // Include light weight for our font-light usage
  weight: ["300", "400"],
})

export const metadata: Metadata = {
  title: "Drop Motion | Creative video agency",
  description:
    "We transform your business vision into compelling visual stories that drive real results. Brisbane & Gold Coast's trusted video production agency.",
  metadataBase: new URL("https://dropmotion.au"),
  openGraph: {
    title: "Drop Motion | Creative video agency",
    description:
      "We transform your business vision into compelling visual stories that drive real results. Brisbane & Gold Coast's trusted video production agency.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drop Motion | Creative video agency",
    description:
      "We transform your business vision into compelling visual stories that drive real results. Brisbane & Gold Coast's trusted video production agency.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dropmotion.au",
  },
}

function Navigation() {
  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-black/5 backdrop-blur-sm'
      role='navigation'
      aria-label='Main navigation'
    >
      <div className='max-w-7xl mx-auto px-6 py-6 flex justify-between items-center'>
        <Link
          href='/'
          className='hover:opacity-80 transition-opacity'
          aria-label='Drop Motion - Home'
        >
          <Logo className='w-8 h-8' />
        </Link>
        <div className='flex gap-3 md:gap-12'>
          <Link
            href='/'
            className='text-sm tracking-wide hover:opacity-80 transition-opacity relative group'
            aria-current={
              typeof window !== "undefined" && window.location.pathname === "/"
                ? "page"
                : undefined
            }
          >
            Projects
            <span className='absolute -bottom-1 left-0 w-0 h-px bg-current transition-all group-hover:w-full' />
          </Link>
          <Link
            href='/about'
            className='text-sm tracking-wide hover:opacity-80 transition-opacity relative group'
            aria-current={
              typeof window !== "undefined" &&
              window.location.pathname === "/about"
                ? "page"
                : undefined
            }
          >
            About
            <span className='absolute -bottom-1 left-0 w-0 h-px bg-current transition-all group-hover:w-full' />
          </Link>
          <Link
            href='/contact'
            className='text-sm tracking-wide hover:opacity-80 transition-opacity relative group'
            aria-current={
              typeof window !== "undefined" &&
              window.location.pathname === "/contact"
                ? "page"
                : undefined
            }
          >
            Contact
            <span className='absolute -bottom-1 left-0 w-0 h-px bg-current transition-all group-hover:w-full' />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Favicon />
      </head>
      <body
        className={`${albertSans.className} bg-white dark:bg-black text-gray-900 dark:text-white antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Navigation />
          <main className='flex-1 pt-24'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
