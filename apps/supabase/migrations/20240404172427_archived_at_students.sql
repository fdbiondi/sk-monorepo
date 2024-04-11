
alter table "public"."students" add column "archived_at" timestamp with time zone;

alter table "public"."students" alter column "created_at" set data type timestamp with time zone using "created_at"::timestamp with time zone;

alter table "public"."students" alter column "created_at" set default (now() AT TIME ZONE 'utc'::text);

alter table "public"."students" alter column "updated_at" set data type timestamp with time zone using "updated_at"::timestamp with time zone;

alter table "public"."students" alter column "updated_at" drop default;

CREATE TRIGGER handle_updated_at_students BEFORE UPDATE ON public.students FOR EACH ROW EXECUTE FUNCTION moddatetime('updated_at');


