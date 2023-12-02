import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => {
    return (
        <span className={classNames('loader', {}, [ className ])}></span>
    );
};

export default Loader;
