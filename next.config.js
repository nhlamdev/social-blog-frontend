/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/service/:path*",
        destination: `http://localhost:${process.env.SERVICE_PORT}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
