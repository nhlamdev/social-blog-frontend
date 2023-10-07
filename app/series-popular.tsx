import axios from "axios";
import Image from "next/image";
const backend = process.env.SERVICE_PORT;

interface ITopContent {
  _id: string;
  title: string;
  created_name: string;
  created_image: string;
  created_email: string;
  content_count: number;
  contents_avg_view: number;
  contents_total_views: number;
}

export const SeriesPopular = async () => {
  let topContents: ITopContent[] = [];

  const { data } = await axios.get(
    `http://localhost:${backend}/series/more-avg-views-content?take=3`
  );

  topContents = data;
  return (
    <div className="flex flex-col items-center pb-4">
      <div className="flex flex-col items-center">
        <p className="text-2xl font-semibold text-center p-2 ">
          Chuỗi bài viết tiêu biểu
        </p>

        <span className="h-[2px] w-1/5 bg-slate-400"></span>
      </div>

      <div className="flex flex-col gap-2 w-full items-center">
        {topContents.map((v) => {
          return (
            <div
              key={v._id}
              className="flex flex-col w-3/5 p-4 rounded-sm gap-4"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
            >
              <span className="text-md font-semibold">{v.title}</span>

              <div className="flex flex-row gap-2">
                <div className="w-6 h-6">
                  <Image
                    src={v.created_image}
                    className="object-cover rounded-full"
                    width={25}
                    height={25}
                    alt="photo"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold">
                    {v.created_name}
                  </span>
                  <span className="text-xs font-light">{v.created_email}</span>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div
                  className="flex flex-row gap-2 bg-slate-200 items-center justify-center
                  px-2 py-1 rounded-md"
                  style={{ border: "1px solid black" }}
                >
                  <span className="text-xs">Số bài viết :</span>
                  <span className="text-xs">{v.content_count}</span>
                </div>
                <div
                  className="flex flex-row gap-2 bg-slate-200 items-center justify-center
                  px-2 py-1 rounded-md"
                  style={{ border: "1px solid black" }}
                >
                  <span className="text-xs">Tổng lượi xem :</span>
                  <span className="text-xs">{v.contents_total_views}</span>
                </div>
                <div
                  className="flex flex-row gap-2 bg-slate-200 items-center justify-center
                  px-2 py-1 rounded-md"
                  style={{ border: "1px solid black" }}
                >
                  <span className="text-xs">Trung bình lượt xem :</span>
                  <span className="text-xs">{v.contents_avg_view}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
