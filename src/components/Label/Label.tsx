import {HTMLAttributes, PropsWithChildren} from "react";
import {label} from "./Label.css";

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  rounded?: boolean
}

export const Label = ({ rounded, ...props }: PropsWithChildren<LabelProps>) => {
  return (
    <label
      className={label({rounded})}
      {...props}
    />
  );
};
