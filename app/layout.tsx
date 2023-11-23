import "@/styles/globals.css"
import { Metadata } from "next"

import { ProgressBar } from "@/components/misc/progress"
import CustomProvider from "@/components/misc/state-provider"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { RootLayoutProps } from "@/types/general"
// import Seo from "@/components/misc/seo"
import { TailwindIndicator } from "@/components/misc/tailwind-indicator"
import { ToasterWrapper } from "@/components/misc/toaster-wrapper"
import Head from "next/head"
import { Theme } from "@radix-ui/themes"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "TypeScript",
    "Directus",
    "Headless CMS",
  ],
  authors: [
    {
      name: `${siteConfig.author ? siteConfig.author : "@munichdeveloper"}`,
      url: `${siteConfig.authorUrl ? siteConfig.authorUrl : "https://munich-developer.de"
        }`,
    },
  ],
  creator: `${siteConfig.author ? siteConfig.author : "@munichdeveloper"}`,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.links.home,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.links.home}/og.jpg`],
    creator: `${siteConfig.author ? siteConfig.author : "@munichdeveloper"}`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.links.home}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Head>
        </Head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {/* <Seo> */}
          <ProgressBar />
          <CustomProvider>
            <Theme>
              <div className="relative flex min-h-screen flex-col">
                {children}
              </div>
            </Theme>
          </CustomProvider>
          <ToasterWrapper />
          <TailwindIndicator />
          {/* </Seo> */}
        </body>
      </html>
    </>
  )
}
