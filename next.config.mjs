/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "alumintrading.com"],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;