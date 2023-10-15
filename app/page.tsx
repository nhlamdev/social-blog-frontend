import { getDateTime } from "@/utils/global-func";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { PopularItemsComponent } from "./popular";
import { SeriesPopular } from "./series-popular";
import { AuthBox } from "@/components/custom/auth-box";

const backend = process.env.SERVICE_PORT;

export default async function ClientContentsPage() {
  const { data: contents } = await axios.get(
    `http://localhost:${backend}/content?skip=0&take=6`
  );

  return (
    <main className="min-h-screen flex flex-col w-full tems-center gap-4 p-4">
      <header className="flex flex-row items-center justify-between">
        <div className="w-16 h-16 relative">
          <Image
            className="shadow-md rounded-full"
            src="/logo/logo.png"
            fill
            alt="logo"
          />
        </div>

        <h1 className="text-xl font-semibold">swalog dev</h1>

        <AuthBox />
      </header>

      <nav
        className="px-4 py-2 gap-4 flex flex-row items-center"
        style={{ borderBottom: "1px solid black" }}
      >
        <Link href="/content">
          <span>Bài viết</span>
        </Link>
        <Link href="/series">
          <span>Chuỗi bài viết</span>
        </Link>
        <Link href="/about-me">
          <span>Về tôi</span>
        </Link>

        <form
          action="/content"
          className="select-none flex flex-row items-center justify-end gap-2  flex-1"
        >
          <input
            type="text"
            name="search"
            className="rounded-md text-sm select-none w-2/5"
          />

          <button type="submit">
            <FiSearch className="text-2xl" />
          </button>
        </form>
      </nav>

      <div className="flex flex-col gap-2">
        <p className="text-2xl font-semibold text-center">Bài viết mới nhất</p>
        <div
          className="flex flex-col
          md:grid md:grid-flow-row grid-cols-1  md:grid-cols-2 lg:grid-cols-3 sm:grid-rows-2 
          gap-6 p-4 md:px-10 w-full md:w-4/5 mx-auto h-full"
          style={{ flex: 8 }}
        >
          {contents.data.map((v: any) => {
            return (
              <Link
                href={`/content/${v._id}`}
                key={v._id}
                className="flex flex-row md:flex-col gap-2 h-fit 
                rounded-md overflow-hidden ease-in-out duration-500 cursor-pointer"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
              >
                <div
                  className="shadow-lg bg-center aspect-[3/2] 
                     h-24 md:h-full bg-slate-400"
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
                    <div className="bg-slate-200  top-4 left-0 px-4  rounded-md w-fit">
                      <span className="text-[10px] sm:text-xs md:text-sm text-slate-800 font-semibold">
                        {v.category.title}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}

                  <span
                    className="text-slate-800 line-clamp-2 md:line-clamp-3 text-clip 
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
                    <span className="text-xs font-semibold">
                      {v.created_by.name}
                    </span>
                  </div>

                  <span className="text-slate-800 text-sm sm:text-xs md:text-sm  font-light">
                    {getDateTime(v.created_at)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Link
        href="/content?page=2"
        className="bg-slate-800 dark:bg-slate-100 bg-opacity-20  shadow-md
        w-fit px-8 py-2 rounded-md mx-auto cursor-pointer mb-4"
        style={{
          border: "1px solid white",
        }}
      >
        <span className=" text-slate-900 text:md font-semibold">Xem tiếp</span>
      </Link>

      <PopularItemsComponent />
      <SeriesPopular />
    </main>
  );
}
