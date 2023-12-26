"use client";
import { ClientProviderComponent } from "@/provider";
import Image from "next/image";

interface ClientLayoutProps {
  children: React.ReactNode;
  params: any;
}

const technical_logo = [
  {
    key: "next",
    image: "/static/logo/next-js.png",
  },
  {
    key: "nest",
    image: "/static/logo/nest-icon.png",
  },
  {
    key: "postgres",
    image: "/static/logo/postgres-icon.png",
  },
];

export default function ClientLayout(props: ClientLayoutProps) {
  const { children, params } = props;

  return (
    <ClientProviderComponent>
      {children}
      <section className="flex flex-col p-4  gap-4 bg-cyan-200 dark:bg-slate-600 bg-opacity-40">
        <div className="flex flex-row  gap-4 justify-center ">
          {technical_logo.map((icon) => {
            return (
              <Image
                key={`home-${icon.key}-icon`}
                src={icon.image}
                className="hover:scale-110 transition-transform cursor-pointer"
                width={30}
                height={30}
                style={{
                  objectFit: "cover",
                }}
                alt={`${icon.key} icon`}
              />
            );
          })}
        </div>

        <h3 className="text-center text-sm font-semibold text-slate-900 dark:text-slate-100">
          Copyright ©2023 by Nguyen Hoang Lam
        </h3>
      </section>
    </ClientProviderComponent>
  );
}
