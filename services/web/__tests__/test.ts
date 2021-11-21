import { test, expect } from "@jest/globals";

import { PrismaClient as PrismaClientSchemaA } from "@~internal/prisma_schemaA/client";
import { PrismaClient as PrismaClientSchemaB } from "@~internal/prisma_schemaB/client";

test("schema A is callable", async () => {
  const prismaSchemaA = new PrismaClientSchemaA();
  expect(await prismaSchemaA.modelA.count()).toBeGreaterThanOrEqual(0);
});

test("schema B is callable", async () => {
  const prismaSchemaB = new PrismaClientSchemaB();
  expect(await prismaSchemaB.modelB.count()).toBeGreaterThanOrEqual(0);
});
