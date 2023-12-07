import { classNames } from 'shared/lib/classNames/classNames';  
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/authByUsername/model/slice/loginSlice';
import { getLoginState } from 'entities/User/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/authByUsername/model/services/loginByUsername/loginByUsername';

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title='Форма авторизации' />
            {error && <Text theme={TextTheme.ERROR} text={error} />}
            <Input 
                value={username} 
                onChange={onChangeUsername} 
                placeholder='Логин' 
                className={cls.input}
            />
            <Input 
                value={password} 
                onChange={onChangePassword} 
                placeholder='Пароль' 
                className={cls.input}
            />
            <Button disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn}>Войти</Button>
        </div>
    );
});
