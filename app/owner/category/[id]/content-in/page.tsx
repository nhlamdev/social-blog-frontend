import { PaginationDirectComponent } from "@/components/custom";
import { PageProps } from "@/interface";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

const backend = process.env.SERVICE_PORT;

export default async function ContentInCategoryPage(props: PageProps) {
  const { searchParams, params: queryParams } = props;

  const { id } = queryParams;
  const { page, search } = searchParams;

  let contents: any;

  if (!id) {
    notFound();
  }

  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  const params = {
    skip: (current * 5).toString(),
    take: "5",
    search: search ? search : "",
    outside: true.toString(),
  };

  const url = generateURLWithQueryParams(
    `http://localhost:${backend}/content/by-category/${id}`,
    params
  );

  try {
    const { data } = await axios.get(url, {
      headers: {
        Cookie: cookies().toString(),
      },
    });

    if (!data) {
      notFound();
    }

    contents = data;
  } catch (error: any) {
    if (Array.isArray(error?.response?.data?.message)) {
      error?.response?.data?.message.forEach((item: any) => {
        console.log(item);
      });
    } else {
      console.log(
        error?.response ? error.response.data?.message : error.message
      );
    }
  }

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <div
        className="w-4/5 flex flex-col gap-4"
        style={{
          flex: 1,
        }}
      >
        {contents.data.map((content: any) => {
          return (
            <Link
              href={`/owner/content/${content._id}`}
              key={`conten-item-dialog-${content._id}`}
              className="bg-slate-400 bg-opacity-60 flex flex-row rounded-md"
              style={{
                alignItems: "center",
                padding: "10px",
                gap: "10px",
              }}
            >
              <picture>
                <img
                  src={`/service/${content.image.fileName}`}
                  className="h-16 aspect-video rounded-md shadow-lg"
                  style={{ objectFit: "cover" }}
                  alt="photo"
                />
              </picture>

              <div>
                <span
                  className="text-sm text-left"
                  style={{
                    flex: 1,
                  }}
                >
                  {content.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {contents && contents.max !== 0 ? (
        <PaginationDirectComponent
          current={current + 1}
          total={getCountPage(contents.max, 5)}
          urlDirect={(p: number) => {
            const clone = { ...searchParams, page: p.toString() };

            return generateURLWithQueryParams(
              "/owner/category/9832e7a0-6655-44f1-baa4-525ae5b7cc2c/content-in",
              clone
            );
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
