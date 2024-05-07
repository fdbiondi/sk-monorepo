create table "public"."products" (
    "id" uuid not null default uuid_generate_v4(),
    "name" character varying(255) not null,
    "tenant_id" uuid not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone default now()
);


alter table "public"."products" enable row level security;

create table "public"."students" (
    "id" uuid not null default uuid_generate_v4(),
    "first_name" character varying(255),
    "last_name" character varying(255),
    "email" character varying(255),
    "tenant_id" uuid not null,
    "sub" uuid,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone default now()
);


alter table "public"."students" enable row level security;

create table "public"."students_products" (
    "id" uuid not null default uuid_generate_v4(),
    "student_id" uuid not null,
    "product_id" uuid not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone default now()
);


alter table "public"."students_products" enable row level security;

create table "public"."tenants" (
    "id" uuid not null default uuid_generate_v4(),
    "name" character varying(255),
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone default now()
);


alter table "public"."tenants" enable row level security;

CREATE UNIQUE INDEX products_pkey ON public.products USING btree (id);

CREATE UNIQUE INDEX students_email_tenant_id_key ON public.students USING btree (email, tenant_id);

CREATE UNIQUE INDEX students_pkey ON public.students USING btree (id);

CREATE UNIQUE INDEX students_products_pkey ON public.students_products USING btree (id);

CREATE UNIQUE INDEX students_products_student_id_product_id_key ON public.students_products USING btree (student_id, product_id);

CREATE UNIQUE INDEX students_sub_key ON public.students USING btree (sub);

CREATE UNIQUE INDEX tenants_pkey ON public.tenants USING btree (id);

alter table "public"."products" add constraint "products_pkey" PRIMARY KEY using index "products_pkey";

alter table "public"."students" add constraint "students_pkey" PRIMARY KEY using index "students_pkey";

alter table "public"."students_products" add constraint "students_products_pkey" PRIMARY KEY using index "students_products_pkey";

alter table "public"."tenants" add constraint "tenants_pkey" PRIMARY KEY using index "tenants_pkey";

alter table "public"."products" add constraint "products_tenant_id_fkey" FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE not valid;

alter table "public"."products" validate constraint "products_tenant_id_fkey";

alter table "public"."students" add constraint "students_email_tenant_id_key" UNIQUE using index "students_email_tenant_id_key";

alter table "public"."students" add constraint "students_sub_key" UNIQUE using index "students_sub_key";

alter table "public"."students" add constraint "tenant_id" FOREIGN KEY (tenant_id) REFERENCES tenants(id) not valid;

alter table "public"."students" validate constraint "tenant_id";

alter table "public"."students_products" add constraint "product_id" FOREIGN KEY (product_id) REFERENCES products(id) not valid;

alter table "public"."students_products" validate constraint "product_id";

alter table "public"."students_products" add constraint "student_id" FOREIGN KEY (student_id) REFERENCES students(id) not valid;

alter table "public"."students_products" validate constraint "student_id";

alter table "public"."students_products" add constraint "students_products_student_id_product_id_key" UNIQUE using index "students_products_student_id_product_id_key";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.student_sub()
 RETURNS uuid
 LANGUAGE sql
AS $function$
    select
      coalesce(
        nullif(current_setting('request.jwt.claim.sub', true), ''),
        (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
      )::uuid
      $function$
;

CREATE OR REPLACE FUNCTION public.student_tenant()
 RETURNS uuid
 LANGUAGE sql
AS $function$
    select
      coalesce(
        nullif(current_setting('request.jwt.claim.tenant_id', true), ''),
        (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'tenant_id')
      )::uuid
      $function$
;

CREATE OR REPLACE FUNCTION public.student_uid()
 RETURNS uuid
 LANGUAGE sql
AS $function$
    select
      coalesce(
        nullif(current_setting('request.jwt.claim.id', true), ''),
        (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'id')
      )::uuid
      $function$
;

grant delete on table "public"."products" to "anon";

grant insert on table "public"."products" to "anon";

grant references on table "public"."products" to "anon";

grant select on table "public"."products" to "anon";

grant trigger on table "public"."products" to "anon";

grant truncate on table "public"."products" to "anon";

grant update on table "public"."products" to "anon";

grant delete on table "public"."products" to "authenticated";

grant insert on table "public"."products" to "authenticated";

grant references on table "public"."products" to "authenticated";

grant select on table "public"."products" to "authenticated";

grant trigger on table "public"."products" to "authenticated";

grant truncate on table "public"."products" to "authenticated";

grant update on table "public"."products" to "authenticated";

grant delete on table "public"."products" to "service_role";

grant insert on table "public"."products" to "service_role";

grant references on table "public"."products" to "service_role";

grant select on table "public"."products" to "service_role";

grant trigger on table "public"."products" to "service_role";

grant truncate on table "public"."products" to "service_role";

grant update on table "public"."products" to "service_role";

grant delete on table "public"."students" to "anon";

grant insert on table "public"."students" to "anon";

grant references on table "public"."students" to "anon";

grant select on table "public"."students" to "anon";

grant trigger on table "public"."students" to "anon";

grant truncate on table "public"."students" to "anon";

grant update on table "public"."students" to "anon";

grant delete on table "public"."students" to "authenticated";

grant insert on table "public"."students" to "authenticated";

grant references on table "public"."students" to "authenticated";

grant select on table "public"."students" to "authenticated";

grant trigger on table "public"."students" to "authenticated";

grant truncate on table "public"."students" to "authenticated";

grant update on table "public"."students" to "authenticated";

grant delete on table "public"."students" to "service_role";

grant insert on table "public"."students" to "service_role";

grant references on table "public"."students" to "service_role";

grant select on table "public"."students" to "service_role";

grant trigger on table "public"."students" to "service_role";

grant truncate on table "public"."students" to "service_role";

grant update on table "public"."students" to "service_role";

grant delete on table "public"."students_products" to "anon";

grant insert on table "public"."students_products" to "anon";

grant references on table "public"."students_products" to "anon";

grant select on table "public"."students_products" to "anon";

grant trigger on table "public"."students_products" to "anon";

grant truncate on table "public"."students_products" to "anon";

grant update on table "public"."students_products" to "anon";

grant delete on table "public"."students_products" to "authenticated";

grant insert on table "public"."students_products" to "authenticated";

grant references on table "public"."students_products" to "authenticated";

grant select on table "public"."students_products" to "authenticated";

grant trigger on table "public"."students_products" to "authenticated";

grant truncate on table "public"."students_products" to "authenticated";

grant update on table "public"."students_products" to "authenticated";

grant delete on table "public"."students_products" to "service_role";

grant insert on table "public"."students_products" to "service_role";

grant references on table "public"."students_products" to "service_role";

grant select on table "public"."students_products" to "service_role";

grant trigger on table "public"."students_products" to "service_role";

grant truncate on table "public"."students_products" to "service_role";

grant update on table "public"."students_products" to "service_role";

grant delete on table "public"."tenants" to "anon";

grant insert on table "public"."tenants" to "anon";

grant references on table "public"."tenants" to "anon";

grant select on table "public"."tenants" to "anon";

grant trigger on table "public"."tenants" to "anon";

grant truncate on table "public"."tenants" to "anon";

grant update on table "public"."tenants" to "anon";

grant delete on table "public"."tenants" to "authenticated";

grant insert on table "public"."tenants" to "authenticated";

grant references on table "public"."tenants" to "authenticated";

grant select on table "public"."tenants" to "authenticated";

grant trigger on table "public"."tenants" to "authenticated";

grant truncate on table "public"."tenants" to "authenticated";

grant update on table "public"."tenants" to "authenticated";

grant delete on table "public"."tenants" to "service_role";

grant insert on table "public"."tenants" to "service_role";

grant references on table "public"."tenants" to "service_role";

grant select on table "public"."tenants" to "service_role";

grant trigger on table "public"."tenants" to "service_role";

grant truncate on table "public"."tenants" to "service_role";

grant update on table "public"."tenants" to "service_role";

create policy "Student can get only its tenant products"
on "public"."products"
as permissive
for select
to public
using ((student_tenant() = tenant_id));


create policy "Only student can get own information"
on "public"."students"
as permissive
for select
to anon
using ((student_sub() = sub));


create policy "Student can create own record"
on "public"."students"
as permissive
for insert
to public
with check ((student_sub() = sub));


create policy "Student can purchase a product"
on "public"."students_products"
as permissive
for insert
to public
with check ((student_id = student_uid()));


create policy "Allow public tenants select"
on "public"."tenants"
as permissive
for select
to public
using (true);
