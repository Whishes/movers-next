import Provider from "@/components/Provider";
import NavBar from "../components/nav/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
