/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    proxyTimeout: 3000,

    serverActions: {
      allowedOrigins: [
        "https://coditalk.vercel.app/",
        "*https://coditalk.vercel.app/",
        "https://threds-clone.vercel.app/",
        "*https://threds-clone.vercel.app/",
        "http://localhost:3000/",
      ],
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
