/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["easy-peasy.ai", "goozzby-storage.s3.ap-south-1.amazonaws.com"], // Allow loading images from specific domains
  },
};

export default nextConfig;
