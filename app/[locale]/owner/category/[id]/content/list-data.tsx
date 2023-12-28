"use client";
import { categoryApi } from "@/api/category";
import { contentApi } from "@/api/content";
import { PaginationDirectComponent } from "@/components/custom";
import { useClientTranslate } from "@/language/translate-client";
import {
  capitalizeFirstLetter,
  generateURLWithQueryParams,
  getCountPage,
  getDateTime,
} from "@/utils/global-func";
import { enqueueSnackbar } from "notistack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AiFillFolderAdd } from "react-icons/ai";
import { BiSolidAddToQueue } from "react-icons/bi";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdOutlineBackupTable } from "react-icons/md";

interface IOwnerListContentInCategory {
  categoryId: string;
  searchParams: { [key: string]: string | undefined };
}

export const OwnerListContentInCategory = (
  props: IOwnerListContentInCategory
) => {
  const { categoryId, searchParams } = props;
  const translate = useClientTranslate();
  const { page, search } = searchParams;

  const [contents, setContents] = useState([]);
  const [count, setCount] = useState(0);
  const [isOutSide, setIsOutSide] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

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

  const fetchData = useCallback(() => {
    setLoading(true);
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
            enqueueSnackbar(item, { variant: "error" });
          });
        } else {
          enqueueSnackbar(
            error?.response ? error.response.data?.message : error.message,
            { variant: "error" }
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <>
      <div
        className="w-full sm:w-4/5 flex flex-col gap-2"
        style={{
          flex: 1,
        }}
      >
        {contents.map((content: any) => {
          return (
            <div
              key={`conten-item-dialog-${content._id}`}
              className="bg-slate-200 bg-opacity-60 flex flex-row items-center rounded-md p-2 gap-2"
            >
              <div className="flex flex-col h-full flex-1 gap-2">
                <span className="text-xs font-semibold text-left">
                  {content.title}
                </span>

                {content?.category ? (
                  <span className="text-xs font-light">
                    {content.category.title}
                  </span>
                ) : (
                  <span className="text-xs font-light">
                    Không thuộc thể loại nào.
                  </span>
                )}
                <span className="text-xs font-light">
                  {capitalizeFirstLetter(translate["CREATED_AT"])} :{" "}
                  {getDateTime(content.created_at)}
                </span>
              </div>

              <div
                onClick={() => {
                  contentApi
                    .updateContentCategory(content._id, categoryId)
                    .then(() => {
                      fetchData();
                    })
                    .catch((error) => {
                      if (Array.isArray(error?.response?.data?.message)) {
                        error?.response?.data?.message.forEach((item: any) => {
                          enqueueSnackbar(item, { variant: "error" });
                        });
                      } else {
                        enqueueSnackbar(
                          error?.response
                            ? error.response.data?.message
                            : error.message,
                          { variant: "error" }
                        );
                      }
                    });
                }}
              >
                {isOutSide ? (
                  <AiFillFolderAdd
                    className="mr-3 text-3xl text-slate-900 dark:text-slate-200
                  cursor-pointer"
                  />
                ) : (
                  <IoIosRemoveCircle
                    className="mr-3 text-3xl text-slate-900 dark:text-slate-200
                  cursor-pointer"
                  />
                )}
              </div>
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
