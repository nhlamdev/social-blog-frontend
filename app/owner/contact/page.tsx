import { ContactTableComponent } from "@/components/table/client-contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <ContactTableComponent />
    </div>
  );
}
