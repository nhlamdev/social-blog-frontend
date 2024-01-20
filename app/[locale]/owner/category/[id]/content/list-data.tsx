"use client";
import { categoryApi } from "@/api-client/category";
import { contentApi } from "@/api-client/content";
import { PaginationComponent } from "@/components/custom";
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
  const [total, setTotal] = useState(0);
  const [isOutSide, setIsOutSide] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const current = useMemo(
    () =>
      page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
        ? Number(page) - 1
        : 0,
    [page]
  );

  const params = useMemo(() => {
    let values: {
      skip?: string;
      take: string;
      search?: string;
      outside: string;
    } = {
      take: "5",
      outside: isOutSide.toString(),
    };

    if (current !== 0) {
      values["skip"] = (current * 5).toString();
    }

    if (Boolean(search) && typeof search === "string") {
      values["search"] = search;
    }

    return values;
  }, [current, isOutSide, search]);

  const fetchData = useCallback(() => {
    setLoading(true);
    categoryApi
      .ContentInCategory(categoryId, params)
      .then((res) => {
        const { contents, count } = res.data;
        setContents(contents);
        setTotal(count);
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
                style={{
                  display: isOutSide ? "inline" : "none",
                }}
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
                <AiFillFolderAdd
                  className="mr-3 text-3xl text-slate-900 dark:text-slate-200
                  cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>

      {getCountPage(total, 8) > 1 ? (
        <PaginationComponent
          searchParams={searchParams}
          currentPage={current + 1}
          maxPage={getCountPage(total, 8)}
          queryName="page"
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
