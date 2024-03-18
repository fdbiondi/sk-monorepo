SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.5 (Ubuntu 15.5-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'd1267193-fdcf-449f-bded-f1e650304e32', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"admin@skillstery.com","user_id":"2af46148-f571-471e-966c-1f258aaa3354","user_phone":""}}', '2024-03-12 16:34:16.012785+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', '2af46148-f571-471e-966c-1f258aaa3354', 'authenticated', 'authenticated', 'admin@skillstery.com', '$2a$10$aiXMJsGNyNn66TLzUByKaerJBj4OW1FAHT.0pLxa00oU.dz7aYZdW', '2024-03-12 16:34:16.017985+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-03-12 16:34:16.006558+00', '2024-03-12 16:34:16.018078+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('2af46148-f571-471e-966c-1f258aaa3354', '2af46148-f571-471e-966c-1f258aaa3354', '{"sub": "2af46148-f571-471e-966c-1f258aaa3354", "email": "admin@skillstery.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-12 16:34:16.011988+00', '2024-03-12 16:34:16.012016+00', '2024-03-12 16:34:16.012016+00', '7c7b18ae-e79a-492a-a10c-aaa20e7e1895');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenants" ("id", "name", "created_at", "updated_at") VALUES
	('e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', 'Brand 1', '2024-03-08 17:03:03.19841', '2024-03-08 17:03:03.19841');


--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."admins" ("id", "user_id", "tenant_id", "created_at", "updated_at") VALUES
	('3941fefc-a0f4-4b45-aac5-a499dd2a0bd0', '2af46148-f571-471e-966c-1f258aaa3354', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-12 16:34:40.462883', '2024-03-12 16:34:40.462883');


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."products" ("id", "name", "tenant_id", "created_at", "updated_at") VALUES
	('252b7817-b512-496b-b388-fe867fb34147', 'Product 1', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-01 15:28:54.79057', '2024-03-01 15:28:54.79057'),
	('0b836d47-0156-423c-abe8-1e8dc43dc1b9', 'Product 2', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-01 15:29:01.492721', '2024-03-01 15:29:01.492721');


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."students" ("id", "first_name", "last_name", "email", "tenant_id", "created_at", "updated_at", "sub") VALUES
	('59928d0b-5e1a-4ca9-a0fa-6e38f534791f', 'student', 'skillstery', 'student@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-01 15:30:37.703593', '2024-03-01 15:30:37.703593', 'c891a3a0-e001-7019-7bc1-68748a312e48');


--
-- Data for Name: students_products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."students_products" ("id", "student_id", "product_id", "created_at", "updated_at") VALUES
	('fe28adb2-b5d2-4eea-b31d-6b57baf148ec', '59928d0b-5e1a-4ca9-a0fa-6e38f534791f', '252b7817-b512-496b-b388-fe867fb34147', '2024-03-01 15:30:48.878929', '2024-03-01 15:30:48.878929');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
