# Skillstery Backend Monorepo

## General
### Tools
[NX](https://nx.dev/) is used as a monorepo tool.
[PNPM](https://pnpm.io/) as package manager

### Structure
1. [Admin App](./admin-app/README.md)
2. Auth service
3. [Edge API](./edge-api/README.md)
4. Supabase
5. Packages – where all reusable packages live
6. Plugin – custom plugins for NX, etc.

Each project has `project.json` file used by NX to identify the project. Targets for project can be defined in `project.json` or as `scripts` in `package.json`


## Development
1. [Install PNPM](https://pnpm.io/installation)
2. Install packages with
```bash
pnpm i
```
3. Setup `.env` according to `.env.example`
4. Run desire target

## Running target
To use NX install it globally with
```bash
npm add --global nx@latest
```
Or use
```bash
pnpm nx
```
To run specific target for one project run 
```bash
nx run <project-name>:<target>
```

For example, to start admin-app in development mode
```bash
nx run admin-app:dev
```
