import { ReactNode } from "react";

type ButtonPurpleTextProps = {
  children: ReactNode;
  href?: string;
  download?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function ButtonPurpleText({
  children,
  href,
  download,
  onClick,
  type = "button",
}: ButtonPurpleTextProps) {
  const baseClasses =
    "inline-flex items-center !text-[#7c86ff] border border-[#7c86ff] rounded-lg px-5 py-2 text-sm mt-4 cursor-pointer";

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
