export const MEMBER_ROLE: { key: string; value: string }[] = [
  { key: "member", value: "Thành viên" },
  { key: "writer", value: "Tác giả" },
  { key: "developer", value: "Lập trình viên" },
  { key: "owner", value: "Quản trị viên" },
];

interface IWorkMakeItem {
  key: string;
  url: string;
  display: string;
}

export const WorkCycleMocks: IWorkMakeItem[] = [
  { key: "WORKING", display: "Làm việc", url: "/svg/developer.svg" },
  { key: "UPGRADE", display: "Học hỏi", url: "/svg/read-book.svg" },
  { key: "RELAX", display: "Thư giãn", url: "/svg/relax.svg" },
];

export const LANGUAGE = ["vi", "en"];
