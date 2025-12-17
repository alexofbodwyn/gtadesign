import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prmivtkwlbkjvveyrmrs.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // redirects() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'https://www.krop.com/giles_airey/#/',
  //       permanent: false,
  //     },
  //   ]
  // },
}

export default withPayload(nextConfig)
