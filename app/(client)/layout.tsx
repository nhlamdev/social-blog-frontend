import { ClientProviderComponent } from "@/provider";
import Image from "next/image";
interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout(props: ClientLayoutProps) {
  const { children } = props;

  return (
    <ClientProviderComponent>
      {children}
      <section className="flex flex-col p-4  gap-2">
        <div className="flex flex-row  gap-4 justify-center">
          <Image
            src="/logo/next-js.png"
            className="hover:scale-110 transition-transform cursor-pointer"
            width={40}
            height={40}
            style={{
              objectFit: "cover",
            }}
            alt="react-icon"
          />
          <Image
            src="/logo/nestjs-icon.png"
            className="hover:scale-110 transition-transform cursor-pointer"
            width={40}
            height={40}
            style={{
              objectFit: "cover",
            }}
            alt="react-icon"
          />
          <Image
            src="/logo/postgress-icon.png"
            className="hover:scale-110 transition-transform cursor-pointer"
            width={40}
            height={40}
            style={{
              objectFit: "cover",
            }}
            alt="react-icon"
          />
        </div>

        <p className="text-center text-sm font-semibold ">
          Copyright ©2023 by Nguyen Hoang Lam
        </p>
      </section>
    </ClientProviderComponent>
  );
}
