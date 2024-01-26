import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement;
  Children: ReactNode;
}

export const Button = ({ children, icon }: ButtonProps) => {
  return (
    <button className="inline-flex items-center xsm:px-2 2sm:px-1 justify-center px-10 3sm:px-3 py-5 text-sm font-medium text-center rounded-lg bg-black text-white hover:bg-black disabled:opacity-50 disabled:pointer-events-none transition-all">
      <span> {children} </span>
      {icon}
    </button>
  );
};
