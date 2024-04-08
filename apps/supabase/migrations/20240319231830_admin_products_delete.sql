create policy "Admin can delete products"
on "public"."products"
as permissive
for delete
to public
using ((tenant_id IN ( SELECT admins.tenant_id
   FROM admins
  WHERE (admins.user_id = auth.uid()))));



