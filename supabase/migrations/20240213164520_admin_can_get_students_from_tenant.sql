create policy "Admin can get students from tenant"
on "public"."students"
as permissive
for select
to public
using ((tenant_id = ( SELECT admins.tenant_id
   FROM admins
  WHERE (admins.user_id = auth.uid()))));