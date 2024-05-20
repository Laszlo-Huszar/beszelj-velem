/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beszeljvelem.hu',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
