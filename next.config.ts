import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const repoName = 'plumbtechcorp'; // <- your actual GitHub repo name
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true, // required for static exports on GitHub Pages
};


export default nextConfig;
