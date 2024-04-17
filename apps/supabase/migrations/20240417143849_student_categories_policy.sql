drop policy "Student can get only its tenant categories" on "public"."categories";

create policy "Student can get only its tenant and products categories"
on "public"."categories"
as permissive
for select
to public
using (((student_tenant() = tenant_id) AND (tenant_id IN ( SELECT tenants.id
   FROM tenants
  WHERE (tenants.categories_enabled = true))) AND (id IN ( SELECT products.category_id
   FROM (((students
     JOIN students_product_tiers ON ((students_product_tiers.student_id = students.id)))
     JOIN product_tiers ON ((students_product_tiers.product_tier_id = product_tiers.id)))
     JOIN products ON ((product_tiers.product_id = products.id)))
  WHERE (students.sub = student_sub())))));



