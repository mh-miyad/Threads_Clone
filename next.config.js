/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
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
