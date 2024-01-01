import { ButtonHTMLAttributes, ReactNode } from "react";

type widthType = "w-full" | "w-fit";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: widthType;
}
const Button = ({ children, className, width = "w-fit", ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} rounded-md p-2 border-2 border-indigo-500 cursor-pointer `}
      {...rest}>
      {children}
    </button>
  );
};
export default Button;
