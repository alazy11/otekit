/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '/600/**',
          },
          {
            protocol: 'https',
            hostname: 't3.ftcdn.net',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: "localhost",
            port: '4040',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
