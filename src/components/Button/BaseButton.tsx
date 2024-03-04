import { 
    ButtonHTMLAttributes, 
    PropsWithChildren, 
    useCallback, 
    useRef, 
    MouseEvent
} from "react";

import { mergeRefs } from "../../core/utils/mergeRefs";
import { tokens } from "../../core/tokens";
import { forwardRef } from "react";

export type BaseButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
    function BaseButton({onClick: onClickProp, type = 'button', ...props}, forwardedRef) {

        const ref = useRef<HTMLButtonElement>(null);

        const onClick = useCallback(
            (event: MouseEvent<HTMLButtonElement>) => {
                onClickProp?.(event)
                ref.current?.focus();
        }, [ref, onClickProp]);

        return (
            <button 
                type={type}
                ref={mergeRefs([ref, forwardedRef])}
                onClick={onClick}
                css={{
                    appearance: "none",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: tokens.font.body,
                }}
                {...props}
            />
        )
    }
);

export default BaseButton;
