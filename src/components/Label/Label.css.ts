import {recipe} from "@vanilla-extract/recipes";
import {theme} from "../../css/theme.css";

export const label = recipe({
    base: {
      padding: '1px',
      fontSize: theme.fontSizes['12px'],
    },
    variants: {
        rounded: {
            true: { borderRadius: theme.radii.round }
        }
    }
})

export type LabelVariants = typeof label
