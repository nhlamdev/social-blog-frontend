import Image from "next/image";
export const EmptyDataComponent = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
      <Image
        src="/static/no-data.png"
        className="p-4 bg-cyan-600 bg-opacity-40 rounded-full shadow-xl"
        width={100}
        height={100}
        alt="empty-data"
      />

      <span className="text-lg">Không tìm thấy dữ liệu mà bạn cần tìm</span>
    </div>
  );
};
