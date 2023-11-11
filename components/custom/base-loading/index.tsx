interface IBaseLoading {
  title?: string;
}

export const BaseLoading = (props: IBaseLoading) => {
  const { title } = props;
  return (
    <div
      className=" bg-slate-200 rounded-lg shadow-md p-4 bg-opacity-60 w-fit
      flex flex-col gap-2"
    >
      <span className="text-sm text-center">
        {title ? title : "Đang truyền nạp dữ liệu"}
      </span>

      <div className="flex flex-row w-full justify-center gap-2">
        <div className="h-2 w-2 bg-slate-800 rounded-full animate-bounce animate-delay-0" />
        <div className="h-2 w-2 bg-slate-800 rounded-full animate-bounce animate-delay-100" />
        <div className="h-2 w-2 bg-slate-800 rounded-full animate-bounce animate-delay-200" />
        <div className="h-2 w-2 bg-slate-800 rounded-full animate-bounce animate-delay-300" />
        <div className="h-2 w-2 bg-slate-800 rounded-full animate-bounce animate-delay-400" />
      </div>
    </div>
  );
};
