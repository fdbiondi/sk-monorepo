create table "public"."support_codes" (
    "id" uuid not null default gen_random_uuid(),
    "code" character varying not null,
    "student_id" uuid not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp without time zone not null default now()
);


alter table "public"."support_codes" enable row level security;

CREATE UNIQUE INDEX support_codes_code_key ON public.support_codes USING btree (code);

CREATE UNIQUE INDEX support_codes_pkey ON public.support_codes USING btree (id);

alter table "public"."support_codes" add constraint "support_codes_pkey" PRIMARY KEY using index "support_codes_pkey";

alter table "public"."support_codes" add constraint "support_codes_code_key" UNIQUE using index "support_codes_code_key";

alter table "public"."support_codes" add constraint "support_codes_student_id_fkey" FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE not valid;

alter table "public"."support_codes" validate constraint "support_codes_student_id_fkey";

grant delete on table "public"."support_codes" to "anon";

grant insert on table "public"."support_codes" to "anon";

grant references on table "public"."support_codes" to "anon";

grant select on table "public"."support_codes" to "anon";

grant trigger on table "public"."support_codes" to "anon";

grant truncate on table "public"."support_codes" to "anon";

grant update on table "public"."support_codes" to "anon";

grant delete on table "public"."support_codes" to "authenticated";

grant insert on table "public"."support_codes" to "authenticated";

grant references on table "public"."support_codes" to "authenticated";

grant select on table "public"."support_codes" to "authenticated";

grant trigger on table "public"."support_codes" to "authenticated";

grant truncate on table "public"."support_codes" to "authenticated";

grant update on table "public"."support_codes" to "authenticated";

grant delete on table "public"."support_codes" to "service_role";

grant insert on table "public"."support_codes" to "service_role";

grant references on table "public"."support_codes" to "service_role";

grant select on table "public"."support_codes" to "service_role";

grant trigger on table "public"."support_codes" to "service_role";

grant truncate on table "public"."support_codes" to "service_role";

grant update on table "public"."support_codes" to "service_role";

create policy "Student can get their own codes"
on "public"."support_codes"
as permissive
for select
to public
using ((student_id IN ( SELECT students.id
   FROM students
  WHERE (student_sub() = students.sub))));


create policy "Student can report a customer support code"
on "public"."support_codes"
as permissive
for insert
to public
with check ((student_id IN ( SELECT students.id
   FROM students
  WHERE ((student_sub() = students.sub) AND (student_tenant() = students.tenant_id)))));



