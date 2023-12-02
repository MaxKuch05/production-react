import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

const MainPage = () => {
    const { t } = useTranslation('not-found');
    return (
        <div className={
            classNames(styles.NotFoundPage)}
        >
            {t('Страница не найдена')}
        </div>
    );
};

export default MainPage;
