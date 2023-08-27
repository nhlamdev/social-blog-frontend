import Image from "next/image";
export default function ClientContentsPage() {
  return (
    <main>
      <header
        style={{
          backgroundImage: 'url("/background/OIG (2).jfif")',
          // backgroundColor: "#fff",
          // backgroundBlendMode: "multiply",
          height: "100vh",
          width: "100vw",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
        className="w-screen h-screen"
      ></header>
    </main>
  );
}
