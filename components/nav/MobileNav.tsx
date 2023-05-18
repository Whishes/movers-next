import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const MobileNav = ({
  navbar,
  setNavBar,
}: {
  navbar: boolean;
  setNavBar: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleNav = () => {
    setNavBar(!navbar);
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
              <Link href="/">
                <li className="py-4 hover:bg-blue-400 flex justify-center items-center text-2xl">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 hover:bg-blue-400 flex justify-center items-center text-2xl">
                  Test
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
