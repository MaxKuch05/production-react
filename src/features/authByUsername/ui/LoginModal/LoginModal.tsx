import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => {
    return (
        <Modal 
            onClose={onClose} 
            isOpen={isOpen} 
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};
