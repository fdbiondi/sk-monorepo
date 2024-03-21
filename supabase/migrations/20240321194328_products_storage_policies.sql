create policy "Admin can update images to their products"
on "storage"."objects"
as permissive
for update
to authenticated
using (((bucket_id = 'products'::text) AND ((storage.foldername(name))[1] IN ( SELECT (products.id)::text AS id
   FROM (admins
     JOIN products ON ((products.tenant_id = admins.tenant_id)))
  WHERE ((admins.user_id)::text = (auth.uid())::text)))))
with check (((bucket_id = 'products'::text) AND ((storage.foldername(name))[1] IN ( SELECT (products.id)::text AS id
   FROM (admins
     JOIN products ON ((products.tenant_id = admins.tenant_id)))
  WHERE ((admins.user_id)::text = (auth.uid())::text)))));


create policy "Admins can add images to their products"
on "storage"."objects"
as permissive
for insert
to authenticated
with check (((bucket_id = 'products'::text) AND ((storage.foldername(name))[1] IN ( SELECT (products.id)::text AS id
   FROM (admins
     JOIN products ON ((products.tenant_id = admins.tenant_id)))
  WHERE ((admins.user_id)::text = (auth.uid())::text)))));


create policy "Admins can delete images of their products"
on "storage"."objects"
as permissive
for delete
to authenticated
using (((bucket_id = 'products'::text) AND ((storage.foldername(name))[1] IN ( SELECT (products.id)::text AS id
   FROM (admins
     JOIN products ON ((products.tenant_id = admins.tenant_id)))
  WHERE ((admins.user_id)::text = (auth.uid())::text)))));


create policy "Admins can get images of their products"
on "storage"."objects"
as permissive
for select
to authenticated
using (((bucket_id = 'products'::text) AND ((storage.foldername(name))[1] IN ( SELECT (products.id)::text AS id
   FROM (admins
     JOIN products ON ((products.tenant_id = admins.tenant_id)))
  WHERE ((admins.user_id)::text = (auth.uid())::text)))));


create policy "Students can get their tenant product images"
on "storage"."objects"
as permissive
for select
to public
using (((bucket_id = 'products'::text) AND ((storage.foldername(name))[1] IN ( SELECT (products.id)::text AS id
   FROM products
  WHERE ((products.tenant_id)::text = (student_tenant())::text)))));



