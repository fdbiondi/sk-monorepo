create policy "Admin can get its tenant product containers"
on "public"."containers"
as permissive
for select
to public
using ((product_id IN ( SELECT products.id
   FROM (products
     JOIN admins ON ((admins.tenant_id = products.tenant_id)))
  WHERE (admins.user_id = auth.uid()))));


create policy "Admin can get its tenant product containers lessons"
on "public"."containers_lessons"
as permissive
for select
to public
using ((container_id IN ( SELECT containers.id
   FROM ((products
     JOIN containers ON ((products.id = containers.product_id)))
     JOIN admins ON ((admins.tenant_id = products.tenant_id)))
  WHERE (admins.user_id = auth.uid()))));


create policy "Admin can get its tenant product containers modules"
on "public"."containers_modules"
as permissive
for select
to public
using ((container_id IN ( SELECT containers.id
   FROM ((products
     JOIN containers ON ((products.id = containers.product_id)))
     JOIN admins ON ((admins.tenant_id = products.tenant_id)))
  WHERE (admins.user_id = auth.uid()))));



