create policy "Admins can create lessons"
on "public"."lessons"
as permissive
for insert
to public
with check ((product_id IN ( SELECT products.id
   FROM (products
     JOIN admins ON ((admins.tenant_id = products.tenant_id)))
  WHERE (admins.user_id = auth.uid()))));


create policy "Admin can associate lessons to a module"
on "public"."lessons_modules"
as permissive
for insert
to public
with check ((module_id IN ( SELECT modules.id
   FROM ((products
     JOIN modules ON ((products.id = modules.product_id)))
     JOIN admins ON ((admins.tenant_id = products.tenant_id)))
  WHERE (admins.user_id = auth.uid()))));


create policy "Admin can create modules"
on "public"."modules"
as permissive
for insert
to public
with check ((product_id IN ( SELECT products.id
   FROM (products
     JOIN admins ON ((admins.tenant_id = products.tenant_id)))
  WHERE (admins.user_id = auth.uid()))));


create policy "Admin can get lessons"
on "public"."lessons"
as permissive
for select
to public
using ((product_id IN ( SELECT products.id
   FROM (products
     JOIN admins ON ((admins.tenant_id = products.tenant_id)))
  WHERE (admins.user_id = auth.uid()))));


create policy "Admin can get modules"
on "public"."modules"
as permissive
for select
to public
using ((product_id IN ( SELECT products.id
   FROM (products
     JOIN admins ON ((admins.tenant_id = products.tenant_id)))
  WHERE (admins.user_id = auth.uid()))));



