create policy "Admin can create tenants products"
on "public"."products"
as permissive
for insert
to public
with check ((tenant_id IN ( SELECT admins.tenant_id
   FROM admins
  WHERE (admins.user_id = auth.uid()))));


create policy "admin can update products"
on "public"."products"
as permissive
for update
to public
using ((tenant_id IN ( SELECT admins.tenant_id
   FROM admins
  WHERE (admins.user_id = auth.uid()))))
with check ((tenant_id IN ( SELECT admins.tenant_id
   FROM admins
  WHERE (admins.user_id = auth.uid()))));



