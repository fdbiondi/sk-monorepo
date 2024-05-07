create type "public"."container_type" as enum ('pre_recorded', 'bayg');

create table "public"."containers" (
    "id" uuid not null default gen_random_uuid(),
    "product_id" uuid not null,
    "type" container_type not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone default now()
);


alter table "public"."containers" enable row level security;

CREATE UNIQUE INDEX containers_pkey ON public.containers USING btree (id);

alter table "public"."containers" add constraint "containers_pkey" PRIMARY KEY using index "containers_pkey";

alter table "public"."containers" add constraint "containers_product_id_fkey" FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE not valid;

alter table "public"."containers" validate constraint "containers_product_id_fkey";

CREATE UNIQUE INDEX containers_product_id_type_key ON public.containers USING btree (product_id, type);

alter table "public"."containers" add constraint "containers_product_id_type_key" UNIQUE using index "containers_product_id_type_key";

grant delete on table "public"."containers" to "anon";

grant insert on table "public"."containers" to "anon";

grant references on table "public"."containers" to "anon";

grant select on table "public"."containers" to "anon";

grant trigger on table "public"."containers" to "anon";

grant truncate on table "public"."containers" to "anon";

grant update on table "public"."containers" to "anon";

grant delete on table "public"."containers" to "authenticated";

grant insert on table "public"."containers" to "authenticated";

grant references on table "public"."containers" to "authenticated";

grant select on table "public"."containers" to "authenticated";

grant trigger on table "public"."containers" to "authenticated";

grant truncate on table "public"."containers" to "authenticated";

grant update on table "public"."containers" to "authenticated";

grant delete on table "public"."containers" to "service_role";

grant insert on table "public"."containers" to "service_role";

grant references on table "public"."containers" to "service_role";

grant select on table "public"."containers" to "service_role";

grant trigger on table "public"."containers" to "service_role";

grant truncate on table "public"."containers" to "service_role";

grant update on table "public"."containers" to "service_role";


