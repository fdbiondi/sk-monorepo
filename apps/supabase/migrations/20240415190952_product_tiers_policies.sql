create policy "Admin can create product tiers for its tenants"
on "public"."product_tiers"
as permissive
for insert
to public
with check ((product_id IN ( SELECT products.id
   FROM (products
     JOIN admins ON ((admins.tenant_id = products.tenant_id)))
  WHERE (admins.user_id = auth.uid()))));


