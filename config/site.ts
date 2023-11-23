
import { env } from "@/env.mjs"

// const { publicRuntimeConfig } = getConfig()
export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: "NextJS + Directus // Multi Tenancy Starter",
  name: "NextJS + Directus // Multi Tenancy Starter",
  canonical: "https://example.munich-developer.de/",
  domain: "https://example.munich-developer.de/",
  // directusUrl: env.DIRECTUS_URL,
  nextUrl: env.NEXT_PUBLIC_APP_URL,
  image: "https://media.licdn.com/dms/image/C4D03AQH4Mr1vKgqJPA/profile-displayphoto-shrink_800_800/0/1575036737172?e=1706140800&v=beta&t=UYfOSELVJVhwYFCeL0SRJASoMxDYKmZwYKU7jGt57OA",
  type: "website",
  twitterHandle: "@munichdeveloper",
  description:
    "NextJS + Directus // Multi Tenancy Starter",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Login",
      href: "/auth/login",
    },
    {
      title: "Sign up",
      href: "/auth/sign-in",
    },
  ],
  links: {
    home: "/",
    about: "/about",
    blog: "/blog",
    login: "/auth/login",
    signup: "/auth/signup",
    contact: "/contact",
    privacyPolicy: "/privacy-policy",
    termsAndConditions: "/terms-and-conditions",
    dashboard: "/dashboard",
    admin: "/admin",
    adminDashboard: "/admin/dashboard",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    logo: "/logo.svg",
  },
  socials: [
    {
      name: "dummy",
      url: "https://test.de",
      asset: "/nope.jpg"
    }
  ],
  contacts: [
    {
      name: "Email",
      url: "mailto:info@munich-developer.de",
      asset: "/email.svg",
    },
    {
      name: "Phone",
      url: "tel:+49 176 551 442 07",
      asset: "/phone.svg",
    },
  ],
  // version: publicRuntimeConfig?.version || "unknown",
  version: "0.0.1",
  author: "munichdeveloper", // make sure this is also your github username
  authorUrl: "https://github.com/munichdeveloper",
  gitHubApiRepoName: "",
}
