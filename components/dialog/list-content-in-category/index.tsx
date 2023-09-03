"use client";
import { apiCaller } from "@/api";
import { PaginationChangeComponent } from "@/components/custom";
import { getCountPage } from "@/utils/global-func";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSolidBookAdd } from "react-icons/bi";
import { IoIosRemoveCircle } from "react-icons/io";

interface ListContentInComponentProps {
  close: () => void;
  categoryId: string;
}

export const ListContentInCategoryDialog = (
  props: ListContentInComponentProps
) => {
  const { categoryId, close } = props;

  const [isOustSide, setIsOutSide] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const deferredSearch = useDeferredValue(search);
  const [contents, setContents] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  // const {
  //   isError,
  //   error,
  //   data: category,
  //   isLoading,
  // } = useQuery(
  //   ["ContentsByCategory", page, isOustSide, categoryId, deferredSearch],
  //   () => {
  //     const params = {
  //       skip: ((page - 1) * 5).toString(),
  //       take: "5",
  //       search: deferredSearch,
  //       outside: isOustSide.toString(),
  //     };
  //     return apiCaller.contentApi.getContentsByCategory(categoryId, params);
  //   },
  //   { cacheTime: 0 }
  // );

  // const controlMutantion = useMutation({
  //   mutationFn: async (contentId: string) => {
  //     return await callerInstance.content.updateContentCategory(
  //       contentId,
  //       categoryId
  //     );
  //   },

  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["ContentsByCategory"]);
  //     queryClient.refetchQueries(["ContentsByCategory"]);
  //   },
  // });

  const params = useMemo(
    () => ({
      skip: ((page - 1) * 5).toString(),
      take: "5",
      search: deferredSearch,
      outside: isOustSide.toString(),
    }),
    [deferredSearch, isOustSide, page]
  );

  useEffect(() => {
    apiCaller.contentApi
      .getContentsByCategory(categoryId, params)
      .then((res) => {
        const { data } = res;
        setContents(data.data);
        setTotal(data.max);
      });
  }, [categoryId, params]);

  return (
    <div className="dialog-box">
      <div
        className="bg-slate-100 rounded-md shadow-md"
        style={{
          height: "450px",
          width: "600px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              flex: 1,
            }}
          >
            ({total}) bài viết.
          </span>

          <AiFillCloseCircle
            className="text-red-500"
            style={{
              fontSize: "24px",
              cursor: "pointer",
            }}
            onClick={() => close()}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <div
            className="btn"
            style={{
              padding: "10px",
            }}
            onClick={() => {
              setIsOutSide(false);
            }}
          >
            <span>nằm trong</span>
          </div>
          <div
            className="btn"
            style={{
              padding: "10px",
            }}
            onClick={() => {
              setIsOutSide(true);
            }}
          >
            <span>ngoài</span>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {contents?.map((content: any) => {
            return (
              <div
                key={`conten-item-dialog-${content._id}`}
                className="bg-slate-400 bg-opacity-60"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <span
                  style={{
                    flex: 1,
                    fontSize: "14px",
                  }}
                >
                  {content.title}
                </span>
                {isOustSide ? (
                  <BiSolidBookAdd
                    className="text-green-500"
                    onClick={() => {
                      // controlMutantion.mutate(content._id);
                    }}
                    style={{
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <IoIosRemoveCircle
                    className="text-red-500"
                    onClick={() => {
                      // controlMutantion.mutate(content._id);
                    }}
                    style={{
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
        {total !== 0 ? (
          <PaginationChangeComponent
            current={page}
            total={getCountPage(total, 5)}
            onchange={(p: number) => {
              if (page !== p) {
                setPage(p);
              }
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
