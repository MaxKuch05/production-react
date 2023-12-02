import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps)  => {
    const reload = () => {
        location.reload();
    };
    
    return ( 
        <div className={classNames(cls.PageError, {}, [className])}>
            <h3>Something went wrong</h3>
            <button onClick={reload}>Reload</button>
        </div>
    );
};