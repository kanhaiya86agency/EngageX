// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["easy-peasy.ai", "goozzby-storage.s3.ap-south-1.amazonaws.com"],
//   },
// };

// export default nextConfig;

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["your-image-domain.com"],
  },
};

module.exports = withPWA(nextConfig);
