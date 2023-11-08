import axios from "axios";
import { PopularItemsComponent } from "./popular";
import { SeriesPopular } from "./series-popular";

import { ClientHead } from "@/components/custom";

const backend = process.env.SERVICE_PORT;

export default async function ClientContentsPage() {
  const { data: contents } = await axios.get(
    `http://localhost:${backend}/content?skip=0&take=3`
  );

  return (
    <main
      className="min-h-screen flex flex-col w-full bg-gradient-light dark:bg-gradient-dark
     gap-4 p-2 sm:p-4"
    >
      {ClientHead ? <ClientHead /> : <></>}

      <PopularItemsComponent />
      <SeriesPopular />
    </main>
  );
}
