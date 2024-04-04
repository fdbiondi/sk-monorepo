create extension if not exists "moddatetime" with schema "extensions";


alter table "public"."students" add column "archived_at" timestamp with time zone;

alter table "public"."students" alter column "created_at" drop default;

alter table "public"."students" alter column "created_at" set data type timestamp with time zone using "created_at"::timestamp with time zone;

alter table "public"."students" alter column "updated_at" drop default;

alter table "public"."students" alter column "updated_at" set data type timestamp with time zone using "updated_at"::timestamp with time zone;

CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION moddatetime('updated_at');


