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
import { MdContactPhone } from "react-icons/md";

interface INav {
  url: string;
  name: string;
  key: string;
  require_owner: boolean;
  icon: IconType;
}

export const navigation_mock: INav[] = [
  {
    url: "/owner",
    name: "Tổng quang",
    key: "OVERVIEW",
    require_owner: false,
    icon: AiFillDashboard,
  },
  {
    url: "/owner/content",
    name: "Bài viết",
    key: "CONTENT",
    require_owner: false,
    icon: MdContentPaste,
  },
  {
    url: "/owner/category",
    name: "Thể loại",
    key: "CATEGORIES",
    require_owner: true,
    icon: BiCategoryAlt,
  },
  {
    url: "/owner/series",
    name: "Chuỗi bài viết",
    key: "SERIES",
    require_owner: false,
    icon: SiSteelseries,
  },
  {
    url: "/owner/member",
    name: "Thành viên",
    key: "MEMBERS",
    require_owner: true,
    icon: FaUserFriends,
  },
  {
    url: "/owner/contact",
    name: "Liên hệ",
    key: "CONTACT",
    require_owner: true,
    icon: MdContactPhone,
  },
  {
    url: "/owner/session",
    name: "Phiên",
    key: "SESSION",
    require_owner: false,
    icon: MdToken,
  },
  {
    url: "/owner/setting",
    name: "Thiết lập",
    key: "SETTING",
    require_owner: false,
    icon: AiFillSetting,
  },
];
