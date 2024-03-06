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
                ref.current?.focus();
                onClickProp?.(event)
        }, [ref, onClickProp]);

        return (
            <button 
                ref={mergeRefs([ref, forwardedRef])}
                type={type}
                onClick={onClick}
                css={{
                    appearance: "none",
                    background: "transparent",
                    cursor: "pointer",
                    border: "none",
                    padding: 0,
                    fontFamily: tokens.font.body,
                    fontSize: "inherit",
                    lineHeight: "inherit",
                }}
                {...props}
            />
        )
    }
);

export default BaseButton;
