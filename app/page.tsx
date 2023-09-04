import { HomeClientSlider } from "@/components/page/home-page";
import { getDateTime } from "@/utils/global-func";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const backend = process.env.SERVICE_PORT;

export default async function ClientContentsPage() {
  const { data: contents } = await axios.get(
    `http://localhost:${backend}/content?skip=0&take=6`
  );

  return (
    <main className="min-h-screen flex flex-col w-full tems-center gap-4 ">
      <header className="px-14 py-4">
        <HomeClientSlider />
      </header>

      <div
        className="flex flex-col
        md:grid md:grid-flow-row grid-cols-1  md:grid-cols-2 lg:grid-cols-3 sm:grid-rows-2 
        gap-6 py-10 px-5 md:px-10 w-full md:w-4/5 mx-auto h-full "
        style={{ flex: 8 }}
      >
        {/* {renderContent()} */}
        {contents.data.map((v: any) => (
          <div
            key={v}
            className="flex flex-row md:flex-col gap-2 
          hover:shadow-slate-600 hover:shadow-md h-fit 
          rounded-md overflow-hidden ease-in-out duration-500
          cursor-pointer bg-slate-400"
          >
            <div
              className="shadow-lg bg-center aspect-[3/2] 
                     h-24 md:h-full bg-slate-400"
              style={{
                cursor: "pointer",
                backgroundImage: `url(/service/${v.images[0].fileName})`,
                backgroundSize: "cover",
                position: "relative",
              }}
            />

            <div
              className="p-2 gap-2 flex flex-col justify-around "
              style={{ transition: "all ease .3s" }}
            >
              {v.category ? (
                <div className="bg-slate-100  top-4 left-0 px-4  rounded-md w-fit">
                  <span className="text-[10px] sm:text-xs md:text-sm text-slate-800   font-semibold">
                    {v.category.title}
                  </span>
                </div>
              ) : (
                <></>
              )}

              <span
                className="text-slate-100 line-clamp-2 md:line-clamp-3 text-clip 
            text-xs sm:text-sm md:text-md tracking-tight"
              >
                {v.title}
              </span>

              <span className="text-slate-100 text-[10px] sm:text-xs md:text-sm  font-light">
                {getDateTime(v.created_at)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/content?page=2"
        className="bg-slate-800 dark:bg-slate-200 bg-opacity-20  shadow-md
        w-fit px-8 py-2 rounded-md mx-auto cursor-pointer mb-4"
      >
        <span className=" text-slate-900 text:md font-semibold">Xem tiếp</span>
      </Link>

      <div className="flex flex-row gap-2">
        <div style={{ flex: 2 }}>as</div>
        <div style={{ flex: 1 }}>
          <span className="text-lg font-semibold ">Thể loại</span>
          <ol className="flex flex-col gap-2">
            <li className="flex flex-row items-center">
              <span>thể loại 1</span>
              <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-red-100 bg-red-700 border border-red-700 ">
                <div className="text-xs font-normal leading-none max-w-full flex-initial">
                  Hello!
                </div>
              </div>
            </li>
            <li className="flex flex-row items-center">
              <span>thể loại 1</span>
              <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-red-100 bg-red-700 border border-red-700 ">
                <div className="text-xs font-normal leading-none max-w-full flex-initial">
                  Hello!
                </div>
              </div>
            </li>
            <li className="flex flex-row items-center">
              <span>thể loại 1</span>
              <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-red-100 bg-red-700 border border-red-700 ">
                <div className="text-xs font-normal leading-none max-w-full flex-initial">
                  Hello!
                </div>
              </div>
            </li>
            <li className="flex flex-row items-center">
              <span>thể loại 1</span>
              <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-red-100 bg-red-700 border border-red-700 ">
                <div className="text-xs font-normal leading-none max-w-full flex-initial">
                  Hello!
                </div>
              </div>
            </li>
            <li className="flex flex-row items-center">
              <span>thể loại 1</span>
              <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-red-100 bg-red-700 border border-red-700 ">
                <div className="text-xs font-normal leading-none max-w-full flex-initial">
                  Hello!
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
