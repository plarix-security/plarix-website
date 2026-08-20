/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/blog/what-is-an-agent-failure-boundary',
        destination: '/blog/what-is-an-economically-engineered-agentic-system',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
