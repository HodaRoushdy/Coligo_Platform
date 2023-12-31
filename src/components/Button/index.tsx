
import { IBtnProps } from "../interfaces";




const Button = ({
  children,
  className,
  width = "w-fit",
  ...rest
}: IBtnProps) => {
  return (
    <button
      className={`${className} ${width} rounded-md p-2 border-2 border-indigo-500 cursor-pointer `}
      {...rest}>
      {children}
    </button>
  );
};
export default Button;
