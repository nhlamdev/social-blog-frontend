export default function FullLoading() {
  return (
    <section className="flex flex-row gap-2 w-screen h-screen p-2 items-center justify-center">
      <div
        className=" bg-slate-200 rounded-md gap-4 py-14 px-20 shadow-md
          flex flex-col justify-center items-center"
      >
        <span className="text-lg select-none">Đang truyền nạp dữ liệu</span>

        <div className="flex gap-2 select-none">
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600 select-none"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600 select-none"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600 select-none"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
        </div>
      </div>
    </section>
  );
}
