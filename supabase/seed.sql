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
	('00000000-0000-0000-0000-000000000000', 'd1267193-fdcf-449f-bded-f1e650304e32', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"admin@skillstery.com","user_id":"2af46148-f571-471e-966c-1f258aaa3354","user_phone":""}}', '2024-03-12 16:34:16.012785+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ad6a0516-df97-46ab-9bd4-6b856112642e', '{"action":"login","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-18 21:21:27.255972+00', ''),
	('00000000-0000-0000-0000-000000000000', '87732a3e-e8a9-42d6-bc40-8e527621fbc0', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-18 22:21:34.471175+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fdce2f4f-3abe-4651-ae6c-7a3332adbaef', '{"action":"token_revoked","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-18 22:21:34.472078+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c7571e70-8e0b-4c76-abf3-75ea58821623', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-18 22:21:34.484678+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', '2af46148-f571-471e-966c-1f258aaa3354', 'authenticated', 'authenticated', 'admin@skillstery.com', '$2a$10$aiXMJsGNyNn66TLzUByKaerJBj4OW1FAHT.0pLxa00oU.dz7aYZdW', '2024-03-12 16:34:16.017985+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-03-18 21:21:27.256985+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-03-12 16:34:16.006558+00', '2024-03-18 22:21:34.473943+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


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

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('a59e11c8-4ad4-4e91-9487-16a2b1f2f8f3', '2af46148-f571-471e-966c-1f258aaa3354', '2024-03-18 21:21:27.257068+00', '2024-03-18 22:21:34.485375+00', NULL, 'aal1', NULL, '2024-03-18 22:21:34.485322', 'node', '192.168.65.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('a59e11c8-4ad4-4e91-9487-16a2b1f2f8f3', '2024-03-18 21:21:27.259407+00', '2024-03-18 21:21:27.259407+00', 'password', '19e8b20f-7dce-4fea-b63b-443768697b17');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 1, 'LzSWu4onSF6W24A148wm9w', '2af46148-f571-471e-966c-1f258aaa3354', true, '2024-03-18 21:21:27.258132+00', '2024-03-18 22:21:34.472422+00', NULL, 'a59e11c8-4ad4-4e91-9487-16a2b1f2f8f3'),
	('00000000-0000-0000-0000-000000000000', 2, 'H-k1YJz5KRILGPxwMVeduw', '2af46148-f571-471e-966c-1f258aaa3354', false, '2024-03-18 22:21:34.473229+00', '2024-03-18 22:21:34.473229+00', 'LzSWu4onSF6W24A148wm9w', 'a59e11c8-4ad4-4e91-9487-16a2b1f2f8f3');


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

INSERT INTO "public"."products" ("id", "name", "tenant_id", "created_at", "updated_at", "description", "external_link", "image", "ontraport_id", "short_description") VALUES
	('252b7817-b512-496b-b388-fe867fb34147', 'Product 1', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-01 15:28:54.79057', '2024-03-01 15:28:54.79057', NULL, NULL, NULL, NULL, NULL),
	('0b836d47-0156-423c-abe8-1e8dc43dc1b9', 'Product 2', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-01 15:29:01.492721', '2024-03-01 15:29:01.492721', NULL, NULL, NULL, NULL, NULL);


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."students" ("id", "first_name", "last_name", "email", "tenant_id", "created_at", "updated_at", "sub", "username") VALUES
	('4d0b7254-5fb0-47a7-918d-0b8250f55a1e', 'student', 'skillstery', 'student@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-18 21:51:04.594382', '2024-03-18 21:51:04.594382', '23dbc58f-d14a-4d29-bc64-d491514247a0', 'student@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a');


--
-- Data for Name: students_products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."students_products" ("id", "student_id", "product_id", "created_at", "updated_at") VALUES
	('712dd9ba-b7f9-41c5-8b31-ac1f665e32b6', '4d0b7254-5fb0-47a7-918d-0b8250f55a1e', '252b7817-b512-496b-b388-fe867fb34147', '2024-03-18 22:35:23.682689', '2024-03-18 22:35:23.682689');


--
-- Data for Name: support_codes; Type: TABLE DATA; Schema: public; Owner: postgres
--



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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 2, true);


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
