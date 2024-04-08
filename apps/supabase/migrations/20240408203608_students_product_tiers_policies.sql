create policy "Student can get only its tenant products tiers"
on "public"."product_tiers"
as permissive
for select
to public
using ((product_id IN ( SELECT products.id
   FROM products
  WHERE (products.tenant_id = student_tenant()))));



