import { AuthFormAction } from "@/components/form";

export default function AuthenPage() {
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
