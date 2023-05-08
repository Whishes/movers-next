import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="flex h-16 justify-between items-center">
      <h2 className="text-3xl">Movers</h2>
      <nav className="mr-5 flex items-center justify-center gap-4">
        {/* try adding hover animation to the border bottom */}
        <Link
          className="grow-bar grow-bar-animation p-2 after:bg-blue-500"
          href="/"
        >
          Home
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
