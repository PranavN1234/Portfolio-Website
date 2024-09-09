/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Set basePath and assetPrefix for GitHub Pages
  basePath: isProd ? '/Portfolio-Website' : '',
  assetPrefix: isProd ? '/Portfolio-Website/' : '',
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
