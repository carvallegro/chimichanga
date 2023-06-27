import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes';
;
import {theme} from "../../css/theme.css";

export const button = recipe({
    base: {
        padding: theme.space["1x"],
        border: "none",
        cursor: 'pointer',
        ':hover': {
            opacity: .5,
        }
    },

    variants:{
        color: {
            primary: {backgroundColor: theme.color.primary.bg},
            neutral: {backgroundColor: theme.color.neutral.bg},
            highlight: {backgroundColor: theme.color.highlight.bg}
        },
        size:{
            small: {
                padding: theme.space["1x"],
                borderRadius: theme.radii["1x"],
            },
            medium: {
                padding: theme.space["2x"],
                borderRadius: theme.radii["2x"]
            },
            large: {
                padding: theme.space["3x"],
                borderRadius: theme.radii["3x"]
            }
        },
        rounded: {
            true: { borderRadius: theme.radii.round }
        }
    },

    defaultVariants: {
        color: 'primary',
        size: 'small'
    }
})

export type ButtonVariants = RecipeVariants<typeof button>;
