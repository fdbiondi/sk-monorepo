create policy "Students can only get their products"
on "public"."students_products"
as permissive
for select
to public
using ((student_id IN ( SELECT students.id
   FROM students
  WHERE ((students.sub = student_sub()) AND (student_tenant() = students.tenant_id)))));



