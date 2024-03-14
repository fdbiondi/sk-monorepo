alter table "public"."students" add column "username" character varying;

CREATE UNIQUE INDEX students_username_key ON public.students USING btree (username);

alter table "public"."students" add constraint "students_username_check" CHECK ((length((username)::text) < 255)) not valid;

alter table "public"."students" validate constraint "students_username_check";

alter table "public"."students" add constraint "students_username_key" UNIQUE using index "students_username_key";


