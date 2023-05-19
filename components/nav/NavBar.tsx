"use client";

import React from "react";
import { useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { Session } from "next-auth";

const NavBar = ({
  session,
  status,
}: {
  session: Session | null;
  status: boolean;
}) => {
  const [navbar, setNavbar] = useState(false);
  // const { data: session, status } = useSession();

  return (
    <header className="flex h-16 justify-between items-center">
      <h2 className="ml-5"></h2>
      <nav className="mr-5 flex items-center justify-center gap-4 ">
        {/* TABLET/DESKTOP STUFF */}
        <DesktopNav session={session} status={status} />
        {/* MOBILE STUFF */}
        <MobileNav navbar={navbar} setNavBar={setNavbar} />
      </nav>
    </header>
  );
};

export default NavBar;
