import {base, variants, button, ButtonVariants} from "./Button.css";
import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants['color']
    size?: ButtonVariants['size']
    isRound?: ButtonVariants['rounded']
}

export const Button = ({variant, size, isRound, ...props}: ButtonProps) => {

    return <button className={button({
        color: variant,
        size,
        rounded: isRound
    })} {...props}/>
}
