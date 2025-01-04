/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["easy-peasy.ai"], // Allow loading images from specific domains
  },
};

export default nextConfig;
