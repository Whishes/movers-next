import type { ReactNode } from "react";

export interface LineButtonProps {
  children: ReactNode;
  func?: () => void;
  disabled?: boolean;
}

const LineButton: React.FC<LineButtonProps> = ({
  children,
  func = undefined,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={func}
      className="rounded shadow bg-white hover:shadow-none hover:bg-yellow-300"
    >
      {children}
    </button>
  );
};

export default LineButton;
