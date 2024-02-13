create policy "Admin can get tenants products"
on "public"."products"
as permissive
for select
to public
using ((tenant_id IN ( SELECT admins.tenant_id
   FROM admins)));