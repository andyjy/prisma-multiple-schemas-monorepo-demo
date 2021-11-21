# prisma-multiple-schemas-monorepo-demo

Example of workaround for using prisma across packages in a monorepo, with multiple schemas and next.js client app

This example npm workspaces - requires npm v7+. But should be repurposable for other package managers.

workspace folders:

- modules
- services

Prisma schemas managed within modules/database/

Example Next.js web app within services/web/

Example unit tests with Jest (not Next.JS specific) within services/web/**tests**/test.ts
