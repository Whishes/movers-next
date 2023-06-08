import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import MobileDashboard from "@/components/dashboard/mobile";

export const metadata: Metadata = {
  title: "Movers - Home",
  description: "Homepage",
};

export default async function Home() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <main className="flex-grow flex">
      <MobileDashboard />
    </main>
  );
}
