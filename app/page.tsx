import axios from "axios";
import { PopularItemsComponent } from "./popular";
import { SeriesPopular } from "./series-popular";

import { ClientHead } from "@/components/custom";
import { ContentMoreComments } from "./content-more-content";

export default async function ClientContentsPage() {
  return (
    <main
      className="min-h-screen flex flex-col w-full bg-gradient-light dark:bg-gradient-dark
     gap-2 "
    >
      {ClientHead ? <ClientHead /> : <></>}

      <div className="flex flex-col p-2 sm:p-4">
        <PopularItemsComponent />
        <SeriesPopular />
        <ContentMoreComments />
      </div>
    </main>
  );
}
