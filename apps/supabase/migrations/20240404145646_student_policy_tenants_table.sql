drop policy "Allow public tenants select" on "public"."tenants";

create policy "Student cat get info about its tenant"
on "public"."tenants"
as permissive
for select
to public
using ((student_tenant() = id));



