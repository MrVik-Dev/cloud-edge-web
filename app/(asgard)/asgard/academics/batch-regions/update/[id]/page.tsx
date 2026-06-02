import React from "react";
import CreateUpdateBatchRegionContainer from "@/containers/asgard/academics/CreateUpdateBatchRegionContainer";
import { getBatchRegionById, getAllBatches } from "../../actions";
import { IBatches } from "@/types";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const region = await getBatchRegionById(id);
  const batches = (await getAllBatches()) as IBatches[];

  return <CreateUpdateBatchRegionContainer data={region} batches={batches} />;
};

export default Page;
