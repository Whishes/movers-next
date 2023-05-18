import { RxExit } from "react-icons/rx";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Session } from "next-auth";

const DesktopNav = ({
  session,
  status,
}: {
  session: Session | null;
  status: string | null;
}) => {
  return (
    <div className="hidden sm:flex">
      <ul className="flex items-center justify-center gap-2">
        {status === "authenticated" ? (
          <>
            <li className="flex justify-center">
              <p>signed in as {session?.user?.name}</p>
            </li>
            <li className="flex justify-center">
              <button onClick={() => signOut()}>
                <RxExit size={20} />
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                href="/login"
                className="flex grow-bar grow-bar-animation p-2 after:bg-blue-500"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="flex grow-bar grow-bar-animation p-2 after:bg-blue-500"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DesktopNav;
