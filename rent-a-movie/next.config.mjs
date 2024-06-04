/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.bing.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.google.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
