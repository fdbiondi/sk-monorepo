drop policy "Student can purchase a product" on "public"."students_products";

drop policy "Students can only get their products" on "public"."students_products";

revoke delete on table "public"."students_products" from "anon";

revoke insert on table "public"."students_products" from "anon";

revoke references on table "public"."students_products" from "anon";

revoke select on table "public"."students_products" from "anon";

revoke trigger on table "public"."students_products" from "anon";

revoke truncate on table "public"."students_products" from "anon";

revoke update on table "public"."students_products" from "anon";

revoke delete on table "public"."students_products" from "authenticated";

revoke insert on table "public"."students_products" from "authenticated";

revoke references on table "public"."students_products" from "authenticated";

revoke select on table "public"."students_products" from "authenticated";

revoke trigger on table "public"."students_products" from "authenticated";

revoke truncate on table "public"."students_products" from "authenticated";

revoke update on table "public"."students_products" from "authenticated";

revoke delete on table "public"."students_products" from "service_role";

revoke insert on table "public"."students_products" from "service_role";

revoke references on table "public"."students_products" from "service_role";

revoke select on table "public"."students_products" from "service_role";

revoke trigger on table "public"."students_products" from "service_role";

revoke truncate on table "public"."students_products" from "service_role";

revoke update on table "public"."students_products" from "service_role";

alter table "public"."students_products" drop constraint "product_id";

alter table "public"."students_products" drop constraint "student_id";

alter table "public"."students_products" drop constraint "students_products_student_id_product_id_key";

alter table "public"."students_products" drop constraint "students_products_pkey";

drop index if exists "public"."students_products_pkey";

drop index if exists "public"."students_products_student_id_product_id_key";

drop table "public"."students_products";

create table "public"."students_product_tiers" (
    "id" uuid not null default uuid_generate_v4(),
    "student_id" uuid not null,
    "product_tier_id" uuid not null,
    "created_at" timestamp without time zone default CURRENT_TIMESTAMP,
    "updated_at" timestamp without time zone default CURRENT_TIMESTAMP
);


alter table "public"."students_product_tiers" enable row level security;

CREATE UNIQUE INDEX students_products_pkey ON public.students_product_tiers USING btree (id);

CREATE UNIQUE INDEX students_products_student_id_product_id_key ON public.students_product_tiers USING btree (student_id, product_tier_id);

alter table "public"."students_product_tiers" add constraint "students_products_pkey" PRIMARY KEY using index "students_products_pkey";

alter table "public"."students_product_tiers" add constraint "students_product_tiers_product_tier_id_fkey" FOREIGN KEY (product_tier_id) REFERENCES product_tiers(id) ON DELETE CASCADE not valid;

alter table "public"."students_product_tiers" validate constraint "students_product_tiers_product_tier_id_fkey";

alter table "public"."students_product_tiers" add constraint "students_product_tiers_student_id_fkey" FOREIGN KEY (student_id) REFERENCES students(id) not valid;

alter table "public"."students_product_tiers" validate constraint "students_product_tiers_student_id_fkey";

alter table "public"."students_product_tiers" add constraint "students_products_student_id_product_id_key" UNIQUE using index "students_products_student_id_product_id_key";

grant delete on table "public"."students_product_tiers" to "anon";

grant insert on table "public"."students_product_tiers" to "anon";

grant references on table "public"."students_product_tiers" to "anon";

grant select on table "public"."students_product_tiers" to "anon";

grant trigger on table "public"."students_product_tiers" to "anon";

grant truncate on table "public"."students_product_tiers" to "anon";

grant update on table "public"."students_product_tiers" to "anon";

grant delete on table "public"."students_product_tiers" to "authenticated";

grant insert on table "public"."students_product_tiers" to "authenticated";

grant references on table "public"."students_product_tiers" to "authenticated";

grant select on table "public"."students_product_tiers" to "authenticated";

grant trigger on table "public"."students_product_tiers" to "authenticated";

grant truncate on table "public"."students_product_tiers" to "authenticated";

grant update on table "public"."students_product_tiers" to "authenticated";

grant delete on table "public"."students_product_tiers" to "service_role";

grant insert on table "public"."students_product_tiers" to "service_role";

grant references on table "public"."students_product_tiers" to "service_role";

grant select on table "public"."students_product_tiers" to "service_role";

grant trigger on table "public"."students_product_tiers" to "service_role";

grant truncate on table "public"."students_product_tiers" to "service_role";

grant update on table "public"."students_product_tiers" to "service_role";

create policy "Student can purchase a product"
on "public"."students_product_tiers"
as permissive
for insert
to public
with check ((student_id = student_uid()));


create policy "Students can only get their products"
on "public"."students_product_tiers"
as permissive
for select
to public
using ((student_id IN ( SELECT students.id
   FROM students
  WHERE ((students.sub = student_sub()) AND (student_tenant() = students.tenant_id)))));



