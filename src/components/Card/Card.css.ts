import {recipe, RecipeVariants} from "@vanilla-extract/recipes";
import {theme} from "../../css/theme.css";

export const card = recipe({
    base: {
        boxShadow: theme.shadows['medium'],
        borderRadius: theme.radii["4x"],
        backgroundColor: theme.color.primary.bg,
        padding: theme.space['4x'],
    },
    variants: {
        color: {
            primary: {backgroundColor: theme.color.primary.bg},
            neutral: {backgroundColor: theme.color.neutral.bg},
            highlight: {backgroundColor: theme.color.highlight.bg}
        },
        fullWidth:{
            true:{
                width: '100%'
            },
            false: {
                width: 'initial'
            }
        },
        elevation: {
            low: {
                boxShadow: theme.shadows['low']
            },
            medium: {
                boxShadow: theme.shadows['medium']
            },
            high: {
                boxShadow: theme.shadows['high']
            },
        }
    }
})

export type CardVariants = RecipeVariants<typeof card>
