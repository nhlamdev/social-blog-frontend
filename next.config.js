/** @type {import('next').NextConfig} */
const nextConfig = {
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
