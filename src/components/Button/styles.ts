import { css } from "@emotion/react"
import { updocTheme } from "../../core/updocTheme";

const variants = {
    primary: css({
        backgroundColor: 'blue'
    }),
    secondary: css({

    })
}

const sizes = {
    sm: css({

    }),
    md: css({

    })
}

export type ButtonSize = keyof typeof sizes;
export type ButtonVariant = keyof typeof variants;

export function buttonStyles({
    block,
    variant = 'primary',
    size = 'md'
}: {
    block?: boolean,
    variant?: ButtonVariant,
    size?: ButtonSize
}) {
    /*return css({
        border: `1px solid ${updocTheme.lightAccent}`,
        backgroundColor: updocTheme.lightAccent,
        color: updocTheme.lightForegroundText,
        appearance: 'none',
        boxSizing: 'border-box',
        position: 'relative',
        display: block ? 'flex' : 'inline-flex',
        ...variants[variant],
        ...sizes[size]
    })*/
    return {
        border: `1px solid ${updocTheme.lightAccent}`,
        backgroundColor: updocTheme.lightAccent,
        color: updocTheme.lightForegroundText,
        appearance: 'none',
        boxSizing: 'border-box',
        position: 'relative',
        display: block ? 'flex' : 'inline-flex',
        ...variants[variant],
        ...sizes[size]
    }
}
