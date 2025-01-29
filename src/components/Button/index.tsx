import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    children?: React.ReactNode;
}

class Button extends React.Component<ButtonProps>{

    render() {

        const {type = "button", children} = this.props;

        return (
            <button type={type} className={style.button}>
                {children}
            </button>
        )
    }
}

export default Button;

