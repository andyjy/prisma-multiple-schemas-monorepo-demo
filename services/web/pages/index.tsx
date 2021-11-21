import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { PrismaClient as PrismaClientSchemaA } from "prisma_schemaA/client";
import { PrismaClient as PrismaClientSchemaB } from "prisma_schemaB/client";

export const getStaticProps: GetStaticProps = async () => {
  const prismaSchemaA = new PrismaClientSchemaA();
  const prismaSchemaB = new PrismaClientSchemaB();
  return {
    props: {
      exampleDataFromPrismaA: await prismaSchemaA.modelA.count(),
      exampleDataFromPrismaB: await prismaSchemaB.modelB.count(),
    },
  };
};

type Props = {
  exampleDataFromPrismaA: string;
  exampleDataFromPrismaB: string;
};

export default function Home({
  exampleDataFromPrismaA,
  exampleDataFromPrismaB,
}: Props): ReactElement {
  return (
    <>
      <p>example data from Prisma:</p>
      <ul>
        <li>From schema A: {exampleDataFromPrismaA}</li>
        <li>From schema B: {exampleDataFromPrismaB}</li>
      </ul>
    </>
  );
}
