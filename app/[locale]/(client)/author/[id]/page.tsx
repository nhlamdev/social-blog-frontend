import { AuthorTabsView } from "@/components/tabs-view";
import { PageProps } from "@/interface";
import { capitalizeFirstLetter, getDateTime } from "@/utils/global-func";
import axios from "axios";
import Image from "next/image";
import { FollowButton } from "./follow-btn";
import { serverTranslate } from "@/language/translate-server";

const backend = process.env.SERVICE_PORT;

export default async function ContentInAuthorPage(props: PageProps) {
  const { params } = props;

  const { id } = params;
  const translate = serverTranslate();

  const { data: author } = await axios.get(
    `http://localhost:${backend}/member/by-id/${id}`
  );

  const { data: followers } = await axios.get(
    `http://localhost:${backend}/member/followers/${id}`
  );

  return (
    <div
      className="min-h-screen flex flex-col w-full items-center gap-4
    py-2 px-4 sm:py-4 sm:px-8"
    >
      <div className="flex flex-row w-full gap-4 items-center">
        <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 relative">
          <Image
            src={`/service/${author.image}`}
            className="rounded-full shadow-lg "
            fill
            style={{ objectFit: "cover", border: "4px solid white" }}
            alt="photo"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span
            className="text-sm sm:text-md md:text-lg font-semibold 
          text-gray-900 dark:text-gray-200"
          >
            {capitalizeFirstLetter(translate["AUTHOR"])} : {author.name}
          </span>
          <span
            className="text-xs sm:text-sm md:text-md font-light 
          text-gray-900 dark:text-gray-200"
          >
            {capitalizeFirstLetter(translate["EMAIL_ADDRESS"])} : {author.email}
          </span>
          <span
            className="text-xs md:text-md font-light 
          text-gray-900 dark:text-gray-200"
          >
            {capitalizeFirstLetter(translate["JOIN_AT"])} :{" "}
            {getDateTime(author.created_at)}
          </span>

          <FollowButton author={author} />
        </div>
      </div>

      <AuthorTabsView author={author} followers={followers} />
    </div>
  );
}
