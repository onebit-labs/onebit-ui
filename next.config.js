const path = require('path')
const { withRoutes } = require('./scripts/next-router-config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    modularizeImports: {
      lodash: {
        transform: 'lodash/{{member}}',
      },
    },
  },
  compiler: {
    styledComponents: true,
    emotion: true,
  },
  eslint: {
    dirs: ['app', 'domains', 'store', 'lib', 'pages', 'UI'],
  },
  webpack: (config, context) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = context
    // Important: return the modified config
    const alias = config.resolve.alias
    const emptyModule = path.resolve(__dirname, 'lib/ssr/empty-module.ts')

    if (!isServer) {
      alias.net = emptyModule
      alias.child_process = emptyModule
      alias.fs = emptyModule
    }

    // console.log(JSON.stringify(alias, null, 2))

    config.plugins.push(
      new webpack.DefinePlugin({
        __SERVER__: isServer,
        __DEV__: dev,
      })
    )

    return config
  },
  async rewrites() {
    return {
      fallback: [],
    }
  },
}

module.exports = withRoutes(nextConfig)
