/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Set basePath and assetPrefix for GitHub Pages
  basePath: isProd ? '/Portfolio-Website' : '',
  assetPrefix: isProd ? '/Portfolio-Website/' : '',
};

module.exports = nextConfig;
