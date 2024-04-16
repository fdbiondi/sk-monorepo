alter table "public"."categories" add column "archived_at" timestamp with time zone;

create policy "Admins can create categories"
on "public"."categories"
as permissive
for insert
to public
with check ((tenant_id IN ( SELECT admins.tenant_id
   FROM admins
  WHERE (admins.user_id = auth.uid()))));


create policy "Admins can update categories"
on "public"."categories"
as permissive
for update
to public
using ((tenant_id IN ( SELECT admins.tenant_id
   FROM admins
  WHERE (admins.user_id = auth.uid()))))
with check ((tenant_id IN ( SELECT admins.tenant_id
   FROM admins
  WHERE (admins.user_id = auth.uid()))));

CREATE TRIGGER handle_updated_at_categories BEFORE UPDATE ON public.categories FOR EACH ROW EXECUTE FUNCTION moddatetime('updated_at');
