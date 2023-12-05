import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [authOpened, setAuthOpened] = useState(false);

    const toggleAuthOpened = useCallback(() => {
        setAuthOpened(prev => !prev);
    }, [setAuthOpened]);

    const { t } = useTranslation();
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
                <Modal isOpen={authOpened} onClose={toggleAuthOpened}>
                    Lorem ipsum
                </Modal>
            </div>
        </div>
    );
};
