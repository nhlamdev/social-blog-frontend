import axios from "axios";
import Image from "next/image";
import { serverTranslate } from "@/language/translate-server";
import { capitalizeFirstLetter } from "@/utils/global-func";
import Link from "next/link";

const backend = process.env.SERVICE_PORT;

interface IContentItem {
  _id: string;
  title: string;
  created_at: string;
  watches: string[];
  created_by_id: string;
  created_by_name: string;
  created_by_email: string;
  created_by_image: string;
  comments_count: string;
}

export const ContentMoreComments = async () => {
  let contents: IContentItem[];

  const translate = serverTranslate();

  const { data } = await axios.get(
    `http://localhost:${backend}/content/more-comments?take=3`
  );

  contents = data;

  if (!contents || contents.length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-center pb-4 gap-4">
      <div className="flex flex-col items-center w-full">
        <p
          className="text-2xl font-semibold text-center p-2 
        text-slate-900 dark:text-slate-100"
        >
          {translate["TOP_CONTENT_MORE_COMMENTS"]}
        </p>

        <span className="h-[2px] w-1/5 bg-slate-900 dark:bg-slate-100"></span>
      </div>

      <div className="flex flex-col gap-2 w-full items-center">
        {contents.map((v) => {
          return (
            <Link
              href={`/content/${v._id}`}
              key={v._id}
              className="flex flex-col  md:w-4/5 lg:w-3/5 w-full p-4 rounded-sm gap-4
              bg-slate-400 bg-opacity-40 shadow-md cursor-pointer"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
            >
              <span className="text-md font-semibold text-slate-900 dark:text-slate-100">
                {v.title}
              </span>

              <div className="flex flex-row gap-2">
                <div className="w-6 h-6">
                  <Image
                    src={`/service/${v.created_by_image}`}
                    className="object-cover rounded-full"
                    width={25}
                    height={25}
                    alt="photo"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                    {v.created_by_name}
                  </span>
                  <span className="text-xs font-light text-slate-900 dark:text-slate-100  ">
                    {v.created_by_email}
                  </span>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div
                  className="flex flex-row gap-2 items-center justify-center px-2 py-1 rounded-sm 
                  border-slate-900 dark:border-slate-100 border-2 border-solid"
                >
                  <span className="text-xs text-slate-900 dark:text-slate-100">
                    {capitalizeFirstLetter(translate["TOTAL_COMMENTS"])} :
                  </span>
                  <span className="text-xs text-slate-900 dark:text-slate-100">
                    {v.comments_count}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
