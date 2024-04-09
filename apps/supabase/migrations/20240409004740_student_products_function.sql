set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_student_products()
 RETURNS TABLE(id uuid, name character varying, image character varying, category_id uuid, category_name character varying)
 LANGUAGE plpgsql
AS $function$
  BEGIN
    return query
    select
      products.id,
      products.name,
      products.image,
      categories.id as category_id,
      categories.name as category_name
    from students_product_tiers
    inner join product_tiers on students_product_tiers.product_tier_id = product_tiers.id
    inner join products on product_tiers.product_id = products.id
    left join categories on products.category_id= categories.id;
  END;
$function$
;


