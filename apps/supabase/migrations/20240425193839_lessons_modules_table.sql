create table "public"."lessons_modules" (
    "id" uuid not null default gen_random_uuid(),
    "lesson_id" uuid not null,
    "module_id" uuid not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone default now()
);


alter table "public"."lessons_modules" enable row level security;

CREATE UNIQUE INDEX lessons_modules_pkey ON public.lessons_modules USING btree (id);

alter table "public"."lessons_modules" add constraint "lessons_modules_pkey" PRIMARY KEY using index "lessons_modules_pkey";

alter table "public"."lessons_modules" add constraint "lessons_modules_lesson_id_fkey" FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE not valid;

alter table "public"."lessons_modules" validate constraint "lessons_modules_lesson_id_fkey";

alter table "public"."lessons_modules" add constraint "lessons_modules_module_id_fkey" FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE not valid;

alter table "public"."lessons_modules" validate constraint "lessons_modules_module_id_fkey";

grant delete on table "public"."lessons_modules" to "anon";

grant insert on table "public"."lessons_modules" to "anon";

grant references on table "public"."lessons_modules" to "anon";

grant select on table "public"."lessons_modules" to "anon";

grant trigger on table "public"."lessons_modules" to "anon";

grant truncate on table "public"."lessons_modules" to "anon";

grant update on table "public"."lessons_modules" to "anon";

grant delete on table "public"."lessons_modules" to "authenticated";

grant insert on table "public"."lessons_modules" to "authenticated";

grant references on table "public"."lessons_modules" to "authenticated";

grant select on table "public"."lessons_modules" to "authenticated";

grant trigger on table "public"."lessons_modules" to "authenticated";

grant truncate on table "public"."lessons_modules" to "authenticated";

grant update on table "public"."lessons_modules" to "authenticated";

grant delete on table "public"."lessons_modules" to "service_role";

grant insert on table "public"."lessons_modules" to "service_role";

grant references on table "public"."lessons_modules" to "service_role";

grant select on table "public"."lessons_modules" to "service_role";

grant trigger on table "public"."lessons_modules" to "service_role";

grant truncate on table "public"."lessons_modules" to "service_role";

grant update on table "public"."lessons_modules" to "service_role";


