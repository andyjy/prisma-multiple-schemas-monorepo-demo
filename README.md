# prisma-multiple-schemas-monorepo-demo

Example of workaround for using prisma across packages in a monorepo, with multiple schemas and next.js client app

This example npm workspaces - requires npm v7+. But should be repurposable for other package managers.

Workspace folders:

- `/modules/`
- `/services/`

Prisma schemas managed within `modules/database/`

Example Next.js web app within `services/web/`

Example unit tests with Jest (not Next.JS specific) within `services/web/__tests__/test.ts`

## Setup

1. clone repo
2. `npm i`
   - will install dependencies and trigger `prisma generate` via `postinstall` npm run-script configured in `modules/database/package.json` and called via root `/package.json`.
3. `npm run test` to demonstrate Prisma clients work via code elsewhere in monorepo
4. `npm run dev` to start Next.js server
5. open <http://localhost:3000> to demonstrate Prisma clients work via Next.js project elsewhere in monorepo
