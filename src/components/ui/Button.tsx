import type { ReactNode } from "react";
import "../../styles/index.scss";



interface IButtonProps {
  children: ReactNode;
  variant: "outline" | "primary";
  className?: string;
  onClick?: ()=>void;
}
const Button = ({ children, variant= "primary" ,className , onClick}: IButtonProps) => {
  const styl= variant === "outline" ? "btn btn--outline" : "btn";

  return <button onClick={onClick} className={`${styl} ${className}`}><span className="text-inherit">{children}</span></button>;
};

export default Button;
