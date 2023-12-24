import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ThemeButton;
    className?: string;

}



const Button : FC<ButtonProps> = ( props ) => {

    const {className ,theme ,  children ,...otherProps} = props;

    return (

        <button 
            className={classNames(cls.Button, {}, [className,cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>

    );

}



export default Button