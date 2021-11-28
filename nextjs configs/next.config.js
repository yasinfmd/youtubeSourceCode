// import { abc, def, gh } from "https://www.abc.com.tr/packages"
module.exports = {
  reactStrictMode: true,
  env: {
    apiUrl: "abc.com"
  },
  compress: false,
  distDir: "mybuild",
  basePath: "/test",
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: false
  },
  generateBuildId: async () => {
    return "buildid"
  },
  experimental: {
    urlImports: ["https://www.abc.com.tr/packages"]
  },
  assetPrefix: "https://abc.com.tr/asdsad",
  async headers() {
    return [
      {
        source: "/test",
        headers: [
          {
            key: "x-header-test",
            value: "asdasd"
          }
        ]
      }
    ]
  },
  async redirects() {
    return [

      {
        source: "/hi",
        destination: "/",
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/selam",
        destination: "/"
      },
      {
        source: "/merhaba",
        destination: "https://github.com/yasinfmd"
      }
    ]
  }
}
