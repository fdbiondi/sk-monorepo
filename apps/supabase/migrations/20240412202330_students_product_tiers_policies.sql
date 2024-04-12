drop policy "Admins can get info about tenant" on "public"."tenants";

create policy "Student can get only its tenant products tiers"
on "public"."product_tiers"
as permissive
for select
to public
using ((product_id IN ( SELECT products.id
   FROM products
  WHERE (products.tenant_id = student_tenant()))));


create policy "Admin can get tenants product tiers"
on "public"."product_tiers"
as permissive
for select
to public
using ((product_id IN ( SELECT products.id
   FROM (products
     JOIN admins ON ((admins.tenant_id = products.tenant_id)))
  WHERE (admins.user_id = auth.uid()))));


create policy "Admin can get its tenants products tiers related to students"
on "public"."students_product_tiers"
as permissive
for select
to public
using ((product_tier_id IN ( SELECT product_tiers.id
   FROM ((products
     JOIN product_tiers ON ((products.id = product_tiers.product_id)))
     JOIN admins ON ((admins.tenant_id = products.tenant_id)))
  WHERE (admins.user_id = auth.uid()))));


create policy "Admins can get info about tenant"
on "public"."tenants"
as permissive
for select
to public
using ((id IN ( SELECT admins.tenant_id
   FROM admins
  WHERE (admins.user_id = auth.uid()))));



