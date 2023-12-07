import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/authByUsername/ui/LoginModal/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [authOpened, setAuthOpened] = useState(false);
    const authData = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const toggleAuthOpened = useCallback(() => {
        setAuthOpened(prev => !prev);
    }, [setAuthOpened]);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button
                        theme={ButtonTheme.INVERTED_CLEAR}
                        className={cls.mainLink}
                        onClick={onLogout}
                    >
                        {t('Выйти')}
                    </Button>
                </div>
            </div>
        );  
    } 

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.INVERTED_CLEAR}
                    className={cls.mainLink}
                    onClick={toggleAuthOpened}
                >
                    {t('Войти')}
                </Button>
                <LoginModal isOpen={authOpened} onClose={() => setAuthOpened(false)}/>
            </div>
        </div>
    );
};
