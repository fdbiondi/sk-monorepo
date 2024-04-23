import { sql } from 'drizzle-orm';
import { uuid, varchar, pgSchema } from 'drizzle-orm/pg-core';

export const authSchema = pgSchema('auth');
const authTable = authSchema.table;

export const users = authTable('users', {
  id: uuid('id')
    .default(sql`uuid_generate_v4()`)
    .primaryKey()
    .notNull(),
  email: varchar('email').notNull(),
});
