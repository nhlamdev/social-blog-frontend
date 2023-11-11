import { AuthorTabsView } from "@/components/tabs-view";
import { PageProps } from "@/interface";
import { getDateTime } from "@/utils/global-func";
import axios from "axios";
import Image from "next/image";

const backend = process.env.SERVICE_PORT;

export default async function ContentInAuthorPage(props: PageProps) {
  const { params } = props;

  const { id } = params;

  const { data: member } = await axios.get(
    `http://localhost:${backend}/author/${id}`
  );

  return (
    <div className="min-h-screen flex flex-col w-full py-4 px-10 items-center gap-4">
      <div className="flex flex-row w-full gap-4 items-center">
        <Image
          src={member.image}
          className="rounded-full shadow-lg "
          width={150}
          height={150}
          style={{ objectFit: "cover", border: "4px solid white" }}
          alt="photo"
        />

        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
            Tác giả : {member.name}
          </span>
          <span className="text-md font-light text-gray-900 dark:text-gray-200">
            Đia chỉ mail : {member.email}
          </span>
          <span className="text-md font-light text-gray-900 dark:text-gray-200">
            Tham gia lúc : {getDateTime(member.created_at)}
          </span>
        </div>
      </div>

      <AuthorTabsView member={member} />
    </div>
  );
}
