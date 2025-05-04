import { ReactNode } from "react";

type ButtonTextProps = {
  children: ReactNode;
  href?: string;
  download?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function ButtonText({
  children,
  href,
  download,
  onClick,
  icon,
  disabled = false,
  type = "button",
}: ButtonTextProps) {
  const baseClasses =
    "inline-flex items-center gap-3 text-white border border-white rounded-lg px-8 py-4 text-lg transition-colors duration-300";
  const enabledClasses = "hover:bg-white/10 cursor-pointer";
  const disabledClasses = "opacity-50 cursor-not-allowed";

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={`${baseClasses} ${enabledClasses}`}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={`${baseClasses} ${
        disabled ? disabledClasses : enabledClasses
      }`}
    >
      {icon}
      {children}
    </button>
  );
}
