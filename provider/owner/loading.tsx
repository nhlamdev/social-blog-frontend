export const OwnerFullLoading = () => {
  return (
    <div className="flex flex-row gap-2 w-screen p-2">
      <nav
        className="h-96 w-60  rounded-md bg-slate-200 shadow-md animate-pulse 
                    bg-opacity-40 p-4 min-w-fit shadow-slate-600 dark:shadow-slate-800"
      />

      <section className="flex flex-col gap-4 h-full w-full">
        <div className="flex flex-row w-full gap-4">
          <div
            className="h-20 w-8/12 rounded-md bg-slate-200 shadow-md animate-pulse 
          bg-opacity-40 p-4 min-w-fit shadow-slate-600 dark:shadow-slate-800"
          />

          <div
            className="h-20 w-4/12 flex-3 rounded-md bg-slate-200 shadow-md animate-pulse 
          bg-opacity-40 p-4 min-w-fit shadow-slate-600 dark:shadow-slate-800"
          />
        </div>

        <div
          className="h-full w-full rounded-md bg-slate-200 shadow-md animate-pulse 
          bg-opacity-40 p-4 min-w-fit shadow-slate-600 dark:shadow-slate-800"
        />
      </section>
    </div>
  );
};
