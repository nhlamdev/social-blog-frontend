"use client";
import "./index.scss";
interface PaginationChangeComponentProps {
  current: number;
  total: number;
  onchange: (page: number) => void;
}

export const PaginationChangeComponent = (
  props: PaginationChangeComponentProps
) => {
  const { current, total, onchange } = props;

  const paginationItem = (page: string | number) => {
    return (
      <div
        className="bg-slate-100 bg-opacity-60"
        style={{
          display: "flex",
          padding: "10px",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          boxShadow: "rgba(0, 0, 0, 0.64) 0px 3px 8px",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => onchange(Number(page))}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          {page}
        </span>
      </div>
    );
  };

  return (
    <div
      style={{
        gap: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {current !== 1 ? paginationItem("1") : <></>}
      {current > 2 ? paginationItem(current - 1) : <></>}
      {paginationItem(current)}
      {current < total - 1 ? paginationItem(current + 1) : <></>}
      {current < total ? paginationItem(total) : <></>}
    </div>
  );
};
