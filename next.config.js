/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images: {
    domains: ["cloudflare-ipfs.com", "ipfs.io"],
  },
};

module.exports = nextConfig;
