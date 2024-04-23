import 'dotenv/config';

import { type Session } from '@supabase/supabase-js';
import { sql } from 'drizzle-orm';
import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env['DATABASE_URL'];

if (!connectionString) {
  throw new Error('Missing DATABASE_URL environment variable');
}

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, {
  connection: {},
  prepare: false,
});
export const db = drizzle(client);

function decodeJwt(token: string): string {
  return atob(token.split('.')[1]);
}

// https://github.com/drizzle-team/drizzle-orm/issues/594#issuecomment-1685079921
export function authDB<T>(
  session: Session,
  cb: (sql: PostgresJsDatabase) => T | Promise<T>
): Promise<T> {
  // You can add a validation here for the accessToken - we rely on supabase for now
  const jwtClaim = decodeJwt(session.access_token);
  const role = JSON.parse(jwtClaim).role;

  return db.transaction(async (tx) => {
    // Set JWT to enable RLS. supabase adds the role and the userId (sub) to the jwt claims
    await tx.execute(
      sql`SELECT set_config('request.jwt.claims', '${sql.raw(jwtClaim)}', TRUE)`
    );

    // do not use postgres because it will bypass the RLS, set role to authenticated
    await tx.execute(sql`set role '${sql.raw(role)}'`);

    // https://github.com/drizzle-team/drizzle-orm/issues/594#issuecomment-1917830225
    const result = await cb(tx);

    await tx.execute(sql`SELECT set_config('request.jwt.claims', NULL, true);`);
    await tx.execute(sql`RESET ROLE;`);

    return result;
  }) as Promise<T>;
}
