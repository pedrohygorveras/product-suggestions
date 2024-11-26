import React from "react";

interface iButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
  target?: string;
}

export const Button: React.FC<iButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  href,
  target = "_self",
}) => {
  const baseClasses = `py-3 bg-primary text-slate-950 text-sm font-semibold uppercase rounded min-w-52 outline-none transition-all duration-200 ${className} ${!disabled ? "hover:scale-[1.020]" : ""}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={`${baseClasses} ${disabled ? "opacity-50" : ""}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`${baseClasses} ${disabled ? "opacity-50" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {disabled && type === "submit" ? (
        <div className="flex items-center justify-center">
          Aguarde <span className="loading loading-bars loading-md ml-3"></span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
