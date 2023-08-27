import { AuthFormAction } from "@/components/form";
import { axiosInstance } from "@/helper";
import { cookies } from "next/headers";
export default async function AuthPage() {
  await axiosInstance
    .get("/service/profile", {
      headers: {
        Cookie: cookies().toString(),
      },
    })
    .then((res) => {
      console.log(res.data);
    });

  return (
    <main
      style={{
        backgroundImage: 'url("/background/login.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <AuthFormAction />
    </main>
  );
}
