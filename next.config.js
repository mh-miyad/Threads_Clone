/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    proxyTimeout: 3000,

    serverActions: {
      allowedOrigins: [
        "https://coditalk.vercel.app/",
        "*https://coditalk.vercel.app/",
        "http://localhost:3000/",
      ],
    },
  },
};

module.exports = nextConfig;
