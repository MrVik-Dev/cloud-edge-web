import React from "react";
import { getBatchRegions } from "./actions";
import { IBatchRegion } from "@/types";
import BatchRegionContainer from "@/containers/asgard/academics/BatchRegionContainer";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = Number(params.page ?? "1");

  const result = (await getBatchRegions(currentPage)).data as IBatchRegion[];

  return <BatchRegionContainer result={result} />;
}
