"use client"

import { DirectusProvider } from "react-directus"

export function MyDirectusProvider({ children }: any) {

  return (
    <DirectusProvider apiUrl={``} options={{}}>
      {children}
    </DirectusProvider>
  )
}
