create extension if not exists "moddatetime" with schema "extensions";


alter table "public"."products" add column "archived_at" timestamp with time zone;

CREATE TRIGGER handle_updated_at_products BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION moddatetime('updated_at');


