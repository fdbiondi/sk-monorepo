drop policy "Admins can delete images of their products" on "storage"."objects";

create policy "Admins can add logo to their tenants"
on "storage"."objects"
as permissive
for insert
to authenticated
with check (((bucket_id = 'tenants'::text) AND ((storage.foldername(name))[1] IN ( SELECT (admins.tenant_id)::text AS id
   FROM admins
  WHERE ((admins.user_id)::text = (auth.uid())::text)))));


create policy "Admins can remove logo of their tenants"
on "storage"."objects"
as permissive
for delete
to authenticated
using (((bucket_id = 'tenants'::text) AND ((storage.foldername(name))[1] IN ( SELECT (admins.tenant_id)::text AS id
   FROM admins
  WHERE ((admins.user_id)::text = (auth.uid())::text)))));


create policy "Admins can update logo of their tenants"
on "storage"."objects"
as permissive
for update
to authenticated
using (((bucket_id = 'tenants'::text) AND ((storage.foldername(name))[1] IN ( SELECT (admins.tenant_id)::text AS id
   FROM admins
  WHERE ((admins.user_id)::text = (auth.uid())::text)))));


create policy "Admins can view logo of their tenants"
on "storage"."objects"
as permissive
for select
to authenticated
using (((bucket_id = 'tenants'::text) AND ((storage.foldername(name))[1] IN ( SELECT (admins.tenant_id)::text AS id
   FROM admins
  WHERE ((admins.user_id)::text = (auth.uid())::text)))));


create policy "Students can get their tenant logo"
on "storage"."objects"
as permissive
for select
to public
using (((bucket_id = 'tenants'::text) AND ((storage.foldername(name))[1] IN ( SELECT (tenants.id)::text AS id
   FROM tenants
  WHERE ((tenants.id)::text = (student_tenant())::text)))));



