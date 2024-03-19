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
	('00000000-0000-0000-0000-000000000000', 'c7571e70-8e0b-4c76-abf3-75ea58821623', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-18 22:21:34.484678+00', ''),
	('00000000-0000-0000-0000-000000000000', '291232c5-673c-4318-967f-713f754f78d8', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:35:51.088724+00', ''),
	('00000000-0000-0000-0000-000000000000', '612f9c86-b661-4939-ac5f-5e06735ea0ea', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:35:51.10601+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fb04b4f5-2ef4-43b5-841b-2bf1b27e7366', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:41:16.290373+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ea3ff69b-027e-4956-9229-2b1b34b7db11', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:41:16.298271+00', ''),
	('00000000-0000-0000-0000-000000000000', '7fcf6d70-28e2-48f0-8e7e-4f6729a5f39b', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:41:16.3062+00', ''),
	('00000000-0000-0000-0000-000000000000', '11f92c70-614c-45a9-a640-c30e4d1c3a49', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:41:16.32106+00', ''),
	('00000000-0000-0000-0000-000000000000', '5c173766-cda3-4731-8334-67d83d791414', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:41:17.813206+00', ''),
	('00000000-0000-0000-0000-000000000000', '137ea029-c28f-4f0b-8c51-1316a20079d4', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:41:20.480089+00', ''),
	('00000000-0000-0000-0000-000000000000', '3018ba1f-4893-4bac-9711-e52b95b73108', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:39.872469+00', ''),
	('00000000-0000-0000-0000-000000000000', '3e3c8f85-2943-4430-87e8-3bdc72dd249d', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:39.878941+00', ''),
	('00000000-0000-0000-0000-000000000000', '8b6ab083-537f-4852-a836-e489c46fd769', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:39.887034+00', ''),
	('00000000-0000-0000-0000-000000000000', '436e9bff-dd2f-46e0-ac33-20dc1f036086', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:39.906391+00', ''),
	('00000000-0000-0000-0000-000000000000', '4fb181ce-f540-45b7-9990-771d4514cd17', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:39.916445+00', ''),
	('00000000-0000-0000-0000-000000000000', '8d140677-26d7-4b05-8028-635d911ab998', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:40.569223+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e4f90a28-5235-4c70-9870-2d20f46c9754', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:40.587933+00', ''),
	('00000000-0000-0000-0000-000000000000', '88a3a1ce-b29a-4177-8411-7a25e12fab77', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:42.586668+00', ''),
	('00000000-0000-0000-0000-000000000000', '5503cbad-ad98-4bd8-a9db-283176e194a2', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:42.596739+00', ''),
	('00000000-0000-0000-0000-000000000000', '42b2cda2-725b-490a-80f4-c88084517da3', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:42.607675+00', ''),
	('00000000-0000-0000-0000-000000000000', '9b78ba50-1346-4f39-83e4-040a4f1fbcaf', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:42.625804+00', ''),
	('00000000-0000-0000-0000-000000000000', '1c0a513b-d750-42f4-8413-352f8466db73', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:42.639891+00', ''),
	('00000000-0000-0000-0000-000000000000', '40867f4e-e711-44a3-99b6-e2793e9be6c6', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:43.028927+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b50af8b8-bd46-41a8-8ed7-0a32e071dfa0', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:43.065316+00', ''),
	('00000000-0000-0000-0000-000000000000', '1157003e-b05b-4ab0-87c3-afc746e3661e', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:56.697629+00', ''),
	('00000000-0000-0000-0000-000000000000', '15df4617-49d8-4cfb-ab31-dcc00c37b82e', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:56.710352+00', ''),
	('00000000-0000-0000-0000-000000000000', '6659349c-5f5d-41b7-8a56-5b92371cb060', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:56.714339+00', ''),
	('00000000-0000-0000-0000-000000000000', '0ac5755f-3440-43ee-b4f0-5659e238d174', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:56.725245+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ffe287bf-8868-49b8-be3a-cc43cba1a6ca', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:56.734318+00', ''),
	('00000000-0000-0000-0000-000000000000', '10130d2d-c113-43f2-a3cf-18c1c9808a06', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:57.034968+00', ''),
	('00000000-0000-0000-0000-000000000000', '26aa294a-5b5d-488f-8a0d-2dde42b8eb85', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:57.046081+00', ''),
	('00000000-0000-0000-0000-000000000000', '4ba05903-2243-4e4c-848b-6c07cd917677', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:57.06461+00', ''),
	('00000000-0000-0000-0000-000000000000', '101ff112-4cb9-48aa-a02b-c961189c520a', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:57.517202+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f9faef3f-1b67-4dd5-ae98-3e1076bbff43', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:57.545724+00', ''),
	('00000000-0000-0000-0000-000000000000', '237caad8-68db-43c1-9180-678615b3dc70', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:54:55.102405+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bbcece80-2a59-4485-829a-ad333bfe9e07', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:54:55.15851+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd8d14be3-58fa-4dfd-b216-e0d5faa691a8', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:54:55.585661+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e8f894f-50de-49e0-8d52-b3cb50572099', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:54:55.608211+00', ''),
	('00000000-0000-0000-0000-000000000000', '2b60e401-dd83-4af2-8aa1-fa25dad4e96f', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:54:59.709337+00', ''),
	('00000000-0000-0000-0000-000000000000', '7ed49563-7a63-4413-b02d-106f49a7e13d', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:54:59.740141+00', ''),
	('00000000-0000-0000-0000-000000000000', '08f80e81-8411-4f21-82b3-51a4c7a49650', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:55:00.260269+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c33f7b69-a288-4b19-996b-8bd099c36e7b', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:55:00.276335+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e90527a-fdfd-43f9-89f7-2e34caa8e518', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:55:01.713625+00', ''),
	('00000000-0000-0000-0000-000000000000', '328f2c6c-f56b-4acf-9cb1-9552bb911d57', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:55:01.815856+00', ''),
	('00000000-0000-0000-0000-000000000000', '50967d4d-8e70-41fc-ac38-84d27f3aa9b7', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:55:01.846525+00', ''),
	('00000000-0000-0000-0000-000000000000', '8f8bd304-81eb-4a0b-a76f-2dfbe62f23af', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:55:02.108742+00', ''),
	('00000000-0000-0000-0000-000000000000', '6ec2705f-a9ea-4e10-85ec-8f955ff47397', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:55:02.139177+00', ''),
	('00000000-0000-0000-0000-000000000000', '43049987-45d2-4b20-a378-2c1011e0aaca', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:55:06.238591+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b9fed51b-bb57-425e-84e0-f7e7d93bc4cb', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:57.077617+00', ''),
	('00000000-0000-0000-0000-000000000000', '91779b32-c278-422b-b782-ddcc20b809eb', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:57.102207+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bc2898d8-5ec9-4b4c-bcd9-627a8bf01c57', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:57.170933+00', ''),
	('00000000-0000-0000-0000-000000000000', '4de49d7f-7c7a-42fe-bdc0-a703f1081070', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:52:57.193344+00', ''),
	('00000000-0000-0000-0000-000000000000', '1b3283c7-56fb-42c5-9c87-673db4993223', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:54:59.69748+00', ''),
	('00000000-0000-0000-0000-000000000000', 'db414dec-e158-4faa-b73d-fdfeaa46ece9', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:54:59.716398+00', ''),
	('00000000-0000-0000-0000-000000000000', '2271ad76-345f-440d-9043-aeea4b4a198a', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:54:59.772985+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b2d8748a-da94-4d43-b2e7-b6e50aa319f8', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:55:06.39403+00', ''),
	('00000000-0000-0000-0000-000000000000', '628430fe-a513-4fe7-b4c0-f5c5bbd1c195', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:55:06.419268+00', ''),
	('00000000-0000-0000-0000-000000000000', '7261b44a-6895-4e2e-89bc-5d651a95c58f', '{"action":"token_refreshed","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"token"}', '2024-03-19 13:55:13.73709+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ca36b921-0271-4f19-bca0-2c0b806becb0', '{"action":"login","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-19 13:57:49.069311+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f6a4409c-3863-4e17-8543-671d1fa818d0', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"test_scenarios@skillstery.com","user_id":"f7f5dec1-759a-4513-ae5e-1ac1286d879f","user_phone":""}}', '2024-03-19 14:05:11.528253+00', ''),
	('00000000-0000-0000-0000-000000000000', '37a41ce5-8c66-45e1-a94e-e2e0622a4973', '{"action":"logout","actor_id":"2af46148-f571-471e-966c-1f258aaa3354","actor_username":"admin@skillstery.com","actor_via_sso":false,"log_type":"account"}', '2024-03-19 14:07:28.910129+00', ''),
	('00000000-0000-0000-0000-000000000000', '00546681-a4ee-4772-915d-55fc81891af0', '{"action":"login","actor_id":"f7f5dec1-759a-4513-ae5e-1ac1286d879f","actor_username":"test_scenarios@skillstery.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-19 14:07:41.202539+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', '2af46148-f571-471e-966c-1f258aaa3354', 'authenticated', 'authenticated', 'admin@skillstery.com', '$2a$10$aiXMJsGNyNn66TLzUByKaerJBj4OW1FAHT.0pLxa00oU.dz7aYZdW', '2024-03-12 16:34:16.017985+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-03-19 13:57:49.070051+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-03-12 16:34:16.006558+00', '2024-03-19 13:57:49.071641+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL),
	('00000000-0000-0000-0000-000000000000', 'f7f5dec1-759a-4513-ae5e-1ac1286d879f', 'authenticated', 'authenticated', 'test_scenarios@skillstery.com', '$2a$10$eF4vSWRK0bN0KYxUfQs/gOstXqBHHO6zn.bNPIf4EJkFLPCYZi682', '2024-03-19 14:05:11.529288+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-03-19 14:07:41.2031+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-03-19 14:05:11.525674+00', '2024-03-19 14:07:41.20456+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('2af46148-f571-471e-966c-1f258aaa3354', '2af46148-f571-471e-966c-1f258aaa3354', '{"sub": "2af46148-f571-471e-966c-1f258aaa3354", "email": "admin@skillstery.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-12 16:34:16.011988+00', '2024-03-12 16:34:16.012016+00', '2024-03-12 16:34:16.012016+00', '7c7b18ae-e79a-492a-a10c-aaa20e7e1895'),
	('f7f5dec1-759a-4513-ae5e-1ac1286d879f', 'f7f5dec1-759a-4513-ae5e-1ac1286d879f', '{"sub": "f7f5dec1-759a-4513-ae5e-1ac1286d879f", "email": "test_scenarios@skillstery.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-19 14:05:11.527622+00', '2024-03-19 14:05:11.527661+00', '2024-03-19 14:05:11.527661+00', '43d38b80-efed-4421-afd6-96ffbf104e00');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('0cae87c2-5b12-4195-944c-234eb5cb1a14', 'f7f5dec1-759a-4513-ae5e-1ac1286d879f', '2024-03-19 14:07:41.203143+00', '2024-03-19 14:07:41.203143+00', NULL, 'aal1', NULL, NULL, 'node', '192.168.65.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('0cae87c2-5b12-4195-944c-234eb5cb1a14', '2024-03-19 14:07:41.204878+00', '2024-03-19 14:07:41.204878+00', 'password', '8d588a64-dc02-4e6c-8d08-13850f7f373c');


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
	('00000000-0000-0000-0000-000000000000', 4, '6cM0uPi62XXbTZV6cQdDJQ', 'f7f5dec1-759a-4513-ae5e-1ac1286d879f', false, '2024-03-19 14:07:41.203721+00', '2024-03-19 14:07:41.203721+00', NULL, '0cae87c2-5b12-4195-944c-234eb5cb1a14');


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
	('e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', 'Brand 1', '2024-03-08 17:03:03.19841', '2024-03-08 17:03:03.19841'),
	('e78f08a2-8de7-4be2-bcd2-93428afa879f', 'Only for test scenarios', '2024-03-19 13:43:46.102953', '2024-03-19 13:43:46.102953');


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
	('252b7817-b512-496b-b388-fe867fb34147', 'Product 1', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-01 15:28:54.79057', '2024-03-01 15:28:54.79057', NULL, NULL, NULL, NULL, NULL),
	('0b836d47-0156-423c-abe8-1e8dc43dc1b9', 'Product 2', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-01 15:29:01.492721', '2024-03-01 15:29:01.492721', NULL, NULL, NULL, NULL, NULL);


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."students" ("id", "first_name", "last_name", "email", "tenant_id", "created_at", "updated_at", "sub", "username") VALUES
	('4d0b7254-5fb0-47a7-918d-0b8250f55a1e', 'student', 'skillstery', 'student@skillstery.com', 'e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a', '2024-03-18 21:51:04.594382', '2024-03-18 21:51:04.594382', '23dbc58f-d14a-4d29-bc64-d491514247a0', 'student@skillstery.com_e3a5f6a7-bfd8-4eb5-a1c1-53359c47cb9a'),
	('478dd321-9469-40a8-8c4d-5eee51c7e63b', 'Student with 27 Products', 'Four Categories', 'test_27_prod_4_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:52:32.771207', '2024-03-19 13:52:32.771207', '080d0178-12ae-4eeb-90ef-5bb11697e931', 'test_27_prod_4_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('97d52ee5-0dbb-4034-9574-bd905e9cc822', 'Student with 6 Products in each Cat', 'Two Categories', 'test_12_prod_2_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:50:47.894623', '2024-03-19 13:50:47.894623', '568abc91-62a3-44fc-ada3-7d5a1e15bbc1', 'test_12_prod_2_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('79b126bb-c79c-4eef-8dfe-2f59fc023da8', 'Student with 7 Products in each Cat', 'Two Categories', 'test_14_prod_2_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:50:47.894623', '2024-03-19 13:50:47.894623', 'cdd98060-41ea-46a7-80e2-0f7b7682c076', 'test_14_prod_2_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('a4fd6a4a-0508-42ba-bf3c-b7d6c999b185', 'Student with 0 Products', 'No Categories', 'test_0_prod_off_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:46:44.230437', '2024-03-19 13:46:44.230437', '640d8939-9db9-4a66-9c6e-3a15778d2e83', 'test_0_prod_off_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('5aa9d10d-a230-4014-8112-a48144f1fed0', 'Student with 13 Products', 'No Categories', 'test_13_prod_off_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:48:27.356977', '2024-03-19 13:48:27.356977', 'b9139b35-552f-4828-a7fa-129221db4cc9', 'test_13_prod_off_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('fbcd0ad0-7d3d-4fcd-a6d0-7a82f766eb69', 'Student with 1 Products', 'No Categories', 'test_1_prod_off_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:48:27.356977', '2024-03-19 13:48:27.356977', '848508ba-dd51-485e-a083-a24c80a03d45', 'test_1_prod_off_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('6adad641-c58b-4ce1-93cf-10eb77152f2c', 'Student with 6 Products', 'No Categories', 'test_6_prod_off_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:48:27.356977', '2024-03-19 13:48:27.356977', '5b524b27-ca6e-45f7-8a99-76d602c600f6', 'test_6_prod_off_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('81714887-fcd8-4ecd-b675-42fb56332935', 'Student with 12 Products', 'One Categories', 'test_12_prod_1_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:49:27.310385', '2024-03-19 13:49:27.310385', 'add15b49-7e5a-4562-8e90-93094d5898e1', 'test_12_prod_1_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('60f1b8f3-6ece-4835-bba2-f1c691f5c7c3', 'Student with 13 Products', 'One Categories', 'test_13_prod_1_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:49:27.310385', '2024-03-19 13:49:27.310385', '32aa48a9-c644-490f-b3c1-3c5052ce181a', 'test_13_prod_1_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f'),
	('cb6e6ec9-ab2d-456b-8102-7e8ff9e79e93', 'Student with 7 Products', 'No Categories', 'test_7_prod_off_cat@skillstery.com', 'e78f08a2-8de7-4be2-bcd2-93428afa879f', '2024-03-19 13:48:27.356977', '2024-03-19 13:48:27.356977', 'a5ab3dac-729f-4fb3-a9ed-16e820e51dd2', 'test_7_prod_off_cat@skillstery.com_e78f08a2-8de7-4be2-bcd2-93428afa879f');


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 4, true);


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
