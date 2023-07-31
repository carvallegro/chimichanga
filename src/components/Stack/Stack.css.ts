import {recipe, RecipeVariants} from "@vanilla-extract/recipes";
import {theme} from "../../css/theme.css";

export const stack = recipe({
    base: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.space['2x'],
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap'
    },

    variants: {
        direction:{
            vertical: {
                flexDirection: 'column',
            },
            horizontal: {
                width: '100%',
                flexDirection: 'row',
            }
        }
    }
})

export type StackVariants = RecipeVariants<typeof stack>
