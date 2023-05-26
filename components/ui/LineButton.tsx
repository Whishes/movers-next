import type { ReactNode } from "react";

export default function LineButton({
  children,
  func,
}: {
  children: ReactNode;
  func: () => void;
}) {
  return (
    <button
      onClick={func}
      className="rounded shadow bg-white hover:shadow-none hover:bg-yellow-300"
    >
      {children}
    </button>
  );
}
