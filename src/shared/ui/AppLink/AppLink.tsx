import { classNames } from 'shared/lib/classNames/classNames';

import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
    theme?:AppLinkTheme;
    className?: string;

}

const AppLink:FC<AppLinkProps> = (props) => {
    const {
        className, children,
        theme = AppLinkTheme.PRIMARY,
        to, ...otherProps
    } = props;

    return (

        <Link
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>

    );
};

export default AppLink;
