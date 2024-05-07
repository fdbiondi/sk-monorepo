create table "public"."containers_lessons" (
    "id" uuid not null default gen_random_uuid(),
    "container_id" uuid not null,
    "lesson_id" uuid not null,
    "order" bigint not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone default now()
);


alter table "public"."containers_lessons" enable row level security;

CREATE UNIQUE INDEX containers_lessons_pkey ON public.containers_lessons USING btree (id);

alter table "public"."containers_lessons" add constraint "containers_lessons_pkey" PRIMARY KEY using index "containers_lessons_pkey";

alter table "public"."containers_lessons" add constraint "containers_lessons_container_id_fkey" FOREIGN KEY (container_id) REFERENCES containers(id) ON DELETE CASCADE not valid;

alter table "public"."containers_lessons" validate constraint "containers_lessons_container_id_fkey";

alter table "public"."containers_lessons" add constraint "containers_lessons_lesson_id_fkey" FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE not valid;

alter table "public"."containers_lessons" validate constraint "containers_lessons_lesson_id_fkey";

CREATE UNIQUE INDEX containers_lessons_container_id_lesson_id_key ON public.containers_lessons USING btree (container_id, lesson_id);

alter table "public"."containers_lessons" add constraint "containers_lessons_container_id_lesson_id_key" UNIQUE using index "containers_lessons_container_id_lesson_id_key";

grant delete on table "public"."containers_lessons" to "anon";

grant insert on table "public"."containers_lessons" to "anon";

grant references on table "public"."containers_lessons" to "anon";

grant select on table "public"."containers_lessons" to "anon";

grant trigger on table "public"."containers_lessons" to "anon";

grant truncate on table "public"."containers_lessons" to "anon";

grant update on table "public"."containers_lessons" to "anon";

grant delete on table "public"."containers_lessons" to "authenticated";

grant insert on table "public"."containers_lessons" to "authenticated";

grant references on table "public"."containers_lessons" to "authenticated";

grant select on table "public"."containers_lessons" to "authenticated";

grant trigger on table "public"."containers_lessons" to "authenticated";

grant truncate on table "public"."containers_lessons" to "authenticated";

grant update on table "public"."containers_lessons" to "authenticated";

grant delete on table "public"."containers_lessons" to "service_role";

grant insert on table "public"."containers_lessons" to "service_role";

grant references on table "public"."containers_lessons" to "service_role";

grant select on table "public"."containers_lessons" to "service_role";

grant trigger on table "public"."containers_lessons" to "service_role";

grant truncate on table "public"."containers_lessons" to "service_role";

grant update on table "public"."containers_lessons" to "service_role";


