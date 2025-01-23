import { Favicon } from "@/components/Favicon"
import { Footer } from "@/components/Footer"
import { Navigation } from "@/components/Navigation"
import { ProjectThemeProvider } from "@/components/ProjectThemeProvider"
import { ThemeProvider } from "@/components/ThemeProvider"
import type { Metadata } from "next"
import { Albert_Sans } from "next/font/google"
import "./globals.css"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  // Include light weight for our font-light usage
  weight: ["300", "400", "500", "600"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Favicon />
        <style>
          {`
            ::view-transition-old(page),
            ::view-transition-new(page) {
              animation-duration: 1s;
            }

            ::view-transition-old(page) {
              animation-name: fade-and-slide-out;
            }

            ::view-transition-new(page) {
              animation-name: fade-and-slide-in;
            }

            @keyframes fade-and-slide-out {
              from {
                opacity: 1;
                transform: translateY(0);
              }
              to {
                opacity: 0;
                transform: translateY(-20px);
              }
            }

            @keyframes fade-and-slide-in {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            main {
              view-transition-name: page;
            }
          `}
        </style>
      </head>
      <body
        className={`${albertSans.className} bg-white dark:bg-black text-gray-900 dark:text-white antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <ProjectThemeProvider />
          <Navigation />
          <main className='flex-1 pt-24'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
