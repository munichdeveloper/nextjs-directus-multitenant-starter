"use client"

import { storedUser } from "@/store/slices/auth"
import Link from "next/link"

import { Icons } from "@/components/misc/icons"
import { useStoreSelector } from "@/hooks/useStore"
import { cn } from "@/lib/utils"
import { MainNavProps } from "@/types/general"

export function MainNav({ items }: MainNavProps) {
  const user = useStoreSelector(storedUser)

  if (user && items) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    items = items?.filter(
      (item) => item.title !== "Login" && item.title !== "Sign up"
    )
  }

  return (
    <>
      {/* Desktop navbar */}
      <nav className="hidden px-1 md:flex md:items-center md:justify-between md:gap-6" suppressHydrationWarning={true}>
        {items?.length ? (
          <div className="flex gap-6">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                    onClick={() => {
                      // todo
                    }}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </div>
        ) : null}
      </nav>

      {/* Mobile navbar */}

      <nav className="flex items-center justify-between px-1 md:hidden" suppressHydrationWarning={true}>
        <Link
          href="/"
          className="flex items-start space-x-2"
          onClick={() => {
            // todo
          }}
        >
          <Icons.menu className="h-4 w-4" />
        </Link>
      </nav>
    </>
  )
}
