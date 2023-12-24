import { classNames } from 'shared/lib/classNames/classNames'

import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider';

import DatkLogo from 'shared/assets/icons/theme-dark.svg'
import LigthLogo from 'shared/assets/icons/theme-light.svg'
import Button, { ThemeButton } from 'shared/ui/Button/ui/Button';


interface ThemeSwitcherProps {

    className?: string;

}



const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {

    const { theme, toggleTheme } = useTheme();

    return (

        <Button 
            className={classNames(cls.ThemeSwitcher,{} , [className])} onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
            >
            {theme === Theme.DARK ?  <DatkLogo /> : <LigthLogo />}

        </Button>
        
    );

}



export default ThemeSwitcher