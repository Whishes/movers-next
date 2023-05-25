import Provider from "@/components/Provider";
import NavBar from "../components/nav/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import { getCurrentUser } from "@/lib/session";
// import { NextAuthProvider } from "../components/NextAuth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  title: "Movers",
  description: "An app to help moving",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-green-400 min-h-screen flex flex-col`}
      >
        <Provider>
          <NavBar session={session} status={session ? true : false} />
          {children}
        </Provider>
      </body>
    </html>
  );
}
