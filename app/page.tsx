import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import MobileDashboard from "@/components/dashboard/mobile/MobileDashboard";

export const metadata: Metadata = {
  title: "Movers - Home",
  description: "Homepage",
};

export default async function Home() {
  const user = getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  // detect if on mobile etc
  // let isMobile = window.matchMedia("(max-width: 600px)").matches;

  return (
    <main className="flex-grow flex">
      <MobileDashboard />
    </main>
  );
}
