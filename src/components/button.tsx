import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const variantStyles = {
  primary: "bg-sky-900 text-white",
  secondary: "bg-white text-black border-gray-300",
  text: "h-auto px-0 border-transparent",
};

const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter, ...rest } = props;
  const variantClass = variantStyles[variant] || "";

  return (
    <button
      className={twMerge(
        "h-11 px-6 rounded-xl border border-black uppercase inline-flex items-center gap-2",
        variantClass,
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
