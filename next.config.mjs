/** @type {import('next').NextConfig} */
// const { version } = require("./package.json") !TODO fix this later
// import { siteConfig } from "@/config/site"

const version = "0.0.1"
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    // Will be available on both server and client
    version,
  },
  experimental: {
    serverActions: true,
  },
}

export default nextConfig
