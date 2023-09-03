import { AiFillDashboard, AiFillSetting } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import { MdContentPaste } from "react-icons/md";
import { SiSteelseries } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";

interface INav {
  url: string;
  name: string;
  icon: IconType;
}

export const navigation_mock: INav[] = [
  {
    url: "/owner/statistical",
    name: "Thống kê",
    icon: AiFillDashboard,
  },
  {
    url: "/owner/content",
    name: "Bài viết",
    icon: MdContentPaste,
  },
  {
    url: "/owner/category",
    name: "Thể loại",
    icon: BiCategoryAlt,
  },
  {
    url: "/owner/series",
    name: "Chuỗi bài viết",
    icon: SiSteelseries,
  },
  {
    url: "/owner/member",
    name: "Thành viên",
    icon: FaUserFriends,
  },
  {
    url: "/owner/setting",
    name: "Thiết lập",
    icon: AiFillSetting,
  },
];
