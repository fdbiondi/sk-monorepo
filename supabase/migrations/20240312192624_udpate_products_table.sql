alter table "public"."products" add column "description" text;

alter table "public"."products" add column "external_link" text;

alter table "public"."products" add column "image" character varying;

alter table "public"."products" add column "ontraport_id" character varying;

alter table "public"."products" add column "short_description" text;

alter table "public"."products" add constraint "products_image_check" CHECK ((length((image)::text) < 255)) not valid;

alter table "public"."products" validate constraint "products_image_check";

alter table "public"."products" add constraint "products_ontraport_id_check" CHECK ((length((ontraport_id)::text) < 255)) not valid;

alter table "public"."products" validate constraint "products_ontraport_id_check";


