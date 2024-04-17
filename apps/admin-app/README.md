# Skillstery Admin App

## Build status

| Environment | Status                                                                                                                                                                                                                                                                                                                                                                                           | Links                                                                                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Development | [![Deploy to Supabase](https://github.com/Skillstery/supabase/actions/workflows/dev_deploy.yaml/badge.svg?branch=development)](https://github.com/Skillstery/supabase/actions/workflows/dev_deploy.yaml) <br> [![Vercel Deploy](https://therealsujitk-vercel-badge.vercel.app/?app=dev-skillstery-supabase)](https://vercel.com/skillstery/skillstery-admin-app/deployments?environment=preview) | [Supabase Develop Instance](https://supabase.com/dashboard/project/zmlfknbdplcdcqlkoyig) <br> [Admin App Develop Instance](https://dev-skillstery-supabase.vercel.app/) |
| Staging     | -                                                                                                                                                                                                                                                                                                                                                                                                | -                                                                                                                                                                       |
| Production  | -                                                                                                                                                                                                                                                                                                                                                                                                | -                                                                                                                                                                       |

## Environment

### Node version

> to setup node version, run

```
nvm use
```

## Project development

### Install packages

```bash
npm install
```

### Setup .env.development.local

Use example from `.env.example`

### Start development server

```bash
npm run dev
```

### Build production version

```bash
npm run build
```

### Start production version

```bash
npm run start
```

## Supabase

Follow [Getting started guide](https://supabase.com/docs/guides/cli/getting-started)

### Migrations

#### [Supabase way](https://supabase.com/docs/guides/cli/managing-environments#auto-schema-diff)

1. Change you local DB with Supabase Studio
2. Run command to create migrations

```bash
supabase db diff -f <migration_name>
```

#### Another way

1. Change local DB with Supabase Studio
2. Run command to create a migration file

```bash
supabase migration new <migration_name>
```

3. Run command to get SQL for migration

```bash
supabase db diff
```

4. Copy result of step 3 into migration file

### Dump supabase database

1. Run command to dump supabase database (this will generate `supabase/seed.sql` file)

```bash
supabase db dump -f supabase/seed.sql --data-only --db-url [POSTGRES_DB_URL]
```

2. In case you want to restore your db, you could run the following command

```bash
supabase db reset
```

> When you run `supabase start` command it will use `supabase/seed.sql` file to restore your database

#### Useful links

- [Seeding your database](https://supabase.com/docs/guides/cli/seeding-your-database)
- [Supabase database dump](https://supabase.com/docs/reference/cli/supabase-db-dump)
- [Supabase database reset](https://supabase.com/docs/reference/cli/supabase-db-reset)

## Project structure

This project uses [NextJS App router](https://nextjs.org/docs/app/building-your-application/routing). Source core is under `src` directory. There is a global alias to `src` defined as `@/`

### Folder structure

- `app` – router directory
- `components` – reusable component
- `lib` – utilities, helpers, services

## UI component

This project uses [shadcn/ui](https://ui.shadcn.com/) as component provider

### General

Component are located in `src/components/ui` with available import alias `@/components/ui`

### Add new component

To add new component follow [the instruction](https://ui.shadcn.com/docs) fro desired component
