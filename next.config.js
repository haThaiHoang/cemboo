/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    if (dev) {
      const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack",
    });

    config.resolve.alias.canvas = false
    config.resolve.alias.encoding = false

    return config;
  },
  images: {
    domains: ['picsum.photos'],
  },
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
