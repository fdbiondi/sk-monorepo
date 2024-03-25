/** @type {import('next').NextConfig} */
const remote = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost');

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
};

module.exports = nextConfig;
