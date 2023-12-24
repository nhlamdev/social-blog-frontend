import { serverTranslate } from "@/language/translate-server";
import "./style.scss";
import { WorkCycleMocks } from "@/constant";

export const WorkCycleComponent = () => {
  const translate = serverTranslate();
  return (
    <section className="gap-4 px-2 py-4 w-full work-cycle">
      <div className="w-full flex flex-row justify-center items-center gap-4">
        <div className="h-[2px] w-20 bg-slate-900 dark:bg-slate-100" />
        <h2
          className="text-center font-semibold text-slate-900
          text-lg sm:text-xl md:text-2xl dark:text-slate-100"
        >
          {translate["WORK_CYCLE"]}
        </h2>
        <div className="h-[2px] w-20 bg-slate-900 dark:bg-slate-100" />
      </div>

      <div className="work-cycle-items">
        {WorkCycleMocks.map((v, k) => {
          return (
            <div
              key={`work-cycle-item-${v.key}`}
              className="work-cycle-item before:blur-sm after:blur-sm mx-auto"
            >
              <picture
                className="cycle-image mx-auto  h-full !border-slate-800 dark:!border-slate-400
                rounded-md shadow-xl bg-white bg-opacity-0 backdrop-blur-md"
              >
                <img
                  className="w-[calc(100% - 8px)] m-2"
                  src={v.url}
                  alt={v.url}
                />
              </picture>

              <span
                className="text-slate-900 dark:text-slate-100 sm:!text-slate-100 
              border-slate-100 text-lg"
              >
                {translate[v.key]}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
