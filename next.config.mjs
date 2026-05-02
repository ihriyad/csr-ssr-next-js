/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  //"https://res.cloudinary.com/
  reactCompiler: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
