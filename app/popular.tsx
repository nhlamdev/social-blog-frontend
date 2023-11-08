import { getDateTime } from "@/utils/global-func";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { LuView } from "react-icons/lu";
const backend = process.env.SERVICE_PORT;

export const PopularItemsComponent = async () => {
  const { data: topContents } = await axios.get(
    `http://localhost:${backend}/content/more-view?take=3`
  );

  const { data: topCategoryMoreContent } = await axios.get(
    `http://localhost:${backend}/category/more-contents?take=5`
  );

  return (
    <section className="flex lg:flex-row flex-col gap-4 px-2 py-4">
      <div style={{ flex: 2 }} className="flex flex-col gap-2 w-full">
        <span
          className="text-2xl font-semibold text-center p-2 
        text-slate-900 dark:text-slate-100"
        >
          Nội dung tiêu biểu
        </span>

        {topContents.map((content: any) => {
          return (
            <Link
              href={`/content/${content._id}`}
              key={content._id}
              className="flex flex-col gap-2 p-2 bg-slate-400 bg-opacity-40"
            >
              <span className="text-md text-slate-900 dark:text-slate-100">
                {content.title}
              </span>

              <div className="flex flex-row gap-2 items-center">
                <div className="relative w-6 h-6">
                  <Image
                    src={content.created_by.image}
                    fill
                    className="rounded-full aspect-square"
                    alt="asd"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                    {content.created_by.name}
                  </span>
                  <span className="text-xs font-light text-slate-900 dark:text-slate-100">
                    {content.created_by.email}
                  </span>
                </div>

                <div
                  className="h-4 bg-slate-600 dark:bg-slate-200 mx-1"
                  style={{ width: "1px" }}
                />

                <div className="flex flex-row items-center gap-2">
                  <LuView className="md:text-xs text-[10px] text-slate-900 dark:text-slate-100" />
                  <span className="md:text-xs font-semibold text-[10px] text-slate-900 dark:text-slate-100">
                    {content.count_view}
                  </span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-2">
                {content?.category ? (
                  <div className="bg-orange-400 px-2 py-1 rounded-md">
                    <span
                      className="text-sm font-semibold
                      text-slate-900 dark:text-slate-100"
                    >
                      {content.category.title}
                    </span>
                  </div>
                ) : (
                  <></>
                )}

                <span className="text-xs text-slate-900 dark:text-slate-100">
                  ngày tạo : {getDateTime(content.created_at)}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      {/* ----------- */}
      <div
        style={{ flex: 1 }}
        className="flex flex-col gap-4 w-full md:w-3/5 mx-auto"
      >
        <span
          className="text-xl font-semibold p-2 text-left
        text-slate-900 dark:text-slate-100"
        >
          Thể loại
        </span>
        <div className="flex flex-col gap-2 w-full">
          {topCategoryMoreContent.map((category: any) => {
            return (
              <Link
                href={`/content?sortCase=TIME_DESC&category=${category._id}`}
                key={category._id}
                className="flex flex-row items-center p-2 gap-2 rounded-sm justify-between w-full 
                shadow-md bg-slate-200 bg-opacity-40"
              >
                <span className="text-md text-slate-900 dark:text-slate-100">
                  {category.title}
                </span>
                <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full bg-cyan-400">
                  <span
                    className="text-xs font-normal leading-none max-w-full flex-initial
                  text-slate-900 "
                  >
                    {category.contentcount}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
