import { ProviderComponent } from "@/provider";
import "@/styles/global.scss";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <ProviderComponent>{children}</ProviderComponent>

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

        <script
          defer
          src="https://cdn.jsdelivr.net/npm/@preline/preline@1.0.0/dist/hs-ui.bundle.min.js"
        />
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.js"
        />
      </body>
    </html>
  );
}
