alter table "public"."categories" drop column "sort_order";

alter table "public"."categories" add column "archived_at" timestamp with time zone;

alter table "public"."categories" add column "order" smallint default '0'::smallint;

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



