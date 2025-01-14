import type { NextConfig } from "next"

const config: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["i.vimeocdn.com"],
  },
}

export default config
