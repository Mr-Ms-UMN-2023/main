/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  img: {
    quality: 100,
  },
  images: {
    quality: 100,
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mrms.umn.ac.id",
        formats: ["image/avif", "image/webp"],
      },
    ],
  },
};

module.exports = nextConfig;
