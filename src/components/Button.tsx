import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Children: ReactNode;
  color: string | undefined;
}

export const Button = ({ children, color }: ButtonProps) => {
  return (
    <button className={`bg-${color} inline-flex items-center xsm:px-2 2sm:px-1 justify-center px-10 3sm:px-3 py-5 text-md font-medium text-center rounded-lg bg-black text-white hover:bg-black disabled:opacity-50 disabled:pointer-events-none transition-all`}>
      <span> {children} </span>
    </button>
  );
};
