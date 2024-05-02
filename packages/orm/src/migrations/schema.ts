import { sql } from "drizzle-orm";
import { pgTable, pgEnum, uuid, varchar, timestamp, text, unique, boolean, smallint, jsonb, bigint } from "drizzle-orm/pg-core";

import { users } from "./auth.schema";

export const keyStatus = pgEnum("key_status", ['expired', 'invalid', 'valid', 'default']);
export const keyType = pgEnum("key_type", ['stream_xchacha20', 'secretstream', 'secretbox', 'kdf', 'generichash', 'shorthash', 'auth', 'hmacsha256', 'hmacsha512', 'aead-det', 'aead-ietf']);
export const requestStatus = pgEnum("request_status", ['ERROR', 'SUCCESS', 'PENDING']);
export const equalityOp = pgEnum("equality_op", ['in', 'gte', 'gt', 'lte', 'lt', 'neq', 'eq']);
export const action = pgEnum("action", ['ERROR', 'TRUNCATE', 'DELETE', 'UPDATE', 'INSERT']);
export const factorType = pgEnum("factor_type", ['webauthn', 'totp']);
export const factorStatus = pgEnum("factor_status", ['verified', 'unverified']);
export const aalLevel = pgEnum("aal_level", ['aal3', 'aal2', 'aal1']);
export const codeChallengeMethod = pgEnum("code_challenge_method", ['plain', 's256']);
export const containerType = pgEnum("container_type", ['bayg', 'pre_recorded']);

export const tenants = pgTable("tenants", {
  id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  name: varchar("name", { length: 255 }),
  createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
  logo: varchar("logo"),
  categoriesEnabled: boolean("categories_enabled").default(false).notNull(),
});

export const admins = pgTable("admins", {
  id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  userId: uuid("user_id").notNull().references(() => users.id),
  tenantId: uuid("tenant_id").notNull().references(() => tenants.id),
  createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
});

export const students = pgTable("students", {
  id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  firstName: varchar("first_name", { length: 255 }),
  lastName: varchar("last_name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  tenantId: uuid("tenant_id").notNull().references(() => tenants.id),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
  sub: uuid("sub"),
  username: varchar("username"),
  archivedAt: timestamp("archived_at", { withTimezone: true, mode: 'string' }),
},
  (table) => {
    return {
      studentsEmailTenantIdKey: unique("students_email_tenant_id_key").on(table.email, table.tenantId),
      studentsSubKey: unique("students_sub_key").on(table.sub),
      studentsUsernameKey: unique("students_username_key").on(table.username),
    }
  });

export const supportCodes = pgTable("support_codes", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  code: varchar("code").notNull(),
  studentId: uuid("student_id").notNull().references(() => students.id, { onDelete: "cascade" } ),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
},
  (table) => {
    return {
      supportCodesCodeKey: unique("support_codes_code_key").on(table.code),
    }
  });

export const categories = pgTable("categories", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: varchar("name"),
  order: smallint("order"),
  isDefault: boolean("is_default").default(false).notNull(),
  tenantId: uuid("tenant_id").notNull().references(() => tenants.id, { onDelete: "cascade" } ),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
  archivedAt: timestamp("archived_at", { withTimezone: true, mode: 'string' }),
});

export const products = pgTable("products", {
  id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  tenantId: uuid("tenant_id").notNull().references(() => tenants.id, { onDelete: "cascade" } ),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
  description: text("description"),
  externalLink: text("external_link"),
  image: varchar("image"),
  ontraportId: varchar("ontraport_id"),
  shortDescription: text("short_description"),
  categoryId: uuid("category_id").notNull().references(() => categories.id, { onDelete: "cascade" } ),
  archivedAt: timestamp("archived_at", { withTimezone: true, mode: 'string' }),
});

export const productTiers = pgTable("product_tiers", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  productId: uuid("product_id").references(() => products.id, { onDelete: "cascade" } ),
  title: varchar("title"),
  sku: varchar("sku"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
});

export const studentsProductTiers = pgTable("students_product_tiers", {
  id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  studentId: uuid("student_id").notNull().references(() => students.id),
  productTierId: uuid("product_tier_id").notNull().references(() => productTiers.id, { onDelete: "cascade" } ),
  createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
},
  (table) => {
    return {
      studentsProductTiersStudentIdProductTierIdKey: unique("students_product_tiers_student_id_product_tier_id_key").on(table.studentId, table.productTierId),
    }
  });

export const lessons = pgTable("lessons", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  productId: uuid("product_id").notNull().references(() => products.id, { onDelete: "cascade" } ),
  title: varchar("title"),
  slug: varchar("slug"),
  content: jsonb("content"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});

export const modules = pgTable("modules", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  productId: uuid("product_id").notNull().references(() => products.id, { onDelete: "cascade" } ),
  title: varchar("title"),
  slug: varchar("slug"),
  content: jsonb("content"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});

export const lessonsModules = pgTable("lessons_modules", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  lessonId: uuid("lesson_id").notNull().references(() => lessons.id, { onDelete: "cascade" } ),
  moduleId: uuid("module_id").notNull().references(() => modules.id, { onDelete: "cascade" } ),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});

export const containers = pgTable("containers", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  productId: uuid("product_id").notNull().references(() => products.id, { onDelete: "cascade" } ),
  type: containerType("type").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
},
  (table) => {
    return {
      containersProductIdTypeKey: unique("containers_product_id_type_key").on(table.productId, table.type),
    }
  });

export const containersLessons = pgTable("containers_lessons", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  containerId: uuid("container_id").notNull().references(() => containers.id, { onDelete: "cascade" } ),
  lessonId: uuid("lesson_id").notNull().references(() => lessons.id, { onDelete: "cascade" } ),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  order: bigint("order", { mode: "number" }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
},
  (table) => {
    return {
      containersLessonsContainerIdLessonIdKey: unique("containers_lessons_container_id_lesson_id_key").on(table.containerId, table.lessonId),
    }
  });

export const containersModules = pgTable("containers_modules", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  containerId: uuid("container_id").notNull().references(() => containers.id, { onDelete: "cascade" } ),
  moduleId: uuid("module_id").notNull().references(() => modules.id, { onDelete: "cascade" } ),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  order: bigint("order", { mode: "number" }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
},
  (table) => {
    return {
      containersModulesContainerIdModuleIdKey: unique("containers_modules_container_id_module_id_key").on(table.containerId, table.moduleId),
    }
  });
