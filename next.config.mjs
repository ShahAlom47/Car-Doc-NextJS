/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Allows any hostname
          port: '', // Allows any port
          pathname: '**', // Allows any path
        },
      ],
    },
  };
  
  export default nextConfig;
  
