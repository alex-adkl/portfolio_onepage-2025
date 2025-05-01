import { ReactNode } from "react";

type ButtonTextProps = {
  children: ReactNode;
  href?: string;
  download?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
};

export default function ButtonText({
  children,
  href,
  download,
  onClick,
  icon,
  type = "button",
}: ButtonTextProps) {
  const baseClasses =
    "inline-flex items-center gap-3 text-white border border-white rounded-lg px-8 py-4 text-lg hover:bg-white/10 transition-colors duration-300";

  if (href) {
    return (
      <a href={href} download={download} className={baseClasses}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {icon}
      {children}
    </button>
  );
}
