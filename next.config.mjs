/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.krop.com/giles_airey/#/',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
