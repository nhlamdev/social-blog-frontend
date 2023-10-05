import { AuththorsBoxDisplay } from "@/components/list-view/author-box";
import axios from "axios";
import Image from "next/image";
const backend = process.env.SERVICE_PORT;

export default async function AuthorContentPage() {
  const { data: members } = await axios.get(
    `http://localhost:${backend}/content/all-author`
  );

  return (
    <div className="min-h-screen flex flex-row w-full p-4 gap-4 ">
      <AuththorsBoxDisplay members={members} />
    </div>
  );
}
