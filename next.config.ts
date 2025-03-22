/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
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
