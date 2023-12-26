import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?:string,
}

const Navbar = ({ className }:NavBarProps) => (

    <div className={classNames(cls.Navbar, {}, [className])}>

        <AppLink theme={AppLinkTheme.SECONDARY} to="/">Главная</AppLink>
        <AppLink to="/about">О сайте</AppLink>
    </div>
);

export default Navbar;
