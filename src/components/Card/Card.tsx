import {HTMLAttributes, PropsWithChildren} from "react";

import {card, CardVariants} from "./Card.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariants["color"];
    elevation?: CardVariants["elevation"];
    fullWidth?: boolean;
}

export function Card({
                         variant = "primary",
                         elevation = "medium",
                         fullWidth,
                         ...props
                     }: PropsWithChildren<CardProps>) {
    return (<div className={card({
            color: variant,
            elevation,
            fullWidth
        })} {...props} />
    )
}
