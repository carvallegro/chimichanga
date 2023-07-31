import {HTMLAttributes, PropsWithChildren} from "react";
import {stack, StackVariants} from "./Stack.css";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: StackVariants["direction"];
}

export function Stack({
  direction = "vertical",
  ...props
}: PropsWithChildren<StackProps>) {
  return (<div className={stack({
    direction
  })} {...props}/>)
}
