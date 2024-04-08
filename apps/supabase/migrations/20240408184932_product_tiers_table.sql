create table "public"."product_tiers" (
    "id" uuid not null default gen_random_uuid(),
    "product_id" uuid,
    "title" character varying,
    "sku" character varying,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp without time zone not null default now()
);


alter table "public"."product_tiers" enable row level security;

CREATE UNIQUE INDEX product_tiers_pkey ON public.product_tiers USING btree (id);

alter table "public"."product_tiers" add constraint "product_tiers_pkey" PRIMARY KEY using index "product_tiers_pkey";

alter table "public"."product_tiers" add constraint "product_tiers_product_id_fkey" FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE not valid;

alter table "public"."product_tiers" validate constraint "product_tiers_product_id_fkey";

grant delete on table "public"."product_tiers" to "anon";

grant insert on table "public"."product_tiers" to "anon";

grant references on table "public"."product_tiers" to "anon";

grant select on table "public"."product_tiers" to "anon";

grant trigger on table "public"."product_tiers" to "anon";

grant truncate on table "public"."product_tiers" to "anon";

grant update on table "public"."product_tiers" to "anon";

grant delete on table "public"."product_tiers" to "authenticated";

grant insert on table "public"."product_tiers" to "authenticated";

grant references on table "public"."product_tiers" to "authenticated";

grant select on table "public"."product_tiers" to "authenticated";

grant trigger on table "public"."product_tiers" to "authenticated";

grant truncate on table "public"."product_tiers" to "authenticated";

grant update on table "public"."product_tiers" to "authenticated";

grant delete on table "public"."product_tiers" to "service_role";

grant insert on table "public"."product_tiers" to "service_role";

grant references on table "public"."product_tiers" to "service_role";

grant select on table "public"."product_tiers" to "service_role";

grant trigger on table "public"."product_tiers" to "service_role";

grant truncate on table "public"."product_tiers" to "service_role";

grant update on table "public"."product_tiers" to "service_role";


