drop policy "Admin can get students from tenant" on "public"."students";

create policy "Admin can get its information"
on "public"."admins"
as permissive
for select
to public
using ((user_id = auth.uid()));


create policy "Admins can get info about tenant"
on "public"."tenants"
as permissive
for select
to public
using (true);


create policy "Admin can get students from tenant"
on "public"."students"
as permissive
for select
to public
using ((tenant_id IN ( SELECT admins.tenant_id
   FROM admins
  WHERE (admins.user_id = auth.uid()))));