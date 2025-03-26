/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
    serverActions: {
      allowedOrigins: ["localhost:3000","vecna.online","0.0.0.0:3000"],
      allowedForwardedHosts: ["localhost:3000","vecna.online","0.0.0.0:3000"],
    }
  },
  images: {
    domains: ["localhost", "picsum.photos", "i.pravatar.cc"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.upwork.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
