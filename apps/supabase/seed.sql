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



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', 'f7f5dec1-759a-4513-ae5e-1ac1286d879f', 'authenticated', 'authenticated', 'admin_tenant2@skillstery.com', '$2a$10$eF4vSWRK0bN0KYxUfQs/gOstXqBHHO6zn.bNPIf4EJkFLPCYZi682', '2024-03-19 14:05:11.529288+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-03-19 14:07:41.2031+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-03-19 14:05:11.525674+00', '2024-03-19 14:07:41.20456+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL),
	('00000000-0000-0000-0000-000000000000', 'f9018ba1-84fd-4547-a4f9-09b44f20eea6', 'authenticated', 'authenticated', 'admin_tenant1@skillstery.com', '$2a$10$5BptoWqRvS1m5KBr7c1MT.hwCyFP3Qa5MvUReTyS1/lKHafQ9I0fW', '2024-04-15 20:56:17.061605+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-04-15 20:56:17.055276+00', '2024-04-15 20:56:17.061711+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL),
	('00000000-0000-0000-0000-000000000000', '2af46148-f571-471e-966c-1f258aaa3354', 'authenticated', 'authenticated', 'admin@skillstery.com', '$2a$10$aiXMJsGNyNn66TLzUByKaerJBj4OW1FAHT.0pLxa00oU.dz7aYZdW', '2024-03-12 16:34:16.017985+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-04-16 01:21:01.968864+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-03-12 16:34:16.006558+00', '2024-04-16 01:21:01.97142+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('2af46148-f571-471e-966c-1f258aaa3354', '2af46148-f571-471e-966c-1f258aaa3354', '{"sub": "2af46148-f571-471e-966c-1f258aaa3354", "email": "admin@skillstery.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-12 16:34:16.011988+00', '2024-03-12 16:34:16.012016+00', '2024-03-12 16:34:16.012016+00', '7c7b18ae-e79a-492a-a10c-aaa20e7e1895'),
	('f7f5dec1-759a-4513-ae5e-1ac1286d879f', 'f7f5dec1-759a-4513-ae5e-1ac1286d879f', '{"sub": "f7f5dec1-759a-4513-ae5e-1ac1286d879f", "email": "admin_tenant2@skillstery.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-19 14:05:11.527622+00', '2024-03-19 14:05:11.527661+00', '2024-03-19 14:05:11.527661+00', '43d38b80-efed-4421-afd6-96ffbf104e00'),
	('f9018ba1-84fd-4547-a4f9-09b44f20eea6', 'f9018ba1-84fd-4547-a4f9-09b44f20eea6', '{"sub": "f9018ba1-84fd-4547-a4f9-09b44f20eea6", "email": "admin_tenant1@skillstery.com", "email_verified": false, "phone_verified": false}', 'email', '2024-04-15 20:56:17.058879+00', '2024-04-15 20:56:17.058913+00', '2024-04-15 20:56:17.058913+00', '4fb412b6-0e59-4617-9f74-567db8432392');


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

INSERT INTO "public"."tenants" ("id", "name", "created_at", "updated_at", "logo", "categories_enabled") VALUES
	('e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', 'Brand 1', '2024-03-08 17:03:03.19841', '2024-03-08 17:03:03.19841', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a/logo1.jpg', false),
	('e78f08a2-8de7-4be2-bcd2-93428afa879f', 'Brand 2', '2024-03-19 13:43:46.102953', '2024-03-19 13:43:46.102953', 'e78f08a2-8de7-4be2-bcd2-93428afa879f/logo2.jpg', true);


--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."admins" ("id", "user_id", "tenant_id", "created_at", "updated_at") VALUES
	('3941fefc-a0f4-4b45-aac5-a499dd2a0bd0', '2af46148-f571-471e-966c-1f258aaa3354', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-12 16:34:40.462883', '2024-03-12 16:34:40.462883'),
	('d4405f02-513a-4948-8a80-b36b6ea90c77', 'f7f5dec1-759a-4513-ae5e-1ac1286d879f', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 14:05:28.427768', '2024-03-19 14:05:28.427768'),
	('185dc7d1-f4bb-4f06-b542-8894a73626a4', 'f9018ba1-84fd-4547-a4f9-09b44f20eea6', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 20:57:11.104034', '2024-04-15 20:57:11.104034'),
	('4b5d7213-4786-4ae7-b1e7-50212459fde8', '2af46148-f571-471e-966c-1f258aaa3354', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 20:57:23.427009', '2024-04-15 20:57:23.427009');


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."categories" ("id", "name", "order", "is_default", "tenant_id", "created_at", "updated_at", "archived_at") VALUES
	('52596cd1-46ce-42af-ac41-be77554a0d27', 'Category 1', 0, true, 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-28 16:06:52.291736+00', '2024-03-28 16:06:52.291736', NULL),
	('8b6e0615-8de0-461d-bfc9-fbadeb1ee6f2', 'Category 2', 1, true, 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 21:18:49.009199+00', '2024-04-15 21:18:49.009199', NULL),
	('c78b6b36-5844-492a-b637-4fef4a05c253', 'Category 3', 2, false, 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 21:18:49.009199+00', '2024-04-15 21:18:49.009199', NULL),
	('b95e4fef-2aca-44b8-9bda-8b3be23bc04d', 'Category 4', 3, false, 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 21:18:49.009199+00', '2024-04-15 21:18:49.009199', NULL),
	('3df922f8-9f27-41ec-baa6-2bbe1f15e214', 'Category 5', 4, false, 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 21:18:49.009199+00', '2024-04-15 21:18:49.009199', NULL);


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."products" ("id", "name", "tenant_id", "created_at", "updated_at", "description", "external_link", "image", "ontraport_id", "short_description", "category_id", "archived_at") VALUES
	('252b7817-b512-496b-b388-fe867fb34147', 'Product 1', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('0b836d47-0156-423c-abe8-1e8dc43dc1b9', 'Product 2', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('5b0c6084-2280-41b3-8b6a-ce307e9b5977', 'Product 3', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('a32a9b5c-3d62-45c0-97b9-24a0ff2ceee5', 'Product 4', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('341f8c42-b2f1-473a-90b6-4ba034481641', 'Product 5', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('a6fbc0c3-7340-40c3-ad95-110987fd8b9a', 'Product 6', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('f444464e-c4c4-4ecd-88b0-e04ecf2deb4f', 'Product 7', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('d1ab25e6-c90a-452d-a333-6c66d8ace3ae', 'Product 8', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('e3021b50-1e4c-4c1b-97b8-99a6801da74d', 'Product 9', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('733fed45-78f7-4af2-971a-180dc565eaf5', 'Product 10', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('704a89bc-ee41-4cde-8f67-cf6cdf4e226b', 'Product 11', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('5f0edc11-d144-41e8-a122-72eede813873', 'Product 12', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('02fedea7-aa5b-4460-9ec6-be0c1a8f1215', 'Product 13', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '52596cd1-46ce-42af-ac41-be77554a0d27', NULL),
	('12150483-d690-4172-808f-a9cbec807256', 'Product 14', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '8b6e0615-8de0-461d-bfc9-fbadeb1ee6f2', NULL),
	('0c5f785c-4302-446e-982b-216200ad5f1c', 'Product 15', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'c78b6b36-5844-492a-b637-4fef4a05c253', NULL),
	('a2e79a19-e2ca-4870-a0b0-9c81d7480038', 'Product 16', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'c78b6b36-5844-492a-b637-4fef4a05c253', NULL),
	('4ae6612a-ddeb-48ed-8d02-e878ad183219', 'Product 17', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'c78b6b36-5844-492a-b637-4fef4a05c253', NULL),
	('62c9d78d-7a5e-48df-b94b-582cfc820364', 'Product 18', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'c78b6b36-5844-492a-b637-4fef4a05c253', NULL),
	('d1d2ec62-0481-4efe-9c32-e1afeb391ea3', 'Product 19', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'c78b6b36-5844-492a-b637-4fef4a05c253', NULL),
	('124c056f-d1c4-4085-b1f7-1f08777e4f1b', 'Product 20', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'c78b6b36-5844-492a-b637-4fef4a05c253', NULL),
	('34ce5107-5be5-4e59-a711-19e1b7e5cceb', 'Product 21', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'b95e4fef-2aca-44b8-9bda-8b3be23bc04d', NULL),
	('9edbd6f0-0bce-4c6d-b956-2ea67a304d55', 'Product 22', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'b95e4fef-2aca-44b8-9bda-8b3be23bc04d', NULL),
	('977abd35-49c9-4e19-8c5d-a3830016310e', 'Product 23', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'b95e4fef-2aca-44b8-9bda-8b3be23bc04d', NULL),
	('1bbce973-8c8d-44b6-9b69-9173f1184c79', 'Product 24', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'b95e4fef-2aca-44b8-9bda-8b3be23bc04d', NULL),
	('e5149965-8931-4fae-88fa-d8074820dfa8', 'Product 25', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'b95e4fef-2aca-44b8-9bda-8b3be23bc04d', NULL),
	('7ecb8b54-2f21-48e2-8aaa-69d53ccaba56', 'Product 26', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'b95e4fef-2aca-44b8-9bda-8b3be23bc04d', NULL),
	('579475d6-84e4-4783-adda-c86a4ee8f15b', 'Product 27', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, 'b95e4fef-2aca-44b8-9bda-8b3be23bc04d', NULL),
	('2cbfc188-bfe1-4a63-a460-f6b638130623', 'Product 28', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL),
	('d46623ea-d81f-4b3f-a442-8d2d89184064', 'Product 29', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL),
	('737ec87a-06c2-409c-a35c-5ac965ad9421', 'Product 30', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL),
	('ff3f8cd6-3bf4-4c95-a33a-6ff1ac671d48', 'Product 31', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL),
	('9ee98704-b8ab-4667-b12f-e87ea9da87fa', 'Product 32', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL),
	('c3567df0-480b-4a4a-82d3-4f490424c816', 'Product 33', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL),
	('d7a77d2d-7143-444b-8327-6ec9e1b591ef', 'Product 34', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL),
	('990db4f7-ceac-4d25-ba90-60199cae377c', 'Product 35', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL),
	('6421162c-aa03-48f9-bd4b-78b124ba361e', 'Product 36', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL),
	('768e73ba-8518-4796-8389-5360d1158ac2', 'Product 37', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL),
	('2219ef5c-3173-418b-bd21-145e4c826029', 'Product 38', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL),
	('bf0204a4-7a97-4fb1-9cea-adbe82ba5e10', 'Product 39', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL),
	('a5eb8061-1f4b-4b37-8c16-236f80959c08', 'Product 40', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-04-15 22:23:41.798587+00', '2024-04-15 22:23:41.798587+00', NULL, NULL, NULL, NULL, NULL, '3df922f8-9f27-41ec-baa6-2bbe1f15e214', NULL);


--
-- Data for Name: product_tiers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."product_tiers" ("id", "product_id", "title", "sku", "created_at", "updated_at") VALUES
	('89851048-9512-44b4-b779-4062b5cb0b65', '252b7817-b512-496b-b388-fe867fb34147', 'P1 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('0114328f-e3f1-4d13-8f55-654ea3fe8266', '0b836d47-0156-423c-abe8-1e8dc43dc1b9', 'P2 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('a347e1cf-1549-42fc-a8c6-3ed329ca48e9', '5b0c6084-2280-41b3-8b6a-ce307e9b5977', 'P3 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('5807316b-aba3-42cd-bdce-aa4a32757838', 'a32a9b5c-3d62-45c0-97b9-24a0ff2ceee5', 'P4 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('81c40732-2b56-461d-86ce-928411f49306', '341f8c42-b2f1-473a-90b6-4ba034481641', 'P5 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('25dc0858-e2db-48bc-a254-0843b06b11f1', 'a6fbc0c3-7340-40c3-ad95-110987fd8b9a', 'P6 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('a22d3cdd-f757-46e6-9ff4-866e4ff8e42d', 'f444464e-c4c4-4ecd-88b0-e04ecf2deb4f', 'P7 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('d565c1b5-05ed-4e12-bc9e-c20ead79cd89', 'd1ab25e6-c90a-452d-a333-6c66d8ace3ae', 'P8 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('9faf2f1d-e163-4ef7-9104-520a2ba56918', 'e3021b50-1e4c-4c1b-97b8-99a6801da74d', 'P9 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('4734326e-57b7-43b3-9e49-0564b96de67c', '733fed45-78f7-4af2-971a-180dc565eaf5', 'P10 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('1f39f1e9-f9a9-4628-a3b6-cbfc7db73231', '704a89bc-ee41-4cde-8f67-cf6cdf4e226b', 'P11 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('42f41c84-4457-4849-afee-7023c68dce0f', '5f0edc11-d144-41e8-a122-72eede813873', 'P12 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('de000365-72eb-422a-85ec-dc438e3ba353', '02fedea7-aa5b-4460-9ec6-be0c1a8f1215', 'P13 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('80227538-c8d1-4edc-9f74-788ce8383426', '12150483-d690-4172-808f-a9cbec807256', 'P14 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('099cc951-02d6-4435-8f4c-23ebe3ef9552', '0c5f785c-4302-446e-982b-216200ad5f1c', 'P15 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('f44a4f02-89b8-40be-b63d-06fb3fb85463', 'a2e79a19-e2ca-4870-a0b0-9c81d7480038', 'P16 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('5f86298e-3318-4088-ab28-09ba00c75a38', '4ae6612a-ddeb-48ed-8d02-e878ad183219', 'P17 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('934f0454-d07d-4837-9d95-b2f801d4bc13', '62c9d78d-7a5e-48df-b94b-582cfc820364', 'P18 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('50d1848d-8a76-461b-afb3-f584eff73a8b', 'd1d2ec62-0481-4efe-9c32-e1afeb391ea3', 'P19 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('a11f0f32-2f1c-4d9e-8ddb-fc6e2479b768', '124c056f-d1c4-4085-b1f7-1f08777e4f1b', 'P20 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('1689f221-026b-4a95-8774-4f4c2b199695', '34ce5107-5be5-4e59-a711-19e1b7e5cceb', 'P21 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('4966597b-4683-482f-a1d9-fe843c09063e', '9edbd6f0-0bce-4c6d-b956-2ea67a304d55', 'P22 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('cd7362c4-ce19-4b23-9182-04399c445847', '977abd35-49c9-4e19-8c5d-a3830016310e', 'P23 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('843ef68d-ff8b-4a78-97f3-90eb4c332a4c', '1bbce973-8c8d-44b6-9b69-9173f1184c79', 'P24 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('c876c0cd-62ff-4e6e-9b4c-713573ae96ec', 'e5149965-8931-4fae-88fa-d8074820dfa8', 'P25 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('1621828e-26c9-4f83-95c9-414468e4ac27', '7ecb8b54-2f21-48e2-8aaa-69d53ccaba56', 'P26 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('b892ade0-4b7e-4563-8b13-6b94601f918f', '579475d6-84e4-4783-adda-c86a4ee8f15b', 'P27 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('2f6ed3c4-52b6-4ad7-b5fe-d2402d34472e', '2cbfc188-bfe1-4a63-a460-f6b638130623', 'P28 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('19a6238d-6e7c-4151-8827-6c2ce646fc37', 'd46623ea-d81f-4b3f-a442-8d2d89184064', 'P29 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('4bb006a0-7bb4-4f3d-9505-2cd7a8cfbb62', '737ec87a-06c2-409c-a35c-5ac965ad9421', 'P30 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('290e37e6-4fe7-4575-a846-83eccc37c2db', 'ff3f8cd6-3bf4-4c95-a33a-6ff1ac671d48', 'P31 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('eeac3751-ad58-4396-a9ab-552fa76561f6', '9ee98704-b8ab-4667-b12f-e87ea9da87fa', 'P32 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('a730dfe2-16c1-4a41-a51f-79c9ca99b0c2', 'c3567df0-480b-4a4a-82d3-4f490424c816', 'P33 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('abf50504-62e4-4a58-a531-344a944b4d38', 'd7a77d2d-7143-444b-8327-6ec9e1b591ef', 'P34 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('058d9e22-8b97-4f59-adba-024ea8dfd4ba', '990db4f7-ceac-4d25-ba90-60199cae377c', 'P35 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('c5a1d55e-018a-437a-a6b3-af875d999436', '6421162c-aa03-48f9-bd4b-78b124ba361e', 'P36 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('70078d44-671d-4319-a32b-b8161b1d9ee6', '768e73ba-8518-4796-8389-5360d1158ac2', 'P37 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('16364285-90a9-48b7-9096-867039e4b33e', '2219ef5c-3173-418b-bd21-145e4c826029', 'P38 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('1c552c52-d66f-4cca-92b6-8e9f0fd2dd85', 'bf0204a4-7a97-4fb1-9cea-adbe82ba5e10', 'P39 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264'),
	('ef227128-a5c8-45ed-b5d0-931a2347798b', 'a5eb8061-1f4b-4b37-8c16-236f80959c08', 'P40 Tier 1', NULL, '2024-04-15 22:51:46.97264+00', '2024-04-15 22:51:46.97264');


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."students" ("id", "first_name", "last_name", "email", "tenant_id", "created_at", "updated_at", "sub", "username", "archived_at") VALUES
	('4d0b7254-5fb0-47a7-918d-0b8250f55a1e', 'student', 'skillstery', 'student@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-18 21:51:04.594382+00', '2024-03-18 21:51:04.594382+00', '23dbc58f-d14a-4d29-bc64-d491514247a0', 'student@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', NULL),
	('478dd321-9469-40a8-8c4d-5eee51c7e63b', 'Student with 27 Products', 'Four Categories', 'test_27_prod_4_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:52:32.771207+00', '2024-03-19 13:52:32.771207+00', '080d0178-12ae-4eeb-90ef-5bb11697e931', 'test_27_prod_4_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f', NULL),
	('97d52ee5-0dbb-4034-9574-bd905e9cc822', 'Student with 6 Products in each Cat', 'Two Categories', 'test_12_prod_2_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:50:47.894623+00', '2024-03-19 13:50:47.894623+00', '568abc91-62a3-44fc-ada3-7d5a1e15bbc1', 'test_12_prod_2_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f', NULL),
	('79b126bb-c79c-4eef-8dfe-2f59fc023da8', 'Student with 7 Products in each Cat', 'Two Categories', 'test_14_prod_2_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:50:47.894623+00', '2024-03-19 13:50:47.894623+00', 'cdd98060-41ea-46a7-80e2-0f7b7682c076', 'test_14_prod_2_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f', NULL),
	('81714887-fcd8-4ecd-b675-42fb56332935', 'Student with 12 Products', 'One Categories', 'test_12_prod_1_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:49:27.310385+00', '2024-03-19 13:49:27.310385+00', 'add15b49-7e5a-4562-8e90-93094d5898e1', 'test_12_prod_1_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f', NULL),
	('60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', 'Student with 13 Products', 'One Categories', 'test_13_prod_1_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:49:27.310385+00', '2024-03-19 13:49:27.310385+00', '32aa48a9-c644-490f-b3c1-3c5052ce181a', 'test_13_prod_1_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f', NULL),
	('5aa9d10d-a230-4014-8112-a48144f1fed0', 'Student with 13 Products', 'No Categories', 'test_13_prod_off_cat@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-19 13:48:27.356977+00', '2024-03-19 13:48:27.356977+00', '711bc736-90ff-4a0a-8ebe-0ff05b017078', 'test_13_prod_off_cat@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', NULL),
	('fbcd0ad0-7d3d-4fcd-a6d0-7a82f766eb69', 'Student with 1 Products', 'No Categories', 'test_1_prod_off_cat@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-19 13:48:27.356977+00', '2024-03-19 13:48:27.356977+00', '5a43d9d4-8d05-4fdc-aea0-5031eb7970b3', 'test_1_prod_off_cat@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', NULL),
	('a4fd6a4a-0508-42ba-bf3c-b7d6c999b185', 'Student with 0 Products', 'No Categories', 'test_0_prod_off_cat@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-19 13:46:44.230437+00', '2024-03-19 13:46:44.230437+00', 'f4744843-97f4-47c1-af95-6f7c1eb7dce8', 'test_0_prod_off_cat@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', NULL),
	('cb6e6ec9-ab2d-456b-8102-7e8ff9e79e93', 'Student with 7 Products', 'No Categories', 'test_7_prod_off_cat@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-19 13:48:27.356977+00', '2024-03-19 13:48:27.356977+00', '298bd933-7c84-46ae-82ae-b7e18f8c7032', 'test_7_prod_off_cat@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', NULL),
	('6adad641-c58b-4ce1-93cf-10eb77152f2c', 'Student with 6 Products', 'No Categories', 'test_6_prod_off_cat@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-19 13:48:27.356977+00', '2024-03-19 13:48:27.356977+00', '7b1d0526-aa8f-499e-8bc8-b3d16526ea2d', 'test_6_prod_off_cat@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', NULL);


--
-- Data for Name: students_product_tiers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."students_product_tiers" ("id", "student_id", "product_tier_id", "created_at", "updated_at") VALUES
	('01186ebf-30bd-46b9-8c8b-38195fd8450e', 'fbcd0ad0-7d3d-4fcd-a6d0-7a82f766eb69', '89851048-9512-44b4-b779-4062b5cb0b65', '2024-04-16 01:06:41.544449', '2024-04-16 01:06:41.544449'),
	('28362528-81b5-446c-a036-20f24c6028f8', '5aa9d10d-a230-4014-8112-a48144f1fed0', '89851048-9512-44b4-b779-4062b5cb0b65', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('936d47e0-6471-4b21-bd44-e698d273e202', '5aa9d10d-a230-4014-8112-a48144f1fed0', '0114328f-e3f1-4d13-8f55-654ea3fe8266', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('b4c9c138-d7ec-41d1-b4be-66a9424494a2', '5aa9d10d-a230-4014-8112-a48144f1fed0', 'a347e1cf-1549-42fc-a8c6-3ed329ca48e9', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('6471603f-bac3-4e6e-b22c-bbb0433a9467', '5aa9d10d-a230-4014-8112-a48144f1fed0', '5807316b-aba3-42cd-bdce-aa4a32757838', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('f8ea50e1-2219-4530-98ef-1390c2ee9f6a', '5aa9d10d-a230-4014-8112-a48144f1fed0', '81c40732-2b56-461d-86ce-928411f49306', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('9f49d1e9-bf4e-4bcc-9eef-4528c3ff4b29', '5aa9d10d-a230-4014-8112-a48144f1fed0', '25dc0858-e2db-48bc-a254-0843b06b11f1', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('c0afe57c-e268-4e7e-a030-d4ec7630677c', '5aa9d10d-a230-4014-8112-a48144f1fed0', 'a22d3cdd-f757-46e6-9ff4-866e4ff8e42d', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('b10648b2-3f00-4e0c-954e-d67c6a8cf0cf', '5aa9d10d-a230-4014-8112-a48144f1fed0', 'd565c1b5-05ed-4e12-bc9e-c20ead79cd89', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('1656ee5b-4732-436a-b040-7fb842558269', '5aa9d10d-a230-4014-8112-a48144f1fed0', '9faf2f1d-e163-4ef7-9104-520a2ba56918', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('933fa28d-1c8c-46b0-85d7-75df68a5713a', '5aa9d10d-a230-4014-8112-a48144f1fed0', '4734326e-57b7-43b3-9e49-0564b96de67c', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('5917a063-35de-47cf-862f-2e42b084aaeb', '5aa9d10d-a230-4014-8112-a48144f1fed0', '1f39f1e9-f9a9-4628-a3b6-cbfc7db73231', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('3bea362a-4817-44b0-ac1f-b92c0ffa84d3', '5aa9d10d-a230-4014-8112-a48144f1fed0', '42f41c84-4457-4849-afee-7023c68dce0f', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('c88714a5-e97d-41bf-97ba-46e4045704d1', '5aa9d10d-a230-4014-8112-a48144f1fed0', 'de000365-72eb-422a-85ec-dc438e3ba353', '2024-04-16 01:09:32.363065', '2024-04-16 01:09:32.363065'),
	('e14d2f08-5388-4689-9af5-aa32127fca75', '6adad641-c58b-4ce1-93cf-10eb77152f2c', '89851048-9512-44b4-b779-4062b5cb0b65', '2024-04-16 01:09:47.31893', '2024-04-16 01:09:47.31893'),
	('a092ac08-58ba-4549-bcf4-82e2847da8a0', '6adad641-c58b-4ce1-93cf-10eb77152f2c', '0114328f-e3f1-4d13-8f55-654ea3fe8266', '2024-04-16 01:09:47.31893', '2024-04-16 01:09:47.31893'),
	('90f5ac74-35a9-45e7-9954-9236e016d650', '6adad641-c58b-4ce1-93cf-10eb77152f2c', 'a347e1cf-1549-42fc-a8c6-3ed329ca48e9', '2024-04-16 01:09:47.31893', '2024-04-16 01:09:47.31893'),
	('dd8944fe-a896-4171-8399-ac5b3438b1ee', '6adad641-c58b-4ce1-93cf-10eb77152f2c', '5807316b-aba3-42cd-bdce-aa4a32757838', '2024-04-16 01:09:47.31893', '2024-04-16 01:09:47.31893'),
	('4a289447-9610-4603-bb4c-19205bfac936', '6adad641-c58b-4ce1-93cf-10eb77152f2c', '81c40732-2b56-461d-86ce-928411f49306', '2024-04-16 01:09:47.31893', '2024-04-16 01:09:47.31893'),
	('9756f29f-a889-40cc-adc4-56c8b41a624a', '6adad641-c58b-4ce1-93cf-10eb77152f2c', '25dc0858-e2db-48bc-a254-0843b06b11f1', '2024-04-16 01:09:47.31893', '2024-04-16 01:09:47.31893'),
	('fef5675d-4036-4ecb-a90d-386210dcff81', 'cb6e6ec9-ab2d-456b-8102-7e8ff9e79e93', '89851048-9512-44b4-b779-4062b5cb0b65', '2024-04-16 01:10:04.308666', '2024-04-16 01:10:04.308666'),
	('948ee58e-5ffc-438a-9b69-e51fc5e44856', 'cb6e6ec9-ab2d-456b-8102-7e8ff9e79e93', '0114328f-e3f1-4d13-8f55-654ea3fe8266', '2024-04-16 01:10:04.308666', '2024-04-16 01:10:04.308666'),
	('e8a7c1ef-9ca3-4516-9de7-be02a1a51cac', 'cb6e6ec9-ab2d-456b-8102-7e8ff9e79e93', 'a347e1cf-1549-42fc-a8c6-3ed329ca48e9', '2024-04-16 01:10:04.308666', '2024-04-16 01:10:04.308666'),
	('3628c4d8-ed82-4f01-8065-0a38d0c55f61', 'cb6e6ec9-ab2d-456b-8102-7e8ff9e79e93', '5807316b-aba3-42cd-bdce-aa4a32757838', '2024-04-16 01:10:04.308666', '2024-04-16 01:10:04.308666'),
	('3df89eb7-c7f1-4de3-b36f-78851207acc0', 'cb6e6ec9-ab2d-456b-8102-7e8ff9e79e93', '81c40732-2b56-461d-86ce-928411f49306', '2024-04-16 01:10:04.308666', '2024-04-16 01:10:04.308666'),
	('098e66e0-7fa9-494c-b88a-83a0cd1e91b0', 'cb6e6ec9-ab2d-456b-8102-7e8ff9e79e93', '25dc0858-e2db-48bc-a254-0843b06b11f1', '2024-04-16 01:10:04.308666', '2024-04-16 01:10:04.308666'),
	('6207b294-eb62-4783-90d1-1737aedeccc8', 'cb6e6ec9-ab2d-456b-8102-7e8ff9e79e93', 'a22d3cdd-f757-46e6-9ff4-866e4ff8e42d', '2024-04-16 01:10:04.308666', '2024-04-16 01:10:04.308666'),
	('3fbe5dee-31b7-4bfe-91ff-d54cbafbbc4d', '81714887-fcd8-4ecd-b675-42fb56332935', 'ef227128-a5c8-45ed-b5d0-931a2347798b', '2024-04-16 01:11:46.084402', '2024-04-16 01:11:46.084402'),
	('b68a0666-93e1-4bc2-843e-cd0a31b15949', '81714887-fcd8-4ecd-b675-42fb56332935', '1c552c52-d66f-4cca-92b6-8e9f0fd2dd85', '2024-04-16 01:11:46.084402', '2024-04-16 01:11:46.084402'),
	('0bc63088-efcd-4987-8176-708af85774dd', '81714887-fcd8-4ecd-b675-42fb56332935', '16364285-90a9-48b7-9096-867039e4b33e', '2024-04-16 01:11:46.084402', '2024-04-16 01:11:46.084402'),
	('afeff3bd-c9c8-41ab-b6a2-7adb2680ccc4', '81714887-fcd8-4ecd-b675-42fb56332935', '70078d44-671d-4319-a32b-b8161b1d9ee6', '2024-04-16 01:11:46.084402', '2024-04-16 01:11:46.084402'),
	('fdb679cc-e807-42b3-b210-be4644e156e4', '81714887-fcd8-4ecd-b675-42fb56332935', 'c5a1d55e-018a-437a-a6b3-af875d999436', '2024-04-16 01:11:46.084402', '2024-04-16 01:11:46.084402'),
	('feff2fbe-4ae6-416f-8be8-99c929c634b3', '81714887-fcd8-4ecd-b675-42fb56332935', '058d9e22-8b97-4f59-adba-024ea8dfd4ba', '2024-04-16 01:11:46.084402', '2024-04-16 01:11:46.084402'),
	('1cf71207-5ef6-483c-851e-d41a9f4c29b3', '81714887-fcd8-4ecd-b675-42fb56332935', 'abf50504-62e4-4a58-a531-344a944b4d38', '2024-04-16 01:11:46.084402', '2024-04-16 01:11:46.084402'),
	('1ed2b071-da75-41f3-9e02-aae03540c9f5', '81714887-fcd8-4ecd-b675-42fb56332935', 'a730dfe2-16c1-4a41-a51f-79c9ca99b0c2', '2024-04-16 01:11:46.084402', '2024-04-16 01:11:46.084402'),
	('62935d74-bad2-4ef0-897b-c7fa0c325360', '81714887-fcd8-4ecd-b675-42fb56332935', 'eeac3751-ad58-4396-a9ab-552fa76561f6', '2024-04-16 01:11:46.084402', '2024-04-16 01:11:46.084402'),
	('5eecb40d-88d2-429a-85a6-8b7bb0b7b432', '81714887-fcd8-4ecd-b675-42fb56332935', '290e37e6-4fe7-4575-a846-83eccc37c2db', '2024-04-16 01:11:46.084402', '2024-04-16 01:11:46.084402'),
	('e5ac12bc-e63f-4eb6-b79a-318807e4e1a2', '81714887-fcd8-4ecd-b675-42fb56332935', '4bb006a0-7bb4-4f3d-9505-2cd7a8cfbb62', '2024-04-16 01:11:46.084402', '2024-04-16 01:11:46.084402'),
	('6d3d1eba-13b2-4a92-9320-22cd19a34eec', '81714887-fcd8-4ecd-b675-42fb56332935', '19a6238d-6e7c-4151-8827-6c2ce646fc37', '2024-04-16 01:11:46.084402', '2024-04-16 01:11:46.084402'),
	('4f834b42-8e2c-49e6-b8a2-62568a972bfc', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', 'ef227128-a5c8-45ed-b5d0-931a2347798b', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('1daf26e2-2bed-4224-a3f1-be7060082058', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', '1c552c52-d66f-4cca-92b6-8e9f0fd2dd85', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('1d9404ab-8db4-46ba-af43-7d7b5e22a47e', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', '2f6ed3c4-52b6-4ad7-b5fe-d2402d34472e', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('6e442d72-7fab-45df-8da2-03216a3ded8d', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', '19a6238d-6e7c-4151-8827-6c2ce646fc37', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('26e6d3b8-94dc-4813-9b12-9c60be0a4833', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', '4bb006a0-7bb4-4f3d-9505-2cd7a8cfbb62', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('36acdf7a-ec28-4f87-b3f8-c24be875476e', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', '290e37e6-4fe7-4575-a846-83eccc37c2db', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('6c7b2256-4813-44ad-a2c7-12764600e44e', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', 'eeac3751-ad58-4396-a9ab-552fa76561f6', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('872cc52d-c4f5-4c60-a17b-efd32c6e339b', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', 'a730dfe2-16c1-4a41-a51f-79c9ca99b0c2', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('2ab0972a-e01f-48d1-9dae-979e1abcd751', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', 'abf50504-62e4-4a58-a531-344a944b4d38', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('6bd09a1e-c5a0-4060-ae9b-00eb4e312318', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', '058d9e22-8b97-4f59-adba-024ea8dfd4ba', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('9dc22d49-a1ce-443d-a2f9-29ec63a5148b', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', 'c5a1d55e-018a-437a-a6b3-af875d999436', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('4667e665-e961-4eac-80f9-d5114a1d5b48', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', '70078d44-671d-4319-a32b-b8161b1d9ee6', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('e6944cf6-3e02-43e1-bd48-a035086b9e87', '60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', '16364285-90a9-48b7-9096-867039e4b33e', '2024-04-16 01:12:16.514046', '2024-04-16 01:12:16.514046'),
	('8c708fd1-7163-48f0-8ca4-c2545a5d9f9c', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', '1689f221-026b-4a95-8774-4f4c2b199695', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('e102555b-43a0-45e6-b999-6f8bd1429a24', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', '4966597b-4683-482f-a1d9-fe843c09063e', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('0819f637-6e88-4bc9-b7d5-8d9e732f0c5b', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', 'cd7362c4-ce19-4b23-9182-04399c445847', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('6940c7c0-e47d-4c86-a99d-a0ef8b37b91a', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', '843ef68d-ff8b-4a78-97f3-90eb4c332a4c', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('705ae7a8-bb6f-413c-b2b1-fc8d13c00245', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', 'c876c0cd-62ff-4e6e-9b4c-713573ae96ec', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('499bf19f-cd32-41a3-956c-6919ee4a310b', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', '1621828e-26c9-4f83-95c9-414468e4ac27', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('5d7baf9f-a10a-4fb3-ae21-d7cb1ceb5693', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', 'b892ade0-4b7e-4563-8b13-6b94601f918f', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('71ca4d29-d871-4852-bcf7-2d0abcd8acf1', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', '2f6ed3c4-52b6-4ad7-b5fe-d2402d34472e', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('b0f835f2-b964-4340-9212-a14db819f745', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', '19a6238d-6e7c-4151-8827-6c2ce646fc37', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('7368170a-b5f3-4c51-9f0b-032d6c54134f', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', '4bb006a0-7bb4-4f3d-9505-2cd7a8cfbb62', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('aafe18f2-5d9b-44a1-8b07-557143e7c2db', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', '290e37e6-4fe7-4575-a846-83eccc37c2db', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('420fd63f-8905-486f-bfe8-74742e2b3f2a', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', 'eeac3751-ad58-4396-a9ab-552fa76561f6', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('10544ad4-3d47-4863-9aaa-5765996afebe', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', 'a730dfe2-16c1-4a41-a51f-79c9ca99b0c2', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('80da8a63-8c4d-4247-80b5-033059da91d7', '79b126bb-c79c-4eef-8dfe-2f59fc023da8', 'abf50504-62e4-4a58-a531-344a944b4d38', '2024-04-16 01:12:58.937198', '2024-04-16 01:12:58.937198'),
	('cf43a31c-e151-4341-babb-d5164152bdc3', '97d52ee5-0dbb-4034-9574-bd905e9cc822', '099cc951-02d6-4435-8f4c-23ebe3ef9552', '2024-04-16 01:13:27.924795', '2024-04-16 01:13:27.924795'),
	('68f646c1-d618-4dd8-91b8-14e825b61f24', '97d52ee5-0dbb-4034-9574-bd905e9cc822', 'f44a4f02-89b8-40be-b63d-06fb3fb85463', '2024-04-16 01:13:27.924795', '2024-04-16 01:13:27.924795'),
	('84e6dba4-62a4-412a-ba9f-40744f2dfde1', '97d52ee5-0dbb-4034-9574-bd905e9cc822', '5f86298e-3318-4088-ab28-09ba00c75a38', '2024-04-16 01:13:27.924795', '2024-04-16 01:13:27.924795'),
	('aba7b827-e9ff-4efa-b706-c1dfface277d', '97d52ee5-0dbb-4034-9574-bd905e9cc822', '934f0454-d07d-4837-9d95-b2f801d4bc13', '2024-04-16 01:13:27.924795', '2024-04-16 01:13:27.924795'),
	('c0b88423-e24f-4ec4-b233-e2b736de8f1f', '97d52ee5-0dbb-4034-9574-bd905e9cc822', '50d1848d-8a76-461b-afb3-f584eff73a8b', '2024-04-16 01:13:27.924795', '2024-04-16 01:13:27.924795'),
	('d6c1fd2e-2b2b-4c2f-bafb-5259b7666a37', '97d52ee5-0dbb-4034-9574-bd905e9cc822', 'a11f0f32-2f1c-4d9e-8ddb-fc6e2479b768', '2024-04-16 01:13:27.924795', '2024-04-16 01:13:27.924795'),
	('08834271-52a8-4761-abaf-7586630fadc4', '97d52ee5-0dbb-4034-9574-bd905e9cc822', '1689f221-026b-4a95-8774-4f4c2b199695', '2024-04-16 01:13:27.924795', '2024-04-16 01:13:27.924795'),
	('813918ea-2f3a-4bb6-8bde-2934348726e6', '97d52ee5-0dbb-4034-9574-bd905e9cc822', '4966597b-4683-482f-a1d9-fe843c09063e', '2024-04-16 01:13:27.924795', '2024-04-16 01:13:27.924795'),
	('3344184d-37a9-4a2f-9ba1-95d85c60798c', '97d52ee5-0dbb-4034-9574-bd905e9cc822', 'cd7362c4-ce19-4b23-9182-04399c445847', '2024-04-16 01:13:27.924795', '2024-04-16 01:13:27.924795'),
	('869430ea-178a-4b0f-a9d3-bb5d913b8d3b', '97d52ee5-0dbb-4034-9574-bd905e9cc822', '843ef68d-ff8b-4a78-97f3-90eb4c332a4c', '2024-04-16 01:13:27.924795', '2024-04-16 01:13:27.924795'),
	('30d9ffb3-e88e-48c2-912f-3171502bd33a', '97d52ee5-0dbb-4034-9574-bd905e9cc822', 'c876c0cd-62ff-4e6e-9b4c-713573ae96ec', '2024-04-16 01:13:27.924795', '2024-04-16 01:13:27.924795'),
	('ba88e8cc-7030-4b0a-a1bd-bb4f64b7be53', '97d52ee5-0dbb-4034-9574-bd905e9cc822', '1621828e-26c9-4f83-95c9-414468e4ac27', '2024-04-16 01:13:27.924795', '2024-04-16 01:13:27.924795'),
	('1a26c1be-2f87-4a37-80ad-5185ff941f21', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '80227538-c8d1-4edc-9f74-788ce8383426', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('ab0eb79d-b6ba-4c4f-8b54-cfb39bdb9aa4', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '099cc951-02d6-4435-8f4c-23ebe3ef9552', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('0a68d579-02c2-41f8-be5c-5ed76f735245', '478dd321-9469-40a8-8c4d-5eee51c7e63b', 'f44a4f02-89b8-40be-b63d-06fb3fb85463', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('5906bd9a-92ad-4e90-9247-926807f126d9', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '5f86298e-3318-4088-ab28-09ba00c75a38', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('c2c1f5e8-5b58-4045-918f-5b81617fa905', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '934f0454-d07d-4837-9d95-b2f801d4bc13', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('bef729b4-ecb8-4db2-854b-46c9744a451c', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '50d1848d-8a76-461b-afb3-f584eff73a8b', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('308ef4f8-f6c5-4d4a-9393-bad338d70933', '478dd321-9469-40a8-8c4d-5eee51c7e63b', 'a11f0f32-2f1c-4d9e-8ddb-fc6e2479b768', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('8c409c45-6930-4b6c-88ed-fc9e2235ce31', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '1689f221-026b-4a95-8774-4f4c2b199695', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('b6f4f6b2-fb2b-4e57-9b2d-86fe8af907d9', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '4966597b-4683-482f-a1d9-fe843c09063e', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('b45ab2a9-089c-407d-8875-732c8a4a87dd', '478dd321-9469-40a8-8c4d-5eee51c7e63b', 'cd7362c4-ce19-4b23-9182-04399c445847', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('931d3328-9559-4a53-8913-fbfb360b5f22', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '843ef68d-ff8b-4a78-97f3-90eb4c332a4c', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('11a941b0-0989-4c4b-a2cb-f4689578f03e', '478dd321-9469-40a8-8c4d-5eee51c7e63b', 'c876c0cd-62ff-4e6e-9b4c-713573ae96ec', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('e2df8c9f-4eb4-4c1b-a9f8-98d6f368b92e', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '1621828e-26c9-4f83-95c9-414468e4ac27', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('d9075417-754e-498b-b86c-7492878ed8a2', '478dd321-9469-40a8-8c4d-5eee51c7e63b', 'b892ade0-4b7e-4563-8b13-6b94601f918f', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('27ee5b90-52bb-4bb4-bf0b-972c6fd1e324', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '2f6ed3c4-52b6-4ad7-b5fe-d2402d34472e', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('288e9823-4222-44dd-be59-31918c460156', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '19a6238d-6e7c-4151-8827-6c2ce646fc37', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('3cb12763-076f-4af5-a889-5d4dce7bd863', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '4bb006a0-7bb4-4f3d-9505-2cd7a8cfbb62', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('a1f177da-d5eb-438a-be54-273758c0db98', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '290e37e6-4fe7-4575-a846-83eccc37c2db', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('fd13d4ca-c1b1-448f-8748-fc9aa8f4f98b', '478dd321-9469-40a8-8c4d-5eee51c7e63b', 'eeac3751-ad58-4396-a9ab-552fa76561f6', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('3eb5e1d7-215d-4463-9b9c-2cf7acb5c6f8', '478dd321-9469-40a8-8c4d-5eee51c7e63b', 'a730dfe2-16c1-4a41-a51f-79c9ca99b0c2', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('5462ac6b-f90d-40ba-8f64-6f7881d4e1da', '478dd321-9469-40a8-8c4d-5eee51c7e63b', 'abf50504-62e4-4a58-a531-344a944b4d38', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('a79f3fc5-6897-42cc-9c24-bb8bc08fa4c3', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '058d9e22-8b97-4f59-adba-024ea8dfd4ba', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('792c89f5-a135-427a-a7b1-733c3f5d5251', '478dd321-9469-40a8-8c4d-5eee51c7e63b', 'c5a1d55e-018a-437a-a6b3-af875d999436', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('f4b3d4b8-a5ca-4583-9bed-a31f911f803c', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '70078d44-671d-4319-a32b-b8161b1d9ee6', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('198cdf22-8413-4c6c-8720-d6bb55cf69f0', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '16364285-90a9-48b7-9096-867039e4b33e', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('6e257651-135b-4b52-8630-8945b43dfa39', '478dd321-9469-40a8-8c4d-5eee51c7e63b', '1c552c52-d66f-4cca-92b6-8e9f0fd2dd85', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046'),
	('7f574554-6d0d-4a60-a3ac-7f27c3e43b4e', '478dd321-9469-40a8-8c4d-5eee51c7e63b', 'ef227128-a5c8-45ed-b5d0-931a2347798b', '2024-04-16 01:14:03.439046', '2024-04-16 01:14:03.439046');


--
-- Data for Name: support_codes; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('products', 'products', NULL, '2024-03-19 21:37:26.739288+00', '2024-03-19 21:37:26.739288+00', false, false, NULL, NULL, NULL),
	('tenants', 'tenants', NULL, '2024-03-19 21:37:53.940525+00', '2024-03-19 21:37:53.940525+00', false, false, NULL, NULL, NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id") VALUES
	('ed5198b0-8613-432d-928b-e3720e43eeb1', 'tenants', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a/logo1.jpg', NULL, '2024-03-23 16:06:38.546215+00', '2024-03-23 16:06:38.546215+00', '2024-03-23 16:06:38.546215+00', '{"eTag": "\"6852ab149b228739e4de79767ed860c5\"", "size": 240571, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-03-23T16:06:38.541Z", "contentLength": 240571, "httpStatusCode": 200}', '2c7647f3-a183-477d-8461-66cf81f385bf', NULL),
	('985b75f8-14a7-494f-a3fc-06486037e9b7', 'tenants', 'e78f08a2-8de7-4be2-bcd2-93428afa879f/logo2.jpg', NULL, '2024-03-23 16:07:45.902819+00', '2024-03-23 16:07:45.902819+00', '2024-03-23 16:07:45.902819+00', '{"eTag": "\"2e6a7dd476e8d453a6d01097587fd2eb\"", "size": 253201, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-03-23T16:07:45.898Z", "contentLength": 253201, "httpStatusCode": 200}', '3e4d0450-6bc8-41f2-ac12-2d49b26f1850', NULL);


--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--



--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--



--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- PostgreSQL database dump complete
--

RESET ALL;
