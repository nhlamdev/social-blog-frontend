"use client";
import { apiCaller } from "@/api";
import { PaginationChangeComponent } from "@/components/custom";
import { getCountPage } from "@/utils/global-func";
import { enqueueSnackbar } from "notistack";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSolidBookAdd } from "react-icons/bi";
import { IoIosRemoveCircle } from "react-icons/io";

interface ListContentInComponentProps {
  close: () => void;
  seriesId: string;
}

export const ListContentInSeriesDialog = (
  props: ListContentInComponentProps
) => {
  const { seriesId, close } = props;

  const [isOustSide, setIsOutSide] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const deferredSearch = useDeferredValue(search);
  const [page, setPage] = useState(1);
  const [contents, setContents] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  const params = useMemo(
    () => ({
      skip: ((page - 1) * 5).toString(),
      take: "5",
      search: deferredSearch,
      outside: isOustSide.toString(),
    }),
    [deferredSearch, isOustSide, page]
  );

  const submit = async (contentId: string) => {
    await apiCaller.contentApi
      .updateContentSeries(contentId, seriesId)
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
      });

    apiCaller.contentApi
      .getContentsBySeries(seriesId, params)
      .then((res) => {
        const { data } = res;
        setContents(data.data);
        setTotal(data.max);
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
      });
  };

  useEffect(() => {
    apiCaller.contentApi
      .getContentsBySeries(seriesId, params)
      .then((res) => {
        const { data } = res;
        setContents(data.data);
        setTotal(data.max);
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
      });
  }, [seriesId, params]);

  return (
    <div className="dialog-box">
      <div
        style={{
          backgroundColor: "#fff",
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
          {contents.map((content: any) => {
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
                      submit(content._id);
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
                      submit(content._id);
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
