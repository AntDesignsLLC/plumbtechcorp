import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const isGithubPages = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isGithubPages ? '/your-repo-name/' : '',
  basePath: isGithubPages ? '/your-repo-name' : '',
  trailingSlash: true, // Helps with static export
};


export default nextConfig;
