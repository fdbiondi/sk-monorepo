create table "public"."containers_modules" (
    "id" uuid not null default gen_random_uuid(),
    "container_id" uuid not null,
    "module_id" uuid not null,
    "order" bigint not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone default now()
);


alter table "public"."containers_modules" enable row level security;

CREATE UNIQUE INDEX containers_modules_pkey ON public.containers_modules USING btree (id);

alter table "public"."containers_modules" add constraint "containers_modules_pkey" PRIMARY KEY using index "containers_modules_pkey";

alter table "public"."containers_modules" add constraint "containers_modules_container_id_fkey" FOREIGN KEY (container_id) REFERENCES containers(id) ON DELETE CASCADE not valid;

alter table "public"."containers_modules" validate constraint "containers_modules_container_id_fkey";

alter table "public"."containers_modules" add constraint "containers_modules_module_id_fkey" FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE not valid;

alter table "public"."containers_modules" validate constraint "containers_modules_module_id_fkey";

CREATE UNIQUE INDEX containers_modules_container_id_module_id_key ON public.containers_modules USING btree (container_id, module_id);

alter table "public"."containers_modules" add constraint "containers_modules_container_id_module_id_key" UNIQUE using index "containers_modules_container_id_module_id_key";

grant delete on table "public"."containers_modules" to "anon";

grant insert on table "public"."containers_modules" to "anon";

grant references on table "public"."containers_modules" to "anon";

grant select on table "public"."containers_modules" to "anon";

grant trigger on table "public"."containers_modules" to "anon";

grant truncate on table "public"."containers_modules" to "anon";

grant update on table "public"."containers_modules" to "anon";

grant delete on table "public"."containers_modules" to "authenticated";

grant insert on table "public"."containers_modules" to "authenticated";

grant references on table "public"."containers_modules" to "authenticated";

grant select on table "public"."containers_modules" to "authenticated";

grant trigger on table "public"."containers_modules" to "authenticated";

grant truncate on table "public"."containers_modules" to "authenticated";

grant update on table "public"."containers_modules" to "authenticated";

grant delete on table "public"."containers_modules" to "service_role";

grant insert on table "public"."containers_modules" to "service_role";

grant references on table "public"."containers_modules" to "service_role";

grant select on table "public"."containers_modules" to "service_role";

grant trigger on table "public"."containers_modules" to "service_role";

grant truncate on table "public"."containers_modules" to "service_role";

grant update on table "public"."containers_modules" to "service_role";


