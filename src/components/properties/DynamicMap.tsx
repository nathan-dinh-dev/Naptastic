"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";

const PropertyMap = dynamic(
  () => import("@/components/properties/PropertyMap"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full" />,
  }
);

// Thin wrapper client component just for ssr: false
export function DynamicMap(props: any) {
  return <PropertyMap {...props} />;
}
