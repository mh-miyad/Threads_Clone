/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    proxyTimeout: 3000,
    serverActions: {
      allowedOrigins: [
        "https://coditalk.vercel.app/",
        "*https://coditalk.vercel.app/",
        "http://localhost:3000/",
      ],
      bodySizeLimit: 1024 * 1024,
    },
  },
};

module.exports = nextConfig;
