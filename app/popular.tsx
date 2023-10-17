import { getDateTime } from "@/utils/global-func";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
const backend = process.env.SERVICE_PORT;

export const PopularItemsComponent = async () => {
  const { data: topContents } = await axios.get(
    `http://localhost:${backend}/content/more-view?take=3`
  );

  const { data: topCategoryMoreContent } = await axios.get(
    `http://localhost:${backend}/category/more-contents?take=5`
  );

  return (
    <section>
      <div className="flex lg:flex-row flex-col gap-2 px-2 py-4">
        <div style={{ flex: 2 }} className="flex flex-col gap-2">
          <span className="text-2xl font-semibold text-center p-2 ">
            Nội dung tiêu biểu
          </span>

          {topContents.map((content: any) => {
            return (
              <Link
                href={`/content/${content._id}`}
                key={content._id}
                className="flex flex-row gap-2"
              >
                <picture>
                  <img
                    src={`/service/${content.image.fileName}`}
                    className="object-cover relative w-72 h-40"
                    alt="Landscape picture"
                  />
                </picture>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2">
                    {content?.category ? (
                      <div className="bg-orange-400 px-2 py-1 rounded-md">
                        <span className="text-sm text-slate-50 font-semibold">
                          {content.category.title}
                        </span>
                      </div>
                    ) : (
                      <></>
                    )}

                    <span className="text-xs">
                      {getDateTime(content.created_at)}
                    </span>
                  </div>
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
                      <span className="text-xs font-semibold">
                        {content.created_by.name}
                      </span>
                      <span className="text-xs font-light">
                        {content.created_by.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-md">{content.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
        {/* ----------- */}
        <div style={{ flex: 1 }} className="flex flex-col gap-4">
          <span className="text-xl font-semibold ">Thể loại</span>
          <div className="flex flex-col gap-2">
            {topCategoryMoreContent.map((category: any) => {
              return (
                <Link
                  href={`/content?sortCase=TIME_DESC&category=${category._id}`}
                  key={category._id}
                  className="flex flex-row items-center p-2 gap-2 rounded-md bg-slate-200 justify-between w-3/4"
                >
                  <span className="text-md">{category.title}</span>
                  <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-red-100 bg-red-700 border border-red-700 ">
                    <span className="text-xs font-normal leading-none max-w-full flex-initial">
                      {category.contentcount}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
