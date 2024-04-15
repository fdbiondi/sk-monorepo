CREATE TRIGGER handle_updated_at_admins BEFORE UPDATE ON public.admins FOR EACH ROW EXECUTE FUNCTION moddatetime('updated_at');

CREATE TRIGGER handle_updated_at_product_tiers BEFORE UPDATE ON public.product_tiers FOR EACH ROW EXECUTE FUNCTION moddatetime('updated_at');

CREATE TRIGGER handle_updated_at_support_codes BEFORE UPDATE ON public.support_codes FOR EACH ROW EXECUTE FUNCTION moddatetime('updated_at');

CREATE TRIGGER handle_updated_at_tenants BEFORE UPDATE ON public.tenants FOR EACH ROW EXECUTE FUNCTION moddatetime('updated_at');


