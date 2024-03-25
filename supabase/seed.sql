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
	('00000000-0000-0000-0000-000000000000', '2af46148-f571-471e-966c-1f258aaa3354', 'authenticated', 'authenticated', 'admin@skillstery.com', '$2a$10$aiXMJsGNyNn66TLzUByKaerJBj4OW1FAHT.0pLxa00oU.dz7aYZdW', '2024-03-12 16:34:16.017985+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-03-25 16:43:10.912825+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-03-12 16:34:16.006558+00', '2024-03-25 16:43:10.914234+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL),
	('00000000-0000-0000-0000-000000000000', 'f7f5dec1-759a-4513-ae5e-1ac1286d879f', 'authenticated', 'authenticated', 'admin2@skillstery.com', '$2a$10$eF4vSWRK0bN0KYxUfQs/gOstXqBHHO6zn.bNPIf4EJkFLPCYZi682', '2024-03-19 14:05:11.529288+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-03-19 14:07:41.2031+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-03-19 14:05:11.525674+00', '2024-03-19 14:07:41.20456+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('2af46148-f571-471e-966c-1f258aaa3354', '2af46148-f571-471e-966c-1f258aaa3354', '{"sub": "2af46148-f571-471e-966c-1f258aaa3354", "email": "admin@skillstery.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-12 16:34:16.011988+00', '2024-03-12 16:34:16.012016+00', '2024-03-12 16:34:16.012016+00', '7c7b18ae-e79a-492a-a10c-aaa20e7e1895'),
	('f7f5dec1-759a-4513-ae5e-1ac1286d879f', 'f7f5dec1-759a-4513-ae5e-1ac1286d879f', '{"sub": "f7f5dec1-759a-4513-ae5e-1ac1286d879f", "email": "admin2@skillstery.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-19 14:05:11.527622+00', '2024-03-19 14:05:11.527661+00', '2024-03-19 14:05:11.527661+00', '43d38b80-efed-4421-afd6-96ffbf104e00');


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
	('e78f08a2-8de7-4be2-bcd2-93428afa879f', 'Brand 2', '2024-03-19 13:43:46.102953', '2024-03-19 13:43:46.102953', 'e78f08a2-8de7-4be2-bcd2-93428afa879f/logo2.jpg', false);


--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."admins" ("id", "user_id", "tenant_id", "created_at", "updated_at") VALUES
	('3941fefc-a0f4-4b45-aac5-a499dd2a0bd0', '2af46148-f571-471e-966c-1f258aaa3354', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-12 16:34:40.462883', '2024-03-12 16:34:40.462883'),
	('d4405f02-513a-4948-8a80-b36b6ea90c77', 'f7f5dec1-759a-4513-ae5e-1ac1286d879f', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 14:05:28.427768', '2024-03-19 14:05:28.427768');


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."products" ("id", "name", "tenant_id", "created_at", "updated_at", "description", "external_link", "image", "ontraport_id", "short_description") VALUES
	('252b7817-b512-496b-b388-fe867fb34147', 'Product 1', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-01 15:28:54.79057', '2024-03-01 15:28:54.79057', NULL, NULL, '252b7817-b512-496b-b388-fe867fb34147/image_1711209509276.jpg', NULL, NULL),
	('0b836d47-0156-423c-abe8-1e8dc43dc1b9', 'Product 2', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-01 15:29:01.492721', '2024-03-01 15:29:01.492721', NULL, NULL, '0b836d47-0156-423c-abe8-1e8dc43dc1b9/image_1711209532256.jpg', NULL, NULL);


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."students" ("id", "first_name", "last_name", "email", "tenant_id", "created_at", "updated_at", "sub", "username") VALUES
	('4d0b7254-5fb0-47a7-918d-0b8250f55a1e', 'student', 'skillstery', 'student@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-18 21:51:04.594382', '2024-03-18 21:51:04.594382', '23dbc58f-d14a-4d29-bc64-d491514247a0', 'student@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a'),
	('478dd321-9469-40a8-8c4d-5eee51c7e63b', 'Student with 27 Products', 'Four Categories', 'test_27_prod_4_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:52:32.771207', '2024-03-19 13:52:32.771207', '080d0178-12ae-4eeb-90ef-5bb11697e931', 'test_27_prod_4_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('97d52ee5-0dbb-4034-9574-bd905e9cc822', 'Student with 6 Products in each Cat', 'Two Categories', 'test_12_prod_2_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:50:47.894623', '2024-03-19 13:50:47.894623', '568abc91-62a3-44fc-ada3-7d5a1e15bbc1', 'test_12_prod_2_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('79b126bb-c79c-4eef-8dfe-2f59fc023da8', 'Student with 7 Products in each Cat', 'Two Categories', 'test_14_prod_2_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:50:47.894623', '2024-03-19 13:50:47.894623', 'cdd98060-41ea-46a7-80e2-0f7b7682c076', 'test_14_prod_2_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('81714887-fcd8-4ecd-b675-42fb56332935', 'Student with 12 Products', 'One Categories', 'test_12_prod_1_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:49:27.310385', '2024-03-19 13:49:27.310385', 'add15b49-7e5a-4562-8e90-93094d5898e1', 'test_12_prod_1_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', 'Student with 13 Products', 'One Categories', 'test_13_prod_1_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:49:27.310385', '2024-03-19 13:49:27.310385', '32aa48a9-c644-490f-b3c1-3c5052ce181a', 'test_13_prod_1_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('5aa9d10d-a230-4014-8112-a48144f1fed0', 'Student with 13 Products', 'No Categories', 'test_13_prod_off_cat@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-19 13:48:27.356977', '2024-03-19 13:48:27.356977', '711bc736-90ff-4a0a-8ebe-0ff05b017078', 'test_13_prod_off_cat@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a'),
	('fbcd0ad0-7d3d-4fcd-a6d0-7a82f766eb69', 'Student with 1 Products', 'No Categories', 'test_1_prod_off_cat@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-19 13:48:27.356977', '2024-03-19 13:48:27.356977', '5a43d9d4-8d05-4fdc-aea0-5031eb7970b3', 'test_1_prod_off_cat@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a'),
	('a4fd6a4a-0508-42ba-bf3c-b7d6c999b185', 'Student with 0 Products', 'No Categories', 'test_0_prod_off_cat@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-19 13:46:44.230437', '2024-03-19 13:46:44.230437', 'f4744843-97f4-47c1-af95-6f7c1eb7dce8', 'test_0_prod_off_cat@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a'),
	('cb6e6ec9-ab2d-456b-8102-7e8ff9e79e93', 'Student with 7 Products', 'No Categories', 'test_7_prod_off_cat@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-19 13:48:27.356977', '2024-03-19 13:48:27.356977', '298bd933-7c84-46ae-82ae-b7e18f8c7032', 'test_7_prod_off_cat@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a'),
	('6adad641-c58b-4ce1-93cf-10eb77152f2c', 'Student with 6 Products', 'No Categories', 'test_6_prod_off_cat@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-19 13:48:27.356977', '2024-03-19 13:48:27.356977', '7b1d0526-aa8f-499e-8bc8-b3d16526ea2d', 'test_6_prod_off_cat@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a');


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

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('products', 'products', NULL, '2024-03-19 21:37:26.739288+00', '2024-03-19 21:37:26.739288+00', false, false, NULL, NULL, NULL),
	('tenants', 'tenants', NULL, '2024-03-19 21:37:53.940525+00', '2024-03-19 21:37:53.940525+00', false, false, NULL, NULL, NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id") VALUES
	('1f9a3e6d-d034-40dd-bbfd-79da08d6d59d', 'products', '252b7817-b512-496b-b388-fe867fb34147/image_1711209509276.jpg', '2af46148-f571-471e-966c-1f258aaa3354', '2024-03-23 15:58:29.305563+00', '2024-03-23 15:58:29.305563+00', '2024-03-23 15:58:29.305563+00', '{"eTag": "\"6d73937b1372aadef50c2197965c3f42\"", "size": 147151, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-03-23T15:58:29.298Z", "contentLength": 147151, "httpStatusCode": 200}', 'b1d7e81d-8cc2-4fc2-b723-fada536fde21', '2af46148-f571-471e-966c-1f258aaa3354'),
	('5782c18f-10b4-4f16-9748-12ad56b974e7', 'products', '0b836d47-0156-423c-abe8-1e8dc43dc1b9/image_1711209532256.jpg', '2af46148-f571-471e-966c-1f258aaa3354', '2024-03-23 15:58:52.27853+00', '2024-03-23 15:58:52.27853+00', '2024-03-23 15:58:52.27853+00', '{"eTag": "\"0961edd2c8299413e09ea71332fa3cff\"", "size": 138103, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-03-23T15:58:52.275Z", "contentLength": 138103, "httpStatusCode": 200}', 'da040e89-feed-4849-b90e-16eb52302801', '2af46148-f571-471e-966c-1f258aaa3354'),
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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, true);


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
