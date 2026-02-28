import type { ReactNode } from "react";
import "../../styles/index.scss";



interface IButtonProps {
  children: ReactNode;
  variant: "outline" | "primary";
  className?: string;
}
const Button = ({ children, variant= "primary" ,className }: IButtonProps) => {
  const styl= variant === "outline" ? "btn btn--outline" : "btn";

  return <button className={`${styl} ${className}`}><span className="text-inherit">{children}</span></button>;
};

export default Button;
