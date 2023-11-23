import { ThemeProvider } from "@/components/misc/theme-provider"
import { AppFooter } from "@/components/navigation/app/AppFooter"
import { AppHeader } from "@/components/navigation/app/AppHeader"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Suspense } from "react"

export default function PublicLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <nav>
          <AppHeader />
        </nav>
        <Suspense fallback={<p>Loading ...</p>}>
          {children}
        </Suspense>
      </ThemeProvider>
      <AppFooter />
    </div>
  )
}
