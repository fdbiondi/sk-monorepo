const { composePlugins, withNx } = require('@nx/next');
const remote = new URL(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost',
);

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  /// Image Docs: https://nextjs.org/docs/messages/next-image-unconfigured-host
  /// Loader docs: https://supabase.com/docs/guides/storage/image-transformations#nextjs-loader
  images: {
    // loader: 'custom',
    // loaderFile: './supabase-image-loader.js',
    remotePatterns: [
      {
        protocol: remote.protocol.replace(':', ''),
        hostname: remote.hostname,
        port: remote.port,
        pathname: '/storage/v1/**',
      },
    ],
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
