import { getDateTime } from "@/utils/global-func";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
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

      <div className="flex flex-col gap-2">
        <p
          className="text-2xl font-semibold text-center 
        dark:text-slate-100 text-slate-900"
        >
          Bài viết mới nhất
        </p>

        <div
          className="grid grid-flow-row grid-cols-1  sm:grid-cols-3 sm:grid-rows-1
          gap-6 px-10 md:w-full lg:w-4/5 w-full mx-auto h-fit "
          style={{ flex: 8 }}
        >
          {contents.data.map((v: any) => {
            return (
              <Link
                href={`/content/${v._id}`}
                key={v._id}
                className="flex-col gap-2 h-fit rounded-md overflow-hidden ease-in-out duration-500 
                cursor-pointer dark:bg-slate-600 bg-slate-200 bg-opacity-60 "
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
              >
                <div
                  className="shadow-lg bg-center aspect-[3/2] 
                     h-full bg-slate-400"
                  style={{
                    cursor: "pointer",
                    backgroundImage: `url(/service/${v.image.fileName})`,
                    backgroundSize: "cover",
                    position: "relative",
                  }}
                />

                <div
                  className="p-2 gap-2 flex flex-col justify-around "
                  style={{ transition: "all ease .3s" }}
                >
                  {v.category ? (
                    <div
                      className="bg-slate-200 bg-opacity-40  top-4 left-0 px-4  
                    rounded-md w-fit"
                    >
                      <span
                        className="text-[10px] sm:text-xs md:text-sm 
                      dark:text-slate-100 text-slate-900 font-semibold"
                      >
                        {v.category.title}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}

                  <span
                    className="line-clamp-2 md:line-clamp-3 text-clip dark:text-slate-100 text-slate-900
                     text-xs sm:text-sm md:text-md tracking-tight"
                  >
                    {v.title}
                  </span>

                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      src={v.created_by.image}
                      width={25}
                      height={25}
                      className="rounded-full"
                      alt="avatar"
                    />
                    <span className="text-xs font-semibold dark:text-slate-100 text-slate-900">
                      {v.created_by.name}
                    </span>
                  </div>

                  <span
                    className="text-slate-800 text-sm sm:text-xs md:text-sm whitespace-nowrap
                   font-light dark:text-slate-100 text-slate-900"
                  >
                    {getDateTime(v.created_at)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Link
        href="/content?page=1"
        className=" bg-opacity-20  shadow-lg w-fit px-8 py-2 rounded-md mx-auto cursor-pointer 
         border-slate-900 dark:border-slate-100 border-2 border-solid"
      >
        <span className=" text-slate-900 dark:text-slate-100 text:md font-semibold">
          Xem tiếp
        </span>
      </Link>

      <PopularItemsComponent />
      <SeriesPopular />
    </main>
  );
}
