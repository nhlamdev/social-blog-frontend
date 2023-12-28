import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      <Image src="/static/not-found.png" width={400} height={400} alt="photo" />

      <span className="text-md font-semibold">
        Nội dung bạn cần tìm không tồn tại.
      </span>

      <Link href={"/"} className="px-4 py-2 rounded-md bg-orange-400">
        <span className="font-semibold">Trang chủ</span>
      </Link>
    </main>
  );
}
