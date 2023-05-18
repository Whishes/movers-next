import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import LoginPage from "./(auth)/login/page";

export default async function Home() {
  const session = await getCurrentUser();

  console.log("line 9 page.ts", session);
  console.log("______________________________");

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="flex flex-col items-center justify-between p-24 font-semibold">
      <h1 className="text-2xl">Main Page</h1>
    </main>
  );
}
