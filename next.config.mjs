/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "jrcldxhgwmboxlebrhzj.supabase.co",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb", // resolve the error: Request body larger than maxBodyLength limit
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
