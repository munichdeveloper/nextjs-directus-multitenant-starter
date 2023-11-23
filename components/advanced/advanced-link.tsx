"use client"

import Link from "next/link"
import { ReactNode } from "react"

export function AdvancedLink({
  children,
  href, // Extract href directly
  className, // Extract className directly
  onClick, // Extract onClick directly
  analyticsValue, // Extract analyticsValue directly
  analyticsProperties, // Extract analyticsProperties directly
  // any other props that come through
  ...props
}: {
  children: ReactNode
  href: string
  className?: string
  onClick?: () => void
  analyticsValue?: string
  analyticsProperties?: object | null
  [key: string]: any
}) {
  const captureEvent = () => {
    // Add Posthog tracking when the component is clicked.
    if (analyticsValue) {
      // posthog?.capture(`${analyticsValue ?? "clicked_link"}`, {
      //   properties: analyticsProperties ?? {},
      // })
    }
  }

  return (
    <Link
      href={href}
      className={className ?? ""}
      onClick={(e) => {
        captureEvent()
        onClick && onClick()
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
