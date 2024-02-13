# Skillstery admin app

## Environment
### Node version
```
18.17.x // set in package.json engines and .nvmrc
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
