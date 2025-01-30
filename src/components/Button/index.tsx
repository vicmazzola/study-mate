import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    children?: React.ReactNode;
}

function Button({ onClick, type = "button", children}: ButtonProps) {
    return (
        <button onClick={onClick} type={type} className={style.button}>
            {children}
        </button>
    )
}

export default Button;

