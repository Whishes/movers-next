"use client";

import React from "react";
import { useState } from "react";
import SlideInMenu from "./SlideInMenu";
import DesktopNav from "./DesktopNav";
import { Session } from "next-auth";

const NavBar = ({
  session,
  status,
}: {
  session: Session | null;
  status: boolean;
}) => {
  // const { data: session, status } = useSession();

  return (
    <header className="flex h-16 justify-between items-center">
      <h2 className="ml-5">Movers</h2>
      <nav className="mr-5 flex items-center justify-center gap-4 ">
        {/* TABLET/DESKTOP STUFF */}
        <DesktopNav session={session} status={status} />
        {/* MOBILE STUFF */}
        <SlideInMenu session={session} status={status} />
      </nav>
    </header>
  );
};

export default NavBar;
