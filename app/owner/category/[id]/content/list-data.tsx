"use client";
import { categoryApi } from "@/api/category";
import { PaginationDirectComponent } from "@/components/custom";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import { MdOutlineBackupTable } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";

interface IOwnerListContentInCategory {
  categoryId: string;
  searchParams: { [key: string]: string | undefined };
}

export const OwnerListContentInCategory = (
  props: IOwnerListContentInCategory
) => {
  const { categoryId, searchParams } = props;
  const { page, search } = searchParams;

  const [contents, setContents] = useState([]);
  const [count, setCount] = useState(0);
  const [isOutSide, setIsOutSide] = useState<boolean>(true);

  const current = useMemo(
    () =>
      page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
        ? Number(page) - 1
        : 0,
    [page]
  );

  const params = useMemo(
    () => ({
      skip: (current * 5).toString(),
      take: "5",
      search: search ? search : "",
      outside: isOutSide.toString(),
    }),
    [current, isOutSide, search]
  );

  useEffect(() => {
    categoryApi
      .ContentInCategory(categoryId, params)
      .then((res) => {
        const { data, max } = res.data;
        setContents(data);
        setCount(max);
      })
      .catch((error) => {
        if (Array.isArray(error?.response?.data?.message)) {
          error?.response?.data?.message.forEach((item: any) => {
            console.log(item);
          });
        } else {
          console.log(
            error?.response ? error.response.data?.message : error.message
          );
        }
      });
  }, [categoryId, params]);

  return (
    <>
      <div
        className="w-4/5 flex flex-col gap-4"
        style={{
          flex: 1,
        }}
      >
        {contents.map((content: any) => {
          return (
            <div
              key={`conten-item-dialog-${content._id}`}
              className="bg-slate-400 bg-opacity-60 flex flex-row items-center rounded-md p-2 gap-2"
            >
              <Image
                src={`/service/${content.image.fileName}`}
                className="rounded-md shadow-lg"
                width={80}
                height={40}
                alt="photo"
              />

              <div className="flex flex-col h-full flex-1 gap-2">
                <span className="text-xs font-semibold text-left">
                  {content.title}
                </span>

                {content?.category ? (
                  <span className="text-xs font-light">
                    {content.category.title}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <IoIosRemoveCircle className="mr-3 text-3xl text-rose-500 cursor-pointer" />
            </div>
          );
        })}
      </div>
      {count !== 0 ? (
        <PaginationDirectComponent
          current={current + 1}
          total={getCountPage(count, 5)}
          urlDirect={(p: number) => {
            const clone = { ...searchParams, page: p.toString() };

            return generateURLWithQueryParams(
              `/owner/category/${categoryId}/content`,
              clone
            );
          }}
        />
      ) : (
        <></>
      )}

      <div
        className="absolute bottom-4 right-4 cursor-pointer"
        onClick={() => setIsOutSide(!isOutSide)}
      >
        {isOutSide ? (
          <MdOutlineBackupTable className="text-3xl" />
        ) : (
          <BiSolidAddToQueue className="text-3xl" />
        )}
      </div>
    </>
  );
};
