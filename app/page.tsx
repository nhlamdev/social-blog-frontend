import { getDateTime } from "@/utils/global-func";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { PopularItemsComponent } from "./popular";
import { SeriesPopular } from "./series-popular";

const backend = process.env.SERVICE_PORT;

export default async function ClientContentsPage() {
  const { data: contents } = await axios.get(
    `http://localhost:${backend}/content?skip=0&take=6`
  );

  return (
    <main className="min-h-screen flex flex-col w-full tems-center gap-4 ">
      <header
        className="bg-slate-100"
        style={{
          backgroundImage: 'url("/background/OIG (2).jfif")',
          backgroundBlendMode: "multiply",
          height: "100vh",
          width: "100vw",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            top: "10px",
            left: "10px",
            alignItems: "center",
          }}
        >
          <div
            className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] "
            style={{ position: "relative" }}
          >
            <Image
              src="/logo/logo.png"
              fill
              sizes="100vw"
              alt="logo"
              style={{ filter: "drop-shadow(5px 5px 5px #222)" }}
            />
          </div>
          {/* -------- */}
          <div
            className="gap-1 sm:gap-2 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Link
              href="/content"
              className="text-[14px] sm:text-[18px] px-2 py-1 sm:px-3  sm:py-2 bg-slate-50 text-slate-900 "
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontWeight: 700,
              }}
            >
              Bài viết
            </Link>
            <Link
              href="/series"
              className="text-[14px] sm:text-[18px] px-2 py-1 sm:px-3  sm:py-2  bg-slate-50 text-slate-900"
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontWeight: 700,
              }}
            >
              Chuỗi bài viết
            </Link>
          </div>
          {/* -------------- */}
        </div>
        {/* ------------------- */}
        <div
          className="bottom-5 w-[400px] sm:w-[500px] md:w-[580px]"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)",
            left: "10px",
            backgroundColor: "#00000040",
            boxShadow: "5px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(2.5px)",
            height: "fit-content",
            padding: "40px 20px",
            borderRadius: "10px",
          }}
        >
          <span
            className="text-lg sm:text-2xl md:text-3xl"
            style={{
              fontStyle: "italic",
              background:
                "linear-gradient(149deg, rgba(39, 174, 96, 0.80) 0%, rgba(236, 180, 182, 0.80) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Code your way to the future
            <br />
            with passion and perseverance !
          </span>
        </div>
        {/* ------------- */}
        <Image
          src="/svg/code-think.svg"
          className="hidden md:block"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            filter: "drop-shadow(5px 5px 5px #222)",
          }}
          width={200}
          height={100}
          sizes="100vw"
          alt="code-think"
        />
      </header>

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
