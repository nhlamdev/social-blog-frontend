import {
  AiFillDashboard,
  AiFillSetting,
  AiOutlineLineChart,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import { MdContentPaste, MdToken } from "react-icons/md";
import { SiSteelseries } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";

interface INav {
  url: string;
  name: string;
  require_owner: boolean;
  icon: IconType;
}

export const navigation_mock: INav[] = [
  {
    url: "/owner",
    name: "Tổng quang",
    require_owner: false,
    icon: AiFillDashboard,
  },
  {
    url: "/owner/content",
    name: "Bài viết",
    require_owner: false,
    icon: MdContentPaste,
  },
  {
    url: "/owner/category",
    name: "Thể loại",
    require_owner: true,
    icon: BiCategoryAlt,
  },
  {
    url: "/owner/series",
    name: "Chuỗi bài viết",
    require_owner: false,
    icon: SiSteelseries,
  },
  {
    url: "/owner/member",
    name: "Thành viên",
    require_owner: true,
    icon: FaUserFriends,
  },
  {
    url: "/owner/contact",
    name: "Liên hệ",
    require_owner: true,
    icon: FaUserFriends,
  },
  {
    url: "/owner/session",
    name: "Phiên",
    require_owner: false,
    icon: MdToken,
  },
  {
    url: "/owner/setting",
    name: "Thiết lập",
    require_owner: false,
    icon: AiFillSetting,
  },
];
