import { ReactNode } from "react";

type ButtonWhiteTextProps = {
  children: ReactNode;
  href?: string;
  download?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function ButtonWhiteText({
  children,
  href,
  download,
  onClick,
  type = "button",
}: ButtonWhiteTextProps) {
  const baseClasses =
    "inline-flex items-center !text-white border border-white rounded-lg px-5 py-2 text-sm mt-4 cursor-pointer";
  if (href) {
    return (
      <a href={href} download={download} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
