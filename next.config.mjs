/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/Rainwater-Harvesting-System-for-Roof-Top---Effective-Water-Solutions',
        destination: '/roof-top-rainwater-harvesting-system-RRWHS-InRain',
        permanent: true,
      },
      {
        source: '/polyrain-rainwater-harvesting',
        destination: '/polymer-type-rainwater-harvesting',
        permanent: true,
      }
    ];
  },
};


export default nextConfig;
