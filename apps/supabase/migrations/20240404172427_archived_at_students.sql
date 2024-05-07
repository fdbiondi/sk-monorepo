
alter table "public"."students" add column "archived_at" timestamp with time zone;

CREATE TRIGGER handle_updated_at_students BEFORE UPDATE ON public.students FOR EACH ROW EXECUTE FUNCTION moddatetime('updated_at');


