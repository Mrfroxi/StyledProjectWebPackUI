import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {

    className?: string;

}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (

        <Button
            type="button"
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Тектовый пример')}

        </Button>

    );
};

export default LangSwitcher;
