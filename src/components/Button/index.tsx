import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    children?: React.ReactNode;
}

class Button extends React.Component<ButtonProps>{

    render() {

        const {type = "button", onClick, children} = this.props;

        return (
            <button onClick={onClick} type={type} className={style.button}>
                {children}
            </button>
        )
    }
}

export default Button;

