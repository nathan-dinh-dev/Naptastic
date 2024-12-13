import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Suspense } from "react";

const HomePage = async ({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) => {
  const params = await searchParams;

  return (
    <section>
      <CategoriesList category={params.category} search={params.search} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={params.category}
          search={params.search}
        />
      </Suspense>
    </section>
  );
};

export default HomePage;
