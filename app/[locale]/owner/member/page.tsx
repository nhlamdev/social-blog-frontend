import { OwnerMemberTable } from "@/components/table/owner-member";
import { PageProps } from "@/interface";
import { OwnerMembersHead } from "./head";

export default async function OwnerMemberPage(props: PageProps) {
  const { searchParams } = props;

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <OwnerMembersHead searchParams={searchParams} />
      <OwnerMemberTable searchParams={searchParams} />
    </div>
  );
}
