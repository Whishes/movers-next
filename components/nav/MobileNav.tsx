"use client";

import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { Session } from "next-auth";
import { RxExit } from "react-icons/rx";
import { signOut } from "next-auth/react";
import { useState } from "react";

const MobileNav = ({
  session,
  status,
}: {
  session: Session | null;
  status: boolean;
}) => {
  const [navbar, setNavbar] = useState(false);

  const handleNav = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="sm:hidden flex items-center justify-center">
      <button onClick={() => handleNav()}>
        <RxHamburgerMenu size={28} />
      </button>
      <div
        className={
          navbar
            ? "fixed right-0 top-0 w-full sm:hidden h-full bg-blue-500 p-5 linear duration-500 flex items-center z-10"
            : "fixed right-[-100%] w-full ease-in duration-500 top-0 p-5 h-full flex items-center"
        }
      >
        <div className="w-full">
          <button
            onClick={() => handleNav()}
            className="absolute right-5 top-5"
          >
            <RxCross1 size={28} />
          </button>
          <div className="">
            <ul className="flex-col w-full ">
              {status ? (
                <>
                  <li className="py-4 hover:bg-blue-400 flex justify-center items-center text-2xl">
                    <button onClick={() => signOut()}>Sign Out</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/login"
                      onClick={handleNav}
                      className="py-4 hover:bg-blue-400 flex justify-center items-center text-2xl"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/register"
                      onClick={handleNav}
                      className="py-4 hover:bg-blue-400 flex justify-center items-center text-2xl"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

// py-4 hover:bg-blue-400 flex justify-center items-center text-2xl
