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
  { key: "WORKING", display: "Làm việc", url: "/static/svg/developer.svg" },
  { key: "UPGRADE", display: "Học hỏi", url: "/static/svg/read-book.svg" },
  { key: "RELAX", display: "Thư giãn", url: "/static/svg/relax.svg" },
];

export type CaseViewType = "CONTENT" | "SERIES" | "TAGS" | "FOLLOWED";

export const CaseAuthorType: CaseViewType[] = [
  "CONTENT",
  "SERIES",
  "TAGS",
  "FOLLOWED",
];

export const LANGUAGE = ["vi", "en"];
