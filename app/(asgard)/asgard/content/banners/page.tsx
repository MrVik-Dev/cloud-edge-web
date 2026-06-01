import { getBanners } from "./actions";
import BannerContainer from "@/containers/asgard/content/banners/BannerContainer";

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

  const result = await getBanners(currentPage);
  return (
    <BannerContainer result={result} />
  );
}