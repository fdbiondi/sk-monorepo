create policy "Admin can get tenants categories"
on "public"."categories"
as permissive
for select
to public
using ((tenant_id IN ( SELECT admins.tenant_id
   FROM admins)));


create policy "Student can get only its tenant categories"
on "public"."categories"
as permissive
for select
to public
using (((student_tenant() = tenant_id) AND (tenant_id IN ( SELECT tenants.id
   FROM tenants
  WHERE (tenants.categories_enabled = true)))));


