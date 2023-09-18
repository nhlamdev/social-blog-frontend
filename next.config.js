/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  async rewrites() {
    return [
      // {
      //   source: "/service/:path*",
      //   destination: `http://localhost:${process.env.SERVICE_PORT}/:path*`,
      // },
    ];
  },
};

module.exports = nextConfig;
