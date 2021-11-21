import { test, expect } from "@jest/globals";
import fs from "fs";
import path from "path";

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

// if tests above fail then the following should provide clues:

test("schema A prisma client has been generated to correct location", () => {
  expect(
    fs.existsSync(
      path.resolve(
        __dirname,
        "../../../node_modules/@~internal/prisma_schemaA/client/index.js"
      )
    )
  ).toBe(true);
});

test("schema B prisma client has been generated to correct location", () => {
  expect(
    fs.existsSync(
      path.resolve(
        __dirname,
        "../../../node_modules/@~internal/prisma_schemaB/client/index.js"
      )
    )
  ).toBe(true);
});
