alter table "public"."products" add column "archived_at" timestamp with time zone;

alter table "public"."products" alter column "created_at" set default (now() AT TIME ZONE 'utc'::text);

alter table "public"."products" alter column "created_at" set data type timestamp with time zone using "created_at"::timestamp with time zone;

alter table "public"."products" alter column "updated_at" drop default;

alter table "public"."products" alter column "updated_at" set data type timestamp with time zone using "updated_at"::timestamp with time zone;


