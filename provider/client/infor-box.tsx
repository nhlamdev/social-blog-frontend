import Image from "next/image";

interface NavInfoBoxProps {
  profile: any;
}

export const NavInfoBox = (props: NavInfoBoxProps) => {
  const { profile } = props;

  return (
    <div className="flex flex-row gap-2 items-center">
      <span className="text-sm font-semibold">
        {profile.role === "owner" ? "Quản trị viên" : profile.name}
      </span>

      <img
        src={profile.role === "owner" ? "/avatar/test.jpg" : profile.image}
        className="w-10 h-10 rounded-full"
        style={{ border: "1px solid #fff" }}
        alt="photo"
      />
    </div>
  );
};
