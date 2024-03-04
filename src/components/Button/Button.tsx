import { PropsWithChildren, forwardRef } from "react";
import BaseButton, { BaseButtonProps } from "./BaseButton";
import { ButtonSize, ButtonVariant, buttonStyles } from "./styles";

type CommonButtonProps = {
    block?: boolean,
    size?: ButtonSize,
    variant?: ButtonVariant
}

type ButtonProps = PropsWithChildren & BaseButtonProps & CommonButtonProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    function Button({children, onClick, block, variant, size, ...props}, forwardedRef) {

        const styles = buttonStyles({block, variant, size});

        return (
            <BaseButton 
                onClick={onClick}
                ref={forwardedRef}
                {...props}
                css={styles}
                >
                <span>
                    <span>{children}</span>
                </span>
            </BaseButton>
        )
    }
)

export default Button;
