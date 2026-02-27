import type { ReactNode } from "react";
import "../../styles/index.scss";



interface IButtonProps {
  children: ReactNode;
  variant: "outline" | "primary";
}
const Button = ({ children, variant= "primary" }: IButtonProps) => {
  const className= variant === "outline" ? "btn btn--outline" : "btn";

  return <button className={`${className}`}><span className="text-inherit">{children}</span></button>;
};

export default Button;
