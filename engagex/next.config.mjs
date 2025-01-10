/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  extendDefaultRuntimeCaching: true,
});

export default withPWA({
  reactStrictMode: true,
});
