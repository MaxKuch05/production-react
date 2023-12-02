import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (<div className="">{t('Главная страница')}</div>);
};

export default MainPage;
