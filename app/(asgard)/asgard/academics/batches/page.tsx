import BatchContainer from '@/containers/asgard/academics/BatchContainer'
import React from 'react'
import { getBatches } from './actions';
import { IBatches } from '@/types';


type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};


export default async function Page({
  searchParams,
}: Props) {

  const params = await searchParams;

  const currentPage = Number(params.page ?? "1");

  const result = (await getBatches(currentPage)).data as IBatches[];

  return (
    <BatchContainer result={result} />
  )
}

