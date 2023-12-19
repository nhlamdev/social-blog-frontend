import { PopularItemsComponent } from "./popular";
import { SeriesPopular } from "./series-popular";

import { ClientHead, WorkCycleComponent } from "@/components/home";
import { ContentMoreComments } from "./content-more-content";
import { ContactComponent } from "@/components/home/contact-me";

export default async function ClientContentsPage() {
  return (
    <main
      className="min-h-screen flex flex-col w-full bg-gradient-light dark:bg-gradient-dark
     gap-2 "
    >
      {ClientHead ? <ClientHead /> : <></>}

      <div className="flex flex-col gap-4 p-2 sm:p-4">
        <PopularItemsComponent />
        <SeriesPopular />
        <ContentMoreComments />
        <WorkCycleComponent />
        <ContactComponent />
      </div>
    </main>
  );
}
