import { AiFillDashboard } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import { MdContentPaste } from "react-icons/md";
import { SiSteelseries } from "react-icons/si";

interface INav {
  url: string;
  name: string;
  icon: IconType;
  require_role: boolean;
}

export const navigation_mock: INav[] = [
  {
    url: "/dashboard",
    name: "Thống kê",
    require_role: false,
    icon: AiFillDashboard,
  },
  {
    url: "/dashboard/content",
    name: "Bài viết",
    require_role: false,
    icon: MdContentPaste,
  },
  {
    url: "/dashboard/category",
    name: "Thể loại",
    require_role: false,
    icon: BiCategoryAlt,
  },
  {
    url: "/dashboard/series",
    name: "Chuỗi bài viết",
    require_role: false,
    icon: SiSteelseries,
  },
  {
    url: "/dashboard/series",
    name: "Thành viên",
    require_role: false,
    icon: SiSteelseries,
  },
  {
    url: "/dashboard/series",
    name: "Thiết lập",
    require_role: false,
    icon: SiSteelseries,
  },
];
