import { Modal } from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';

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
            <Suspense fallback={<Loader />}>
                <LoginForm />
            </Suspense>
        </Modal>
    );
};
