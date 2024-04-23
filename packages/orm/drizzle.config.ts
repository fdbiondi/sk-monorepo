import 'dotenv/config';

import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) {
  throw new Error('Missing DATABASE_URL environment variable');
}

export default defineConfig({
  schema: './src/migrations/schema.ts',
  out: './src/migrations/',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL
  },
  verbose: true,
  strict: true,
});
