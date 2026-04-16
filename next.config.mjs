/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '', // change to '/repo-name' only if your repo isn't the root
};

export default nextConfig;
