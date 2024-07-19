import { cva } from "class-variance-authority";
import Link from "next/link";
import React, { ReactElement } from "react";

const button = cva(
  [
    "px-4",
    "py-2",
    "rounded-full",
    "cursor-pointer",
    "transition-all",
    "text-white",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-lightPink", "hover:bg-darkPink"],
        secondary: ["bg-blue-400", "hover:bg-blue-500"],
        info: ["bg-gray-400", "hover:bg-gray-500"],
        link: ["bg-none", "text-pink-400", "hover:text-pink-500", "px-0"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactElement;
  href?: string;
  variant?: "primary" | "secondary" | "info" | "link";
  label: string;
}

export const Button = ({ href, label, variant, ...props }: ButtonProps) => {
  return (
    <>
      {href && (
        <Link href={href} passHref>
          <button className={button({ intent: variant })} {...props}>
            {label}
          </button>
        </Link>
      )}
      {!href && (
        <button className={button({ intent: variant })} {...props}>
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
