/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/service/:path*",
        destination: `http://localhost:${process.env.SERVICE_PORT}/:path*`,
      },
      {
        source: "/landing-page",
        destination: `/landing/index.html`,
      },
    ];
  },
};

module.exports = nextConfig;
