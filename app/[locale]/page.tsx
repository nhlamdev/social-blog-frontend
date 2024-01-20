import {
  ClientHead,
  ContactComponent,
  ContentMoreComments,
  PopularItemsComponent,
  SeriesPopular,
  WorkCycleComponent,
} from "@/components/home";
import { Suspense } from "react";

export default async function ClientContentsPage() {
  return (
    <main
      className="min-h-screen flex flex-col bg-gradient-light dark:bg-gradient-dark
      gap-2 w-full relative"
    >
      {ClientHead ? <ClientHead /> : <></>}

      <div className="flex flex-col gap-4 p-2 sm:p-4">
        <Suspense fallback={<div>loading</div>}>
          <PopularItemsComponent />
        </Suspense>
        <Suspense fallback={<div>loading</div>}>
          <SeriesPopular />
        </Suspense>
        <ContentMoreComments />
        <WorkCycleComponent />
        <ContactComponent />
      </div>
    </main>
  );
}
