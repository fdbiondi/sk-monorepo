alter table "public"."tenants" add column "logo" character varying;

alter table "public"."tenants" add constraint "tenants_logo_check" CHECK ((length((logo)::text) < 255)) not valid;

alter table "public"."tenants" validate constraint "tenants_logo_check";


