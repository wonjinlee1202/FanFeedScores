/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "a.espncdn.com" }],
  },
  // experimental: {
  //   serverActions: true, // Enable server actions
  // },
};

module.exports = nextConfig;
