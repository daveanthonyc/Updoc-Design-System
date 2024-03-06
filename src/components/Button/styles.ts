import { updocTheme } from "../../core/updocTheme";

const variants = {
    primary: {

    },
    secondary: {

    }
}

const sizes = {
    sm: {
        padding: '20px',
        borderRadius: '9px'
    },
    md: {
        padding: '30px',
        borderRadius: '9px'
    }
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
