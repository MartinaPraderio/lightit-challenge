import { cva } from "class-variance-authority";
import Link from "next/link";
import React, { ReactElement } from "react";

const button = cva(["px-4", "py-2", "cursor-pointer", "transition-all"], {
  variants: {
    intent: {
      primary: ["bg-lightBlue", "hover:bg-darkBlue", "rounded-full", "shadow-md", "font-semibold", "text-white"],
      secondary: ["bg-blue-400", "hover:bg-blue-500"],
      info: ["hover:underline text-gray-700 mr-3"],
      link: ["text-pink-400", "hover:text-gray-700", "px-0"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

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
