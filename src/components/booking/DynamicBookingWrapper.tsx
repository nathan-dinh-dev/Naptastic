"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";

const BookingWrapper = dynamic(
  () => import("@/components/booking/BookingWrapper"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[200px] w-full" />,
  }
);

// Thin wrapper client component just for ssr: false
export function DynamicBookingWrapper(props: any) {
  return <BookingWrapper {...props} />;
}
